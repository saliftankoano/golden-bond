import type { Metadata } from 'next'

import { PortfolioHeroBlock } from '@/blocks/PortfolioHero/Component'
import { PortfolioEventTypesBlock } from '@/blocks/PortfolioEventTypes/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { AnimatedSection } from '@/components/AnimatedSection'

export default async function Portfolio() {
  return (
    <>
      <PortfolioHeroBlock />

      <AnimatedSection direction="up" delay={0.1}>
        <PortfolioEventTypesBlock />
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
  title: 'Portfolio - Golden Bond',
  description: 'Explore our wide variety of past work and event types we specialize in.',
}
