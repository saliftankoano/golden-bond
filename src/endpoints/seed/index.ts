import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'
import * as fs from 'fs'
import * as path from 'path'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { homeStatic } from './home-static'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'
import { gbHero } from './gb-hero'
import { gbPrivateEvents, gbBusinessEvents, gbPopupEvents } from './gb-services'
import { gbExperience1, gbExperience2, gbExperience3 } from './gb-experience'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]
const globals: GlobalSlug[] = ['header', 'footer']

// Helper function to read local image files
async function readLocalImageFile(imagePath: string): Promise<File> {
  const fullPath = path.join(process.cwd(), 'public', imagePath)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Image file not found: ${fullPath}`)
  }

  const data = fs.readFileSync(fullPath)
  const ext = path.extname(imagePath).toLowerCase()
  const name = path.basename(imagePath)

  let mimetype: string
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      mimetype = 'image/jpeg'
      break
    case '.png':
      mimetype = 'image/png'
      break
    case '.webp':
      mimetype = 'image/webp'
      break
    default:
      mimetype = 'image/jpeg'
  }

  return {
    name,
    data: Buffer.from(data),
    mimetype,
    size: data.length,
  }
}

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding Golden Bond media...`)

  // Read Golden Bond image files
  const [
    gbHeroBuffer,
    gbPrivateEventsBuffer,
    gbBusinessEventsBuffer,
    gbPopupEventsBuffer,
    gbExp1Buffer,
    gbExp2Buffer,
    gbExp3Buffer,
  ] = await Promise.all([
    readLocalImageFile('images/hero.jpg'),
    readLocalImageFile('images/services/private-events.jpg'),
    readLocalImageFile('images/services/business-events.jpg'),
    readLocalImageFile('images/services/popup-events.jpg'),
    readLocalImageFile('images/experience/experience1.png'),
    readLocalImageFile('images/experience/experience2.png'),
    readLocalImageFile('images/experience/experience3.png'),
  ])

  const [
    demoAuthor,
    gbHeroDoc,
    gbPrivateEventsDoc,
    gbBusinessEventsDoc,
    gbPopupEventsDoc,
    gbExp1Doc,
    gbExp2Doc,
    gbExp3Doc,
  ] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: gbHero,
      file: gbHeroBuffer,
    }),
    payload.create({
      collection: 'media',
      data: gbPrivateEvents,
      file: gbPrivateEventsBuffer,
    }),
    payload.create({
      collection: 'media',
      data: gbBusinessEvents,
      file: gbBusinessEventsBuffer,
    }),
    payload.create({
      collection: 'media',
      data: gbPopupEvents,
      file: gbPopupEventsBuffer,
    }),
    payload.create({
      collection: 'media',
      data: gbExperience1,
      file: gbExp1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: gbExperience2,
      file: gbExp2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: gbExperience3,
      file: gbExp3Buffer,
    }),
  ])

  payload.logger.info(`— Seeding Golden Bond pages...`)

  // Create the Golden Bond home page with proper media references
  const homePageData = {
    ...homeStatic,
    hero: {
      ...homeStatic.hero,
      media: gbHeroDoc.id,
    },
    layout: [
      {
        blockType: 'services' as const,
        subheading: 'CHOOSE YOUR EXPERIENCE',
        heading: 'Tailored Events for Every Occasion',
        services: [
          {
            category: 'Private Events',
            title: 'Intimate Celebrations',
            description: 'Perfect for bachelorette parties, birthdays, and special gatherings',
            image: gbPrivateEventsDoc.id,
            buttons: [
              {
                label: 'BOOK NOW',
                style: 'primary' as const,
                link: '/booking',
              },
              {
                label: 'EXPLORE',
                style: 'secondary' as const,
                link: '/private-party',
              },
            ],
          },
          {
            category: 'Business Events',
            title: 'Professional Gatherings',
            description: 'Ideal for corporate meetings, team building, and networking events.',
            image: gbBusinessEventsDoc.id,
            buttons: [
              {
                label: 'BOOK NOW',
                style: 'primary' as const,
                link: '/booking',
              },
              {
                label: 'EXPLORE',
                style: 'secondary' as const,
                link: '/corporate',
              },
            ],
          },
          {
            category: 'Popup Events',
            title: 'Pop-Up Experiences',
            description: 'Unique temporary experiences and exclusive showcases.',
            image: gbPopupEventsDoc.id,
            buttons: [
              {
                label: 'BOOK NOW',
                style: 'primary' as const,
                link: '/booking',
              },
              {
                label: 'EXPLORE',
                style: 'secondary' as const,
                link: '/popup',
              },
            ],
          },
        ],
      },
      {
        blockType: 'experience' as const,
        subheading: 'What we can do for you',
        heading: 'The Golden Bond Experience',
        description:
          "Golden Bond is about celebrating connections that spark meaning. We're more than jewelry - we're an extension of your bond, your story, your forever evolving story.<br /><br />Whether it's a statement, a symbol, a milestone, or a moment worth holding onto - our Bracelet Bar sparks the story.<br /><br />Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.",
        buttonText: 'Book Now',
        buttonLink: '/booking',
        images: [
          {
            image: gbExp1Doc.id,
            caption: 'Gems & Glamour: A Jewelry Showcase',
          },
          {
            image: gbExp2Doc.id,
            caption: 'Sparkle & Shine Jewelry Showcase',
          },
          {
            image: gbExp3Doc.id,
            caption: 'Magic & Mystery: A Jewelry Showcase',
          },
        ],
      },
    ],
  }

  await payload.create({
    collection: 'pages',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: homePageData,
  })

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'About',
              url: '/about',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Services',
              url: '/services',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Portfolio',
              url: '/portfolio',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Contact',
              url: '/contact',
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Golden Bond',
              url: '/',
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded Golden Bond database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
