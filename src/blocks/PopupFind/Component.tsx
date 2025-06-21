'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PopupFindProps {
  title?: string
  description1?: string
  description2?: string
  buttonText?: string
  buttonLink?: string
  image?: string
}

export const PopupFind: React.FC<PopupFindProps> = ({
  title = 'Find Your Perfect Popup Experience',
  description1 = 'Our popup events bring unique experiences to unexpected locations. From intimate gatherings to surprise celebrations, we create memorable moments that appear when you least expect them.',
  description2 = 'Each popup event is carefully curated to provide an exclusive experience that combines creativity, luxury, and the element of surprise.',
  buttonText = 'PLAN YOUR POPUP',
  buttonLink = '#',
  image = '/images/services/popup-events.jpg',
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  } as any

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as any

  const imageVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as any

  return (
    <motion.section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div className="space-y-6" variants={textVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 garamond-font leading-tight"
              variants={textVariants}
            >
              {title.split('Popup').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && 'Popup'}
                  {index === 0 && <br />}
                </span>
              ))}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 tenor-font leading-relaxed"
              variants={textVariants}
            >
              {description1}
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 tenor-font leading-relaxed"
              variants={textVariants}
            >
              {description2}
            </motion.p>
            <motion.a
              href={buttonLink}
              className="inline-block bg-[#B58E5A] text-white px-8 py-4 text-lg font-light tracking-wide hover:bg-amber-700 transition-colors tenor-font"
              variants={textVariants}
            >
              {buttonText}
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" variants={imageVariants}>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image src={image} alt="Popup Events Setup" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
