-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policy: Users can read their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- RLS Policy: Only admins can insert/update/delete roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create hero_content table
CREATE TABLE public.hero_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL DEFAULT 'Ihre Schönheit, unsere Leidenschaft',
  subtitle TEXT NOT NULL DEFAULT 'Professionelle Haarschnitte, Coloration & Styling im Herzen von Würzburg Heidingsfeld.',
  cta_primary TEXT NOT NULL DEFAULT 'Jetzt Termin buchen',
  cta_secondary TEXT NOT NULL DEFAULT 'Unsere Leistungen',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.hero_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view hero content"
ON public.hero_content FOR SELECT TO public USING (true);

CREATE POLICY "Admins can update hero content"
ON public.hero_content FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert default hero content
INSERT INTO public.hero_content (title, subtitle, cta_primary, cta_secondary) VALUES (
  'Ihre Schönheit, unsere Leidenschaft',
  'Professionelle Haarschnitte, Coloration & Styling im Herzen von Würzburg Heidingsfeld. Seit über 20 Jahren Ihr Partner für perfekte Looks.',
  'Jetzt Termin buchen',
  'Unsere Leistungen'
);

-- Create services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  icon_name TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view services"
ON public.services FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage services"
ON public.services FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  quote TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
ON public.testimonials FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage testimonials"
ON public.testimonials FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create team_members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view team members"
ON public.team_members FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage team members"
ON public.team_members FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery images"
ON public.gallery_images FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage gallery images"
ON public.gallery_images FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create contact_info table
CREATE TABLE public.contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  opening_hours JSONB NOT NULL DEFAULT '{"monday": "09:00 - 18:00", "tuesday": "09:00 - 18:00", "wednesday": "09:00 - 18:00", "thursday": "09:00 - 18:00", "friday": "09:00 - 18:00", "saturday": "09:00 - 14:00", "sunday": "Geschlossen"}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.contact_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view contact info"
ON public.contact_info FOR SELECT TO public USING (true);

CREATE POLICY "Admins can update contact info"
ON public.contact_info FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert default contact info
INSERT INTO public.contact_info (address, phone, email) VALUES (
  'Musterstraße 123, 97084 Würzburg',
  '+49 931 12345678',
  'info@salon-hartbauer.de'
);

-- Create social_links table
CREATE TABLE public.social_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL,
  url TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (platform)
);

ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view social links"
ON public.social_links FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage social links"
ON public.social_links FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Insert default social links
INSERT INTO public.social_links (platform, url) VALUES 
  ('instagram', 'https://instagram.com'),
  ('facebook', 'https://facebook.com');

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('salon-images', 'salon-images', true);

-- Storage policies for salon-images bucket
CREATE POLICY "Anyone can view salon images"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'salon-images');

CREATE POLICY "Admins can upload salon images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'salon-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update salon images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'salon-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete salon images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'salon-images' AND public.has_role(auth.uid(), 'admin'));

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.hero_content
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.services
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.testimonials
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.team_members
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.gallery_images
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.contact_info
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.social_links
FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE TO authenticated
USING (auth.uid() = id);

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();