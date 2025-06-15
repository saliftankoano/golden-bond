import type { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      required: false,
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading',
      required: false,
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      maxRows: 3,
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: false,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Service Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'Buttons',
          maxRows: 2,
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
              required: true,
            },
            {
              name: 'style',
              type: 'select',
              label: 'Button Style',
              options: [
                {
                  label: 'Primary',
                  value: 'primary',
                },
                {
                  label: 'Secondary',
                  value: 'secondary',
                },
              ],
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              label: 'Link URL',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
