import type { Block } from 'payload'

export const Founder: Block = {
  slug: 'founder',
  interfaceName: 'FounderBlock',
  labels: {
    singular: 'Founder',
    plural: 'Founders',
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
      defaultValue: 'Meet Our Team',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      required: true,
      defaultValue:
        'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
    },
    {
      name: 'founderLabel',
      type: 'text',
      required: true,
      defaultValue: 'MEET The Ceo and her four-legged colleague',
    },
    {
      name: 'founderName',
      type: 'text',
      required: true,
      defaultValue: 'Lexie & Cash',
    },
    {
      name: 'founderStory',
      type: 'richText',
      required: true,
    },
    {
      name: 'founderImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
