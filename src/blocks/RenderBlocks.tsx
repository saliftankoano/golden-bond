import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ServicesBlock } from '@/blocks/Services/Component'
import { ExperienceBlock } from '@/blocks/Experience/Component'
import { AboutHeroBlock } from '@/blocks/AboutHero/Component'
import { FounderBlock } from '@/blocks/Founder/Component'
import { ExpertsBlock } from '@/blocks/Experts/Component'
import { CTABlock } from '@/blocks/CTA/Component'
import { AnimatedSection } from '@/components/AnimatedSection'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  services: ServicesBlock,
  experience: ExperienceBlock,
  aboutHero: AboutHeroBlock,
  founder: FounderBlock,
  experts: ExpertsBlock,
  aboutCTA: CTABlock,
}

// Define animation directions for different block types
const getAnimationDirection = (
  blockType: string,
  index: number,
): 'up' | 'down' | 'left' | 'right' | 'fade' => {
  // Alternate directions for visual variety
  const directions: ('up' | 'fade' | 'left' | 'right')[] = ['up', 'fade', 'left', 'right']

  // Special cases for specific block types
  switch (blockType) {
    case 'mediaBlock':
      return 'fade'
    case 'cta':
    case 'aboutCTA':
      return 'up'
    case 'services':
    case 'experience':
      return index % 2 === 0 ? 'left' : 'right'
    default:
      return directions[index % directions.length] || 'up'
  }
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <AnimatedSection
                  key={index}
                  direction={getAnimationDirection(blockType, index)}
                  delay={index * 0.1} // Stagger animations slightly
                >
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </AnimatedSection>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
