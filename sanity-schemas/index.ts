// Sanity Schema Index
// Copy this to your Sanity Studio project under schemas/index.ts

import service from './service';
import teamMember from './teamMember';
import galleryItem from './galleryItem';
import priceCategory from './priceCategory';
import testimonial from './testimonial';
import siteSettings from './siteSettings';

export const schemaTypes = [
  service,
  teamMember,
  galleryItem,
  priceCategory,
  testimonial,
  siteSettings,
];
