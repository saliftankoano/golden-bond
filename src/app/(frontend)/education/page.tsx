import type { Metadata } from 'next'
import { EducationHero } from '@/blocks/EducationHero/Component'

export const metadata: Metadata = {
  title: 'Education - Golden Bond',
  description:
    'Become a true permanent jewelry pro. Learn from industry experts with hands-on training, professional coaching, and the best tools in the business.',
}

export default function EducationPage() {
  return (
    <>
      <EducationHero />
    </>
  )
}
