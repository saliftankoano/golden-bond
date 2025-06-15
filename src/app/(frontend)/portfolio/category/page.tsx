import type { Metadata } from 'next'

import { PortfolioCategoryHeroBlock } from '@/blocks/PortfolioCategoryHero/Component'
import { PortfolioGalleryBlock } from '@/blocks/PortfolioGallery/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

export default async function PortfolioCategory() {
  return (
    <>
      <PortfolioCategoryHeroBlock />
      <PortfolioGalleryBlock />
      <TestimonialsBlock />
      <FAQBlock />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Portfolio Category - Golden Bond',
  description: 'Explore our wide variety of past work in this specific category.',
}
