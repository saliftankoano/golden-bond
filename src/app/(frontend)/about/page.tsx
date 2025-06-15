import React from 'react'
import { AboutHeroBlock } from '@/blocks/AboutHero/Component'
import { FounderBlock } from '@/blocks/Founder/Component'
import { ExpertsBlock } from '@/blocks/Experts/Component'
import { CTABlock } from '@/blocks/CTA/Component'

export default function AboutPage() {
  return (
    <>
      <AboutHeroBlock />
      <FounderBlock />
      <ExpertsBlock />
      <CTABlock />
    </>
  )
}

export function generateMetadata() {
  return {
    title: 'About - Golden Bond',
    description:
      'Learn about Golden Bond Jewelry and our team of experts creating custom-fit, welded permanent jewelry.',
  }
}
