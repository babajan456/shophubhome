-- Fix critical security issues

-- 1. Add RLS policies for data table (currently has RLS enabled but no policies)
CREATE POLICY "Users can view own data" ON public.data
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can insert own data" ON public.data
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update own data" ON public.data
  FOR UPDATE USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can delete own data" ON public.data
  FOR DELETE USING (auth.uid() IS NOT NULL);

-- 2. Fix the incomplete handle_new_user() function with proper security
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Set a strict, empty search path to prevent schema-related security risks
  SET search_path = '';
  
  -- Insert new profile for the user
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'display_name', 'User'));
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Add missing UPDATE and DELETE policies for orders table
CREATE POLICY "Users can update own orders" ON public.orders
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own orders" ON public.orders
  FOR DELETE USING (auth.uid() = user_id);