import type { Media } from '@/payload-types'

export const gbPrivateEvents: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Private Events - Intimate jewelry experiences for special celebrations',
}

export const gbBusinessEvents: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Business Events - Professional jewelry experiences for corporate gatherings',
}

export const gbPopupEvents: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Popup Events - Unique temporary jewelry experiences and showcases',
}
