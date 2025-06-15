import type { Block } from 'payload'

export const AboutHero: Block = {
  slug: 'aboutHero',
  interfaceName: 'AboutHeroBlock',
  labels: {
    singular: 'About Hero',
    plural: 'About Heroes',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Tailored Events for Every Occasion',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'Plan My Event',
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: false,
      defaultValue: '#',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
