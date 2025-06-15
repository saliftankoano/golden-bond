import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'aboutCTA',
  interfaceName: 'AboutCTABlock',
  labels: {
    singular: 'About CTA',
    plural: 'About CTAs',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'The Golden Bond | Event & Design',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Reserve Your Exquisite Jewelry Experience!',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.',
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
