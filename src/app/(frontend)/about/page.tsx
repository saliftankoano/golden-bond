import React from 'react'
import { AboutHeroBlock } from '@/blocks/AboutHero/Component'
import { FounderBlock } from '@/blocks/Founder/Component'
import { ExpertsBlock } from '@/blocks/Experts/Component'
import { CTABlock } from '@/blocks/CTA/Component'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function AboutPage() {
  return (
    <>
      <AboutHeroBlock />

      <AnimatedSection direction="left" delay={0.1}>
        <FounderBlock />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.2}>
        <ExpertsBlock />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
        <CTABlock />
      </AnimatedSection>
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
