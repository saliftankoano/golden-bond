import type { Page } from '../../payload-types'

export const aboutStatic: Partial<Page> = {
  title: 'About',
  slug: 'about',
  _status: 'published',
  hero: {
    type: 'none',
  },
  layout: [
    {
      blockType: 'aboutHero',
      title: 'Tailored Events for\nEvery Occasion',
      description:
        'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
      buttonText: 'Plan My Event',
      buttonLink: '#',
      // Use placeholder image ID that should be replaced with actual uploaded image
      image: 1, // placeholder
    },
    {
      blockType: 'founder',
      sectionLabel: 'Golden Bond Team',
      sectionTitle: 'Meet Our Team',
      sectionDescription:
        'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
      founderLabel: 'MEET The Ceo and her four-legged colleague',
      founderName: 'Lexie & Cash',
      founderStory: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  text: "Golden Bond is about celebrating connections that spark meaning. We're more than jewelry - we're an extension of your bond, your story, your forever evolving story. Whether it's a statement, a symbol, a milestone, or a moment worth holding onto - our Bracelet Bar sparks the story. Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.",
                  type: 'text',
                  version: 1,
                },
              ],
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      // Use placeholder image ID that should be replaced with actual uploaded image
      founderImage: 2, // placeholder
    },
    {
      blockType: 'experts',
      sectionLabel: 'Golden Bond Team',
      sectionTitle: 'Our Experts.',
      sectionDescription:
        'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
      experts: [
        {
          name: 'Beth',
          title: 'Sales & Marketing',
          description:
            'Beth serves as advisor, operations, financial and risk management advisor — not daily operator.',
          image: 3, // placeholder
        },
        {
          name: 'Mia',
          title: 'Operations & Production',
          description:
            'Mia serves as advisor, operations, financial and risk management advisor — not daily operator.',
          image: 4, // placeholder
        },
        {
          name: 'Sky',
          title: 'Operations & Production',
          description:
            'Sky serves as advisor, operations, financial and risk management advisor — not daily operator.',
          image: 5, // placeholder
        },
        {
          name: 'Taara',
          title: 'Operations & Production',
          description:
            'Taara serves as advisor, operations, financial and risk management advisor — not daily operator.',
          image: 6, // placeholder
        },
        {
          name: 'Sophia',
          title: 'Operations & Production',
          description:
            'Sophia serves as advisor, operations, financial and risk management advisor — not daily operator.',
          image: 7, // placeholder
        },
      ],
    },
    {
      blockType: 'aboutCTA',
      title: 'The Golden Bond | Event & Design',
      heading: 'Reserve Your Exquisite Jewelry Experience!',
      description:
        'Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.',
      buttonText: 'Plan My Event',
      buttonLink: '#',
      // Use placeholder image ID that should be replaced with actual uploaded image
      image: 8, // placeholder
    },
  ],
}
