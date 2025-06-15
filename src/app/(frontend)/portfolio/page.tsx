import type { Metadata } from 'next'

import { PortfolioHeroBlock } from '@/blocks/PortfolioHero/Component'
import { PortfolioEventTypesBlock } from '@/blocks/PortfolioEventTypes/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

export default async function Portfolio() {
  return (
    <>
      <PortfolioHeroBlock />
      <PortfolioEventTypesBlock />
      <TestimonialsBlock />
      <FAQBlock />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Portfolio - Golden Bond',
  description: 'Explore our wide variety of past work and event types we specialize in.',
}
