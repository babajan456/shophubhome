-- Add RLS Policies for all new tables

-- RLS Policies for restaurants (public read, owner write)
CREATE POLICY "Anyone can view restaurants" ON public.restaurants FOR SELECT USING (true);
CREATE POLICY "Restaurant owners can manage their restaurants" ON public.restaurants 
  FOR ALL USING (auth.uid() = owner_id);

-- RLS Policies for menu categories
CREATE POLICY "Anyone can view menu categories" ON public.menu_categories FOR SELECT USING (true);
CREATE POLICY "Restaurant owners can manage their categories" ON public.menu_categories 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.restaurants 
      WHERE id = restaurant_id AND owner_id = auth.uid()
    )
  );

-- RLS Policies for menu items
CREATE POLICY "Anyone can view menu items" ON public.menu_items FOR SELECT USING (true);
CREATE POLICY "Restaurant owners can manage their menu items" ON public.menu_items 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.restaurants 
      WHERE id = restaurant_id AND owner_id = auth.uid()
    )
  );

-- RLS Policies for delivery partners
CREATE POLICY "Delivery partners can view their own profile" ON public.delivery_partners 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Delivery partners can update their own profile" ON public.delivery_partners 
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Anyone can view basic delivery partner info" ON public.delivery_partners 
  FOR SELECT USING (true);

-- RLS Policies for restaurant reviews
CREATE POLICY "Anyone can view restaurant reviews" ON public.restaurant_reviews FOR SELECT USING (true);
CREATE POLICY "Users can create reviews for their orders" ON public.restaurant_reviews 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own reviews" ON public.restaurant_reviews 
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for order tracking
CREATE POLICY "Users can view tracking for their orders" ON public.order_tracking 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders 
      WHERE id = order_id AND user_id = auth.uid()
    )
  );

-- Create indexes for performance
CREATE INDEX idx_restaurants_location ON public.restaurants USING btree (latitude, longitude);
CREATE INDEX idx_restaurants_city ON public.restaurants USING btree (city);
CREATE INDEX idx_restaurants_cuisine ON public.restaurants USING gin (cuisine_type);
CREATE INDEX idx_menu_items_restaurant ON public.menu_items USING btree (restaurant_id);
CREATE INDEX idx_menu_items_category ON public.menu_items USING btree (category_id);
CREATE INDEX idx_orders_restaurant ON public.orders USING btree (restaurant_id);
CREATE INDEX idx_orders_delivery_partner ON public.orders USING btree (delivery_partner_id);
CREATE INDEX idx_restaurant_reviews_restaurant ON public.restaurant_reviews USING btree (restaurant_id);

-- Create trigger for updating restaurant ratings
CREATE OR REPLACE FUNCTION update_restaurant_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.restaurants 
  SET 
    rating = (
      SELECT AVG(rating)::DECIMAL(3,2) 
      FROM public.restaurant_reviews 
      WHERE restaurant_id = COALESCE(NEW.restaurant_id, OLD.restaurant_id)
    ),
    review_count = (
      SELECT COUNT(*)
      FROM public.restaurant_reviews 
      WHERE restaurant_id = COALESCE(NEW.restaurant_id, OLD.restaurant_id)
    )
  WHERE id = COALESCE(NEW.restaurant_id, OLD.restaurant_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Fix search path for update function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

CREATE TRIGGER update_restaurant_rating_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.restaurant_reviews
  FOR EACH ROW EXECUTE FUNCTION update_restaurant_rating();

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_restaurants_updated_at
  BEFORE UPDATE ON public.restaurants
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_menu_items_updated_at
  BEFORE UPDATE ON public.menu_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_delivery_partners_updated_at
  BEFORE UPDATE ON public.delivery_partners
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();