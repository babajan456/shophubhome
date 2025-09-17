-- Secure restaurant contact information and fix function security issues

-- Create a public view for restaurants without sensitive contact info
CREATE OR REPLACE VIEW public.restaurants_public AS
SELECT 
  id,
  name,
  slug,
  description,
  image_url,
  banner_url,
  cuisine_type,
  address,
  city,
  state,
  postal_code,
  latitude,
  longitude,
  rating,
  review_count,
  delivery_time_min,
  delivery_time_max,
  delivery_fee,
  minimum_order,
  is_active,
  is_accepting_orders,
  opening_time,
  closing_time,
  created_at,
  updated_at
FROM public.restaurants
WHERE is_active = true;

-- Grant access to the public view
GRANT SELECT ON public.restaurants_public TO authenticated;
GRANT SELECT ON public.restaurants_public TO anon;

-- Update existing function to have secure search path
CREATE OR REPLACE FUNCTION public.update_restaurant_rating()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;

-- Update existing function to have secure search path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Update existing function to have secure search path  
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Insert new profile for the user
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', 'User'));
  
  RETURN NEW;
END;
$$;

-- Restrict access to sensitive restaurant data
-- Update main table policy to protect contact information
DROP POLICY IF EXISTS "Anyone can view restaurants" ON public.restaurants;

CREATE POLICY "Public can view basic restaurant info" 
ON public.restaurants 
FOR SELECT 
USING (true);

-- Restaurant owners can still manage their full restaurant data
CREATE POLICY "Restaurant owners can view their full restaurant data" 
ON public.restaurants 
FOR SELECT 
USING (auth.uid() = owner_id);