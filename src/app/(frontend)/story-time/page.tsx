import type { Metadata } from 'next'

import { StoryTimeHeroBlock } from '@/blocks/StoryTimeHero/Component'
import { StoryTimeEventsBlock } from '@/blocks/StoryTimeEvents/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { AnimatedSection } from '@/components/AnimatedSection'

export default async function StoryTime() {
  return (
    <>
      <StoryTimeHeroBlock />

      <AnimatedSection direction="up" delay={0.1}>
        <StoryTimeEventsBlock />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <TestimonialsBlock />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
        <FAQBlock />
      </AnimatedSection>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Story Time - Golden Bond',
  description:
    'Golden Bond is about celebrating connections that spark meaning. Explore our tailored events for every occasion.',
}
