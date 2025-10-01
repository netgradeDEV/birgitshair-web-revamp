// Sanity Schema: Price Category
// Copy this to your Sanity Studio project under schemas/

export default {
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
