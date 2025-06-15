import type { Block } from 'payload'

export const Experts: Block = {
  slug: 'experts',
  interfaceName: 'ExpertsBlock',
  labels: {
    singular: 'Experts',
    plural: 'Experts',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      required: true,
      defaultValue: 'Golden Bond Team',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Our Experts.',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
    },
    {
      name: 'experts',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 10,
    },
  ],
}
