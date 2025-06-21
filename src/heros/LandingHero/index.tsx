'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'

export const LandingHero: React.FC<Page['hero']> = ({ media }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  } as any

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
      },
    },
  } as any

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  } as any

  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
    },
  } as any

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  } as any

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Image or Default Golden Bond Image */}
      <motion.div className="relative w-full h-screen" variants={imageVariants}>
        {media && typeof media === 'object' ? (
          <Media fill imgClassName="object-cover object-[50%_63%]" priority resource={media} />
        ) : (
          // Default Golden Bond hero image
          <Image
            src="/images/hero.jpg"
            alt="Elegant woman wearing layered gold jewelry in luxury jewelry store"
            fill
            className="object-cover object-[50%_63%]"
            priority
          />
        )}

        {/* Dark overlay for better text readability */}
        <motion.div className="absolute inset-0 bg-black/20" variants={overlayVariants} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] xl:text-[78px] garamond-font leading-[120%] tracking-[1%] mb-[20px] sm:mb-[24px] md:mb-[32px] lg:mb-[40px]">
              <motion.span
                className="block"
                variants={headlineVariants}
                style={{ transformOrigin: 'center bottom' }}
              >
                PRIVATE EVENTS
              </motion.span>
              <motion.span
                className="block"
                variants={headlineVariants}
                style={{ transformOrigin: 'center bottom' }}
              >
                BUSINESS EVENTS
              </motion.span>
              <motion.span
                className="block"
                variants={headlineVariants}
                style={{ transformOrigin: 'center bottom' }}
              >
                POP-UPS
              </motion.span>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-white/80 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] tenor-font tracking-wide max-w-full sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] mx-auto leading-[140%] sm:leading-[150%] px-2 sm:px-0"
              variants={subtitleVariants}
            >
              Golden Bond is about celebrating connections that spark meaning.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
