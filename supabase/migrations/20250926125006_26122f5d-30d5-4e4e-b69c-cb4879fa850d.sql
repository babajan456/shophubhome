-- Find and fix any remaining security definer views
-- Check for functions that might be creating security definer views

-- Drop any remaining problematic elements
DROP VIEW IF EXISTS public.delivery_partners_public CASCADE;

-- Check if there are any functions creating security definer views
-- Let's see what's causing the security definer view warnings

-- Recreate delivery partners view properly without security definer
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

-- Grant access properly
GRANT SELECT ON public.delivery_partners_public TO authenticated;
GRANT SELECT ON public.delivery_partners_public TO anon;

-- Remove any security definer functions that might be creating views
-- The get_public_delivery_partner_info function is fine as it's a function, not a view