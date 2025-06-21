'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Partner {
  name: string
  logo: string
}

interface CorporatePartnersProps {
  title?: string
  partners?: Partner[]
}

const defaultPartners: Partner[] = [
  {
    name: 'Google',
    logo: '/images/corporate/logo1.svg',
  },
  {
    name: 'Panda Express',
    logo: '/images/corporate/logo2.svg',
  },
  {
    name: 'HSBC',
    logo: '/images/corporate/logo3.svg',
  },
  {
    name: 'Forbes',
    logo: '/images/corporate/logo4.svg',
  },
  {
    name: 'Partner Logo 5',
    logo: '/images/corporate/logo1.svg',
  },
  {
    name: 'Partner Logo 6',
    logo: '/images/corporate/logo2.svg',
  },
  {
    name: 'Partner Logo 7',
    logo: '/images/corporate/logo3.svg',
  },
  {
    name: 'Partner Logo 8',
    logo: '/images/corporate/logo4.svg',
  },
]

export const CorporatePartners: React.FC<CorporatePartnersProps> = ({
  title = "BRANDS WE'VE PARTNERED WITH",
  partners = defaultPartners,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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

  const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as any

  return (
    <motion.section
      className="w-full bg-[#F4F1EB] flex flex-col items-center py-[80px] px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="text-center mb-[60px]" variants={headerVariants}>
        <h2 className="garamond-font text-[32px] font-semibold text-black leading-[120%] tracking-wider">
          {title}
        </h2>
      </motion.div>

      {/* Partners Grid */}
      <div className="max-w-6xl w-full">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              variants={logoVariants}
            >
              <div className="w-[80px] h-[60px] md:w-[100px] md:h-[75px] relative flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
