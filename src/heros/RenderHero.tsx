import React from 'react'

import type { Page } from '@/payload-types'

import { LandingHero } from '@/heros/LandingHero'

const heroes = {
  landingHero: LandingHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
