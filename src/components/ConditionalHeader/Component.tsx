'use client'

import { usePathname } from 'next/navigation'
import { StaticHeader } from '@/components/StaticHeader'
import { TransparentHeader } from '@/components/TransparentHeader'

export const ConditionalHeader: React.FC = () => {
  const pathname = usePathname()

  // Use transparent header on home page, static header on all other pages
  if (pathname === '/') {
    return <TransparentHeader />
  }

  return <StaticHeader />
}
