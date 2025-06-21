'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PopupHeroProps {
  title?: string
  description?: string
  backgroundImage?: string
}

export const PopupHero: React.FC<PopupHeroProps> = ({
  title = 'Popup Events',
  description = 'Discover our exclusive popup events that bring unique experiences to unexpected locations.',
  backgroundImage = '/images/services/popup-events.jpg',
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as any

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  } as any

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as any

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  } as any

  return (
    <motion.section
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-gradient-to-b from-[#F4F1EB] to-[#E8E3DB] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" variants={backgroundVariants}>
        <Image src={backgroundImage} alt="Popup Events" fill className="object-cover" priority />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 garamond-font leading-tight drop-shadow-lg"
            variants={titleVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white mb-8 tenor-font leading-relaxed max-w-3xl mx-auto drop-shadow-md"
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}
