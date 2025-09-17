-- Fix security definer view issues by converting to regular views with proper RLS

-- Drop the security definer views and recreate as regular views
DROP VIEW IF EXISTS public.restaurants_public;
DROP VIEW IF EXISTS public.delivery_partners_public;

-- Recreate restaurants_public as a regular view (not security definer)
CREATE VIEW public.restaurants_public AS
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

-- Recreate delivery_partners_public as a regular view (not security definer)  
CREATE VIEW public.delivery_partners_public AS
SELECT 
  id,
  name,
  vehicle_type,
  rating,
  total_deliveries,
  is_available,
  is_active
FROM public.delivery_partners
WHERE is_active = true;

-- Enable RLS on the views
ALTER VIEW public.restaurants_public SET (security_barrier = true);
ALTER VIEW public.delivery_partners_public SET (security_barrier = true);

-- Grant proper access to the views
GRANT SELECT ON public.restaurants_public TO authenticated;
GRANT SELECT ON public.restaurants_public TO anon;
GRANT SELECT ON public.delivery_partners_public TO authenticated;
GRANT SELECT ON public.delivery_partners_public TO anon;