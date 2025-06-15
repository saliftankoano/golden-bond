import type { Metadata } from 'next'
import { PrivatePartyHero } from '@/blocks/PrivatePartyHero/Component'
import { PrivatePartyFind } from '@/blocks/PrivatePartyFind/Component'
import { PrivatePartyPastEvents } from '@/blocks/PrivatePartyPastEvents/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

export const metadata: Metadata = {
  title: 'Private Party Events - Golden Bond',
  description:
    'Book a private jewelry party with Golden Bond. Custom-fit, welded permanent jewelry for your special occasions.',
}

export default function PrivatePartyPage() {
  return (
    <>
      <PrivatePartyHero />
      <PrivatePartyFind />
      <PrivatePartyPastEvents />
      <FAQBlock />
    </>
  )
}
