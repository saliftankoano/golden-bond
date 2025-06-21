'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Step {
  title: string
  description: string
  image: string
}

interface CorporateFindProps {
  title?: string
  steps?: Step[]
}

const defaultSteps: Step[] = [
  {
    title: 'Select a Chain',
    description: 'All 14k gold option',
    image: '/images/private-party/pick.jpg',
  },
  {
    title: 'Choose a Charm',
    description: 'A naked chain is just fine too',
    image: '/images/private-party/pick.jpg',
  },
  {
    title: 'Pick Your Placement',
    description: 'Bracelet, Necklace, Ring or Anklet',
    image: '/images/private-party/pick.jpg',
  },
  {
    title: 'Custom Fit It',
    description: 'Bracelet, Necklace, Ring or Anklet',
    image: '/images/private-party/pick.jpg',
  },
]

export const CorporateFind: React.FC<CorporateFindProps> = ({
  title = 'Find Your Missing Piece',
  steps = defaultSteps,
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

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as any

  const stepVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as any

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
  } as any

  return (
    <motion.section
      className="w-screen bg-[#F4F1EB] flex flex-col items-center relative pt-[100px] overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Small Ellipse */}
      <motion.div className="absolute top-[120px] left-[5px]" variants={decorativeVariants}>
        <Image src="/images/small-ellipse.svg" alt="" width={146} height={146} />
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-[500px] mb-[80px] px-4"
        variants={headerVariants}
      >
        <h2 className="garamond-font text-[32px] sm:text-[40px] md:text-[48px] text-black leading-[120%] text-center">
          {title}
        </h2>
      </motion.div>

      {/* Steps Grid */}
      <motion.div
        className="flex gap-[20px] max-w-[1350px] mx-auto px-[20px] pb-[80px]"
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-[317px]"
            variants={stepVariants}
          >
            {/* Image Container */}
            <div className="w-[317px] h-[379px] relative mb-[30px]">
              <Image src={step.image} alt={step.title} fill className="object-cover" />
            </div>

            {/* Step Content */}
            <div className="text-center">
              <h3 className="garamond-font text-[24px] text-black leading-[120%] mb-[8px]">
                {step.title}
              </h3>
              <p className="text-[16px] text-[#4A4A4A] leading-[150%] tenor-font">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
