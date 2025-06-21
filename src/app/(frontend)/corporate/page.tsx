import type { Metadata } from 'next'
import { CorporateHero } from '@/blocks/CorporateHero/Component'
import { CorporatePartners } from '@/blocks/CorporatePartners/Component'
import { CorporateFind } from '@/blocks/CorporateFind/Component'
import { CorporatePastEvents } from '@/blocks/CorporatePastEvents/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Corporate Events - Golden Bond',
  description:
    'Book a corporate jewelry party with Golden Bond. Custom-fit, welded permanent jewelry for your team events.',
}

export default function CorporateEventsPage() {
  return (
    <>
      <CorporateHero />

      <AnimatedSection direction="up" delay={0.1}>
        <CorporatePartners />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.1}>
        <CorporateFind />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.1}>
        <CorporatePastEvents />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
        <FAQBlock />
      </AnimatedSection>
    </>
  )
}
