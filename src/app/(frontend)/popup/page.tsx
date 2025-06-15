import type { Metadata } from 'next'
import { PopupHero } from '@/blocks/PopupHero/Component'
import { PopupFind } from '@/blocks/PopupFind/Component'
import { PopupPastEvents } from '@/blocks/PopupPastEvents/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

export const metadata: Metadata = {
  title: 'Popup Events - Golden Bond',
  description:
    'Discover our exclusive popup events that bring unique jewelry experiences to unexpected locations',
}

export default function PopupEventsPage() {
  return (
    <>
      <PopupHero />
      <PopupFind />
      <PopupPastEvents />
      <FAQBlock />
    </>
  )
}
