-- Reset database to original state by dropping all food delivery tables
DROP TABLE IF EXISTS public.order_tracking CASCADE;
DROP TABLE IF EXISTS public.restaurant_reviews CASCADE;
DROP TABLE IF EXISTS public.delivery_partners CASCADE;
DROP TABLE IF EXISTS public.menu_items CASCADE;
DROP TABLE IF EXISTS public.menu_categories CASCADE;
DROP TABLE IF EXISTS public.restaurants CASCADE;

-- Drop the functions that were added
DROP FUNCTION IF EXISTS public.update_restaurant_rating() CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- Remove the triggers
DROP TRIGGER IF EXISTS update_restaurant_rating_trigger ON public.restaurant_reviews;
DROP TRIGGER IF EXISTS update_restaurants_updated_at ON public.restaurants;
DROP TRIGGER IF EXISTS update_menu_items_updated_at ON public.menu_items;
DROP TRIGGER IF EXISTS update_delivery_partners_updated_at ON public.delivery_partners;

-- Remove the indexes
DROP INDEX IF EXISTS idx_restaurants_location;
DROP INDEX IF EXISTS idx_restaurants_city;
DROP INDEX IF EXISTS idx_restaurants_cuisine;
DROP INDEX IF EXISTS idx_menu_items_restaurant;
DROP INDEX IF EXISTS idx_menu_items_category;
DROP INDEX IF EXISTS idx_orders_restaurant;
DROP INDEX IF EXISTS idx_orders_delivery_partner;
DROP INDEX IF EXISTS idx_restaurant_reviews_restaurant;

-- Reset the orders table to its original structure
ALTER TABLE public.orders DROP COLUMN IF EXISTS restaurant_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS delivery_partner_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS delivery_address;
ALTER TABLE public.orders DROP COLUMN IF EXISTS delivery_fee;
ALTER TABLE public.orders DROP COLUMN IF EXISTS tax_amount;
ALTER TABLE public.orders DROP COLUMN IF EXISTS discount_amount;
ALTER TABLE public.orders DROP COLUMN IF EXISTS estimated_delivery_time;
ALTER TABLE public.orders DROP COLUMN IF EXISTS actual_delivery_time;
ALTER TABLE public.orders DROP COLUMN IF EXISTS delivery_instructions;
ALTER TABLE public.orders DROP COLUMN IF EXISTS order_type;
ALTER TABLE public.orders DROP COLUMN IF EXISTS special_instructions;

-- Reset the orders table status column to its original default
ALTER TABLE public.orders ALTER COLUMN status SET DEFAULT 'pending';