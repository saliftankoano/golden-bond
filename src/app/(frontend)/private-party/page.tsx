import type { Metadata } from 'next'
import { PrivatePartyHero } from '@/blocks/PrivatePartyHero/Component'
import { PrivatePartyFind } from '@/blocks/PrivatePartyFind/Component'
import { PrivatePartyPastEvents } from '@/blocks/PrivatePartyPastEvents/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Private Party Events - Golden Bond',
  description:
    'Book a private jewelry party with Golden Bond. Custom-fit, welded permanent jewelry for your special occasions.',
}

export default function PrivatePartyPage() {
  return (
    <>
      <PrivatePartyHero />

      <AnimatedSection direction="left" delay={0.1}>
        <PrivatePartyFind />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.1}>
        <PrivatePartyPastEvents />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
        <FAQBlock />
      </AnimatedSection>
    </>
  )
}
