import type { Metadata } from 'next'
import { ContactHero } from '@/blocks/ContactHero/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { FAQBlock } from '@/blocks/FAQ/Component'

export const metadata: Metadata = {
  title: 'Contact - Golden Bond',
  description: 'Get in touch with Golden Bond Jewelry for custom permanent jewelry experiences',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <TestimonialsBlock />
      <FAQBlock />
    </>
  )
}
