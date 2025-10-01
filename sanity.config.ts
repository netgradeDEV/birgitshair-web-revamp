import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

// Import schemas
const serviceSchema = {
  name: 'service',
  title: 'Leistungen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon Name (Lucide React)',
      type: 'string',
      description: 'z.B.: scissors, palette, sparkles (Kleinbuchstaben, mit Bindestrichen)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Haarschnitt', value: 'haircut' },
          { title: 'Coloration', value: 'coloring' },
          { title: 'Styling', value: 'styling' },
          { title: 'Treatment', value: 'treatment' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Kleinere Zahlen werden zuerst angezeigt',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

const teamMemberSchema = {
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Biografie',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'specializations',
      title: 'Spezialisierungen',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

const galleryItemSchema = {
  name: 'galleryItem',
  title: 'Galerie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Farbe', value: 'Farbe' },
          { title: 'Schnitt', value: 'Schnitt' },
          { title: 'Styling', value: 'Styling' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

const priceCategorySchema = {
  name: 'priceCategory',
  title: 'Preiskategorien',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Kategorie Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Leistungen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'service',
              title: 'Leistung',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Preis',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'duration',
              title: 'Dauer',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Beschreibung',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

const serviceCategorySchema = {
  name: 'serviceCategory',
  title: 'Leistungskategorien (Detailseite)',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Kategorie Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon Name (Lucide React)',
      type: 'string',
      description: 'z.B.: scissors, palette, sparkles, droplets, wind, gem',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Leistungen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Leistungsname',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Beschreibung',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};

const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Website Einstellungen',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Seitenname',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'openingHours',
      title: 'Öffnungszeiten',
      type: 'text',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
      ],
    },
    {
      name: 'heroTitle',
      title: 'Hero Titel',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Untertitel',
      type: 'text',
    },
    {
      name: 'heroCTA',
      title: 'Hero Call-to-Action Button Text',
      type: 'string',
    },
  ],
};

export default defineConfig({
  name: 'default',
  title: 'Friseursalon Hartbauer CMS',
  projectId: 'uhi2qq06',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [
      serviceSchema,
      teamMemberSchema,
      galleryItemSchema,
      serviceCategorySchema,
      priceCategorySchema,
      testimonialSchema,
      siteSettingsSchema,
    ],
  },
});
