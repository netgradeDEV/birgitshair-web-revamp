import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity Client Configuration
export const sanityClient = createClient({
  projectId: 'uhi2qq06',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false for real-time updates in development
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  if (!source || !source.asset) {
    return null;
  }
  return builder.image(source);
}
