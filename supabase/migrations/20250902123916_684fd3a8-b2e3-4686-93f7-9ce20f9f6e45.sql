-- Fix security vulnerability: Restrict public access to delivery partner sensitive data
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can view basic delivery partner info" ON public.delivery_partners;

-- Create a new restricted policy that only allows viewing basic, non-sensitive information
CREATE POLICY "Public can view basic delivery partner info" 
ON public.delivery_partners 
FOR SELECT 
USING (
  -- Only allow access to non-sensitive fields by creating a view-like restriction
  -- This policy will be used with a view or specific column selection
  true
);

-- Create a security definer function to get safe delivery partner info
CREATE OR REPLACE FUNCTION public.get_public_delivery_partner_info(partner_id uuid)
RETURNS TABLE (
  id uuid,
  name text,
  vehicle_type text,
  rating numeric,
  total_deliveries integer,
  is_available boolean
) 
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT 
    dp.id,
    dp.name,
    dp.vehicle_type,
    dp.rating,
    dp.total_deliveries,
    dp.is_available
  FROM public.delivery_partners dp
  WHERE dp.id = partner_id AND dp.is_active = true;
$$;

-- Create a view for public delivery partner information
CREATE OR REPLACE VIEW public.delivery_partners_public AS
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

-- Grant access to the view for authenticated and anonymous users
GRANT SELECT ON public.delivery_partners_public TO authenticated;
GRANT SELECT ON public.delivery_partners_public TO anon;

-- Update the main table policy to be more restrictive
DROP POLICY IF EXISTS "Public can view basic delivery partner info" ON public.delivery_partners;

-- Only delivery partners themselves can view their full profile
CREATE POLICY "Delivery partners can view own full profile" 
ON public.delivery_partners 
FOR SELECT 
USING (auth.uid() = user_id);

-- Admins or restaurant owners might need access during order processing
-- but we'll handle that through functions rather than direct table access