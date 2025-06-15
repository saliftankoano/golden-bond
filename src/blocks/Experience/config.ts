import type { Block } from 'payload'

export const Experience: Block = {
  slug: 'experience',
  interfaceName: 'ExperienceBlock',
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
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      admin: {
        description: 'Use <br /><br /> for line breaks',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      required: false,
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      required: false,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Experience Images',
      maxRows: 3,
      minRows: 3,
      admin: {
        description:
          'Upload exactly 3 images: 1st (top-left), 2nd (middle-right), 3rd (bottom-left)',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Image Caption',
          required: true,
        },
      ],
    },
  ],
}
