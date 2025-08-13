-- Phase 1: Core Database Structure for Food Ordering Platform

-- Create restaurants table
CREATE TABLE public.restaurants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  banner_url TEXT,
  cuisine_type TEXT[],
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  phone TEXT,
  email TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  delivery_time_min INTEGER DEFAULT 30,
  delivery_time_max INTEGER DEFAULT 45,
  delivery_fee DECIMAL(10,2) DEFAULT 0,
  minimum_order DECIMAL(10,2) DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  is_accepting_orders BOOLEAN DEFAULT true,
  opening_time TIME,
  closing_time TIME,
  owner_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create menu categories table
CREATE TABLE public.menu_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create menu items table (replacing products)
CREATE TABLE public.menu_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  category_id UUID REFERENCES public.menu_categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  image_url TEXT,
  images TEXT[],
  is_vegetarian BOOLEAN DEFAULT false,
  is_vegan BOOLEAN DEFAULT false,
  is_gluten_free BOOLEAN DEFAULT false,
  spice_level INTEGER DEFAULT 0, -- 0-5 scale
  calories INTEGER,
  preparation_time INTEGER DEFAULT 15,
  is_available BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  tags TEXT[],
  ingredients TEXT[],
  allergens TEXT[],
  nutritional_info JSONB,
  customization_options JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create delivery partners table
CREATE TABLE public.delivery_partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  vehicle_type TEXT NOT NULL, -- bike, car, scooter
  vehicle_number TEXT,
  license_number TEXT,
  is_active BOOLEAN DEFAULT true,
  is_available BOOLEAN DEFAULT false,
  current_latitude DECIMAL(10,8),
  current_longitude DECIMAL(11,8),
  rating DECIMAL(3,2) DEFAULT 0,
  total_deliveries INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Update orders table for food ordering
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS restaurant_id UUID REFERENCES public.restaurants(id);
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS delivery_partner_id UUID REFERENCES public.delivery_partners(id);
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS delivery_address JSONB;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS delivery_instructions TEXT;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS delivery_fee DECIMAL(10,2) DEFAULT 0;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS tax_amount DECIMAL(10,2) DEFAULT 0;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS discount_amount DECIMAL(10,2) DEFAULT 0;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS estimated_delivery_time TIMESTAMP WITH TIME ZONE;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS actual_delivery_time TIMESTAMP WITH TIME ZONE;
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS order_type TEXT DEFAULT 'delivery'; -- delivery, pickup
ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS special_instructions TEXT;

-- Update order status to include food delivery statuses
ALTER TABLE public.orders DROP CONSTRAINT IF EXISTS orders_status_check;
ALTER TABLE public.orders ADD CONSTRAINT orders_status_check 
  CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'picked_up', 'out_for_delivery', 'delivered', 'cancelled'));

-- Create restaurant reviews table
CREATE TABLE public.restaurant_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  order_id UUID REFERENCES public.orders(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  food_quality_rating INTEGER CHECK (food_quality_rating >= 1 AND food_quality_rating <= 5),
  delivery_rating INTEGER CHECK (delivery_rating >= 1 AND delivery_rating <= 5),
  is_verified BOOLEAN DEFAULT false,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create order tracking table
CREATE TABLE public.order_tracking (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  message TEXT,
  location_latitude DECIMAL(10,8),
  location_longitude DECIMAL(11,8),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delivery_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.restaurant_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_tracking ENABLE ROW LEVEL SECURITY;

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
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_restaurant_rating_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.restaurant_reviews
  FOR EACH ROW EXECUTE FUNCTION update_restaurant_rating();

-- Create trigger for updated_at timestamps
CREATE TRIGGER update_restaurants_updated_at
  BEFORE UPDATE ON public.restaurants
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_menu_items_updated_at
  BEFORE UPDATE ON public.menu_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_delivery_partners_updated_at
  BEFORE UPDATE ON public.delivery_partners
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();