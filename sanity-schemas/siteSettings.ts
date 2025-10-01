// Sanity Schema: Site Settings
// Copy this to your Sanity Studio project under schemas/

export default {
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
