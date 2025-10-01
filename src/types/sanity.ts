// Sanity Content Types

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Service {
  _id: string;
  _type: 'service';
  title: string;
  description: string;
  icon: string;
  image?: SanityImage;
  category: 'haircut' | 'coloring' | 'styling' | 'treatment';
  order?: number;
}

export interface TeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  position: string;
  bio: string;
  image?: SanityImage;
  specializations?: string[];
  order?: number;
}

export interface GalleryItem {
  _id: string;
  _type: 'galleryItem';
  title: string;
  category: 'Farbe' | 'Schnitt' | 'Styling';
  image: SanityImage;
  order?: number;
}

export interface PriceCategory {
  _id: string;
  _type: 'priceCategory';
  name: string;
  order?: number;
  items: PriceItem[];
}

export interface PriceItem {
  _key: string;
  service: string;
  price: string;
  duration?: string;
  description?: string;
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  name: string;
  text: string;
  order?: number;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
  };
  heroTitle?: string;
  heroSubtitle?: string;
  heroCTA?: string;
}
