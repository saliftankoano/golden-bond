import type { Media } from '@/payload-types'

export const gbHero: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Elegant woman wearing layered gold jewelry in luxury jewelry store',
}
