// Sanity Schema: Service
// Copy this to your Sanity Studio project under schemas/

export default {
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
      description: 'z.B.: Scissors, Palette, Sparkles',
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
