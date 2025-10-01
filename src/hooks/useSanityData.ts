import { useEffect, useState } from 'react';
import { sanityClient } from '@/lib/sanity';
import {
  Service,
  TeamMember,
  GalleryItem,
  ServiceCategory,
  PriceCategory,
  Testimonial,
  SiteSettings,
} from '@/types/sanity';

// Generic Sanity Query Hook
function useSanityQuery<T>(query: string, initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((result) => {
        setData(result || initialData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setError(err);
        setLoading(false);
        // Keep initial data on error
      });
  }, [query]);

  return { data, loading, error };
}

// Services Hook
export function useSanityServices() {
  return useSanityQuery<Service[]>(
    '*[_type == "service"] | order(order asc)',
    []
  );
}

// Team Members Hook
export function useSanityTeam() {
  return useSanityQuery<TeamMember[]>(
    '*[_type == "teamMember"] | order(order asc)',
    []
  );
}

// Gallery Items Hook
export function useSanityGallery() {
  return useSanityQuery<GalleryItem[]>(
    '*[_type == "galleryItem"] | order(order asc)',
    []
  );
}

// Service Categories Hook (for detailed Leistungen page)
export function useSanityServiceCategories() {
  return useSanityQuery<ServiceCategory[]>(
    '*[_type == "serviceCategory"] | order(order asc)',
    []
  );
}

// Price Categories Hook
export function useSanityPrices() {
  return useSanityQuery<PriceCategory[]>(
    '*[_type == "priceCategory"] | order(order asc)',
    []
  );
}

// Testimonials Hook
export function useSanityTestimonials() {
  return useSanityQuery<Testimonial[]>(
    '*[_type == "testimonial"] | order(order asc)',
    []
  );
}

// Site Settings Hook
export function useSanitySiteSettings() {
  return useSanityQuery<SiteSettings | null>(
    '*[_type == "siteSettings"][0]',
    null
  );
}
