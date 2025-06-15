import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'landingHero',
    media: 1, // This will reference the hero image when uploaded
  },
  meta: {
    description:
      'Golden Bond is about celebrating connections that spark meaning. We offer private events, business events, and pop-up experiences.',
    title: 'Golden Bond - Private Events, Business Events & Pop-Ups',
  },
  title: 'Home',
  layout: [
    {
      blockType: 'services',
      subheading: 'CHOOSE YOUR EXPERIENCE',
      heading: 'Tailored Events for Every Occasion',
      services: [
        {
          category: 'Private Events',
          title: 'Intimate Celebrations',
          description: 'Perfect for bachelorette parties, birthdays, and special gatherings',
          image: 2, // Reference to services/private-events.jpg
          buttons: [
            {
              label: 'BOOK NOW',
              style: 'primary',
              link: '/booking',
            },
            {
              label: 'EXPLORE',
              style: 'secondary',
              link: '/private-party',
            },
          ],
        },
        {
          category: 'Business Events',
          title: 'Professional Gatherings',
          description: 'Ideal for corporate meetings, team building, and networking events.',
          image: 3, // Reference to services/business-events.jpg
          buttons: [
            {
              label: 'BOOK NOW',
              style: 'primary',
              link: '/booking',
            },
            {
              label: 'EXPLORE',
              style: 'secondary',
              link: '/corporate',
            },
          ],
        },
        {
          category: 'Popup Events',
          title: 'Pop-Up Experiences',
          description: 'Unique temporary experiences and exclusive showcases.',
          image: 4, // Reference to services/popup-events.jpg
          buttons: [
            {
              label: 'BOOK NOW',
              style: 'primary',
              link: '/booking',
            },
            {
              label: 'EXPLORE',
              style: 'secondary',
              link: '/popup',
            },
          ],
        },
      ],
    },
    {
      blockType: 'experience',
      subheading: 'What we can do for you',
      heading: 'The Golden Bond Experience',
      description:
        "Golden Bond is about celebrating connections that spark meaning. We're more than jewelry - we're an extension of your bond, your story, your forever evolving story.<br /><br />Whether it's a statement, a symbol, a milestone, or a moment worth holding onto - our Bracelet Bar sparks the story.<br /><br />Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.",
      buttonText: 'Book Now',
      buttonLink: '/booking',
      images: [
        {
          image: 5, // Reference to experience/experience1.png
          caption: 'Gems & Glamour: A Jewelry Showcase',
        },
        {
          image: 6, // Reference to experience/experience2.png
          caption: 'Sparkle & Shine Jewelry Showcase',
        },
        {
          image: 7, // Reference to experience/experience3.png
          caption: 'Magic & Mystery: A Jewelry Showcase',
        },
      ],
    },
  ],
}
