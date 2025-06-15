import type { Metadata } from 'next'

import { StoryTimeArticleHeroBlock } from '@/blocks/StoryTimeArticleHero/Component'
import { StoryTimeArticleContentBlock } from '@/blocks/StoryTimeArticleContent/Component'
import { StoryTimeArticleTestimonialBlock } from '@/blocks/StoryTimeArticleTestimonial/Component'

export default async function StoryTimeArticle() {
  return (
    <>
      <StoryTimeArticleHeroBlock />
      <StoryTimeArticleContentBlock />
      <StoryTimeArticleTestimonialBlock />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Why GB is the Ultimate Bachelorette Party Destination - Golden Bond',
  description:
    'Read our latest story about the ultimate bachelorette party experience at Golden Bond Studio.',
}
