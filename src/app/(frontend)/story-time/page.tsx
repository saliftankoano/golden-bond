import type { Metadata } from 'next'

import { StoryTimeHeroBlock } from '@/blocks/StoryTimeHero/Component'
import { StoryTimeEventsBlock } from '@/blocks/StoryTimeEvents/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

export default async function StoryTime() {
  return (
    <>
      <StoryTimeHeroBlock />
      <StoryTimeEventsBlock />
      <TestimonialsBlock />
      <FAQBlock />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Story Time - Golden Bond',
  description:
    'Golden Bond is about celebrating connections that spark meaning. Explore our tailored events for every occasion.',
}
