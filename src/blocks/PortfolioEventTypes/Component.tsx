'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface EventCard {
  image: string
  alt: string
  category: string
  name: string
  description: string
}

interface PortfolioEventTypesBlockProps {
  heading?: {
    subtitle?: string
    title?: string
  }
  eventCards?: EventCard[]
  viewAllButtonText?: string
}

const defaultEventCards: EventCard[] = [
  {
    image: '/images/portfolio/wedding.jpg',
    alt: 'Wedding Events',
    category: 'Weddings',
    name: 'Wedding Celebrations',
    description:
      'Elegant bridal jewelry experiences, engagement parties, and wedding celebrations with bespoke pieces.',
  },
  {
    image: '/images/story-time/jewels.jpg',
    alt: 'Corporate Events',
    category: 'Corporate',
    name: 'Business Gatherings',
    description:
      'Professional jewelry showcases, corporate gifts, and executive appreciation events.',
  },
  {
    image: '/images/services/popup-events.jpg',
    alt: 'Anniversary Events',
    category: 'Anniversaries',
    name: 'Milestone Celebrations',
    description:
      'Special anniversary jewelry experiences and commemorative pieces for lasting memories.',
  },
  {
    image: '/images/portfolio/birthday.jpg',
    alt: 'Birthday Events',
    category: 'Birthdays',
    name: 'Birthday Celebrations',
    description:
      'Personalized birthday jewelry experiences, custom pieces, and memorable gift selections.',
  },
  {
    image: '/images/portfolio/holidays.jpg',
    alt: 'Holiday Events',
    category: 'Holidays',
    name: 'Seasonal Gatherings',
    description:
      'Festive holiday jewelry collections, seasonal gifts, and special occasion pieces.',
  },
  {
    image: '/images/services/popup-events.jpg',
    alt: 'Private Events',
    category: 'Private',
    name: 'Intimate Experiences',
    description:
      'Exclusive private showings, personalized consultations, and bespoke jewelry creation.',
  },
]

export const PortfolioEventTypesBlock: React.FC<PortfolioEventTypesBlockProps> = ({
  heading = {
    subtitle: 'Our Services',
    title: 'Event Types We Specialize In',
  },
  eventCards = defaultEventCards,
  viewAllButtonText = 'VIEW ALL SERVICES',
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as any

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 1,
      },
    },
  } as any

  return (
    <motion.section
      className="w-full min-h-screen flex flex-col relative px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#F4F1EB]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.div
        className="heading-container flex justify-center items-center"
        variants={headerVariants}
      >
        <div className="inner-heading w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] flex flex-col justify-center items-center text-center px-2 sm:px-4">
          <h2 className="text-[#B58E5A] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] uppercase tenor-font">
            {heading.subtitle}
          </h2>
          <h1 className="text-[#1B0E01] garamond-font font-semibold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[115%] sm:leading-[120%] mt-[6px] sm:mt-[8px] max-w-full">
            {heading.title}
          </h1>
        </div>
      </motion.div>

      <div className="cards-container mt-[32px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] relative z-10">
        <motion.div
          className="cards grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-[24px] sm:gap-y-[28px] md:gap-y-[32px] gap-x-[32px] sm:gap-x-[40px] md:gap-x-[50px] lg:gap-x-[60px] max-w-[350px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[1340px] xl:max-w-[1340px] mx-auto justify-items-center"
          variants={containerVariants}
        >
          {eventCards.map((card, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link href="/portfolio/category" className="block">
                <div className="event-card w-full max-w-[320px] sm:max-w-[350px] md:max-w-[600px] lg:w-[640px] xl:w-[640px] h-[350px] sm:h-[380px] md:h-[420px] lg:h-[453px] xl:h-[453px] relative shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 350px, (max-width: 1024px) 600px, 640px"
                  />
                  {/* Default overlay */}
                  <div className="absolute inset-0 bg-[#1B0E01]/52 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover overlay with darker background */}
                  <div className="absolute inset-0 bg-[#1B0E01]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 text-[14px] lg:text-[16px] leading-[18px] sm:leading-[19px] uppercase tenor-font transition-colors duration-300 hover:shadow-md">
                      EXPLORE {card.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Default content - visible when not hovering */}
                  <div className="card-content absolute inset-0 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 flex flex-col justify-end z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="card-content-inner mb-2 sm:mb-3 lg:mb-4">
                      <h3 className="text-[#B58E5A] tenor-font font-semibold text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] leading-[18px] sm:leading-[20px] mb-1 sm:mb-2 tracking-[0.25px] uppercase">
                        {card.category}
                      </h3>
                      <h2 className="text-white garamond-font font-semibold text-[18px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[24px] leading-[115%] sm:leading-[120%] mb-1 sm:mb-2">
                        {card.name}
                      </h2>
                    </div>
                    <div className="card-description mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
                      <p className="text-white/90 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[140%] sm:leading-[145%] lg:leading-[150%] tenor-font max-w-[500px]">
                        {card.description}
                      </p>
                    </div>
                    <div className="card-buttons">
                      <div className="text-white hover:text-[#B58E5A] flex items-center justify-center sm:justify-start text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] leading-[18px] sm:leading-[19px] uppercase tenor-font transition-colors duration-300 group">
                        EXPLORE
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-[6px] sm:ml-[8px] transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <motion.div
        className="view-all-container flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16"
        variants={buttonVariants}
      >
        <Link href="/portfolio/category">
          <button className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[18px] sm:leading-[19px] uppercase tenor-font transition-colors duration-300 hover:shadow-md">
            {viewAllButtonText}
          </button>
        </Link>
      </motion.div>

      {/* Decorative ellipses positioned behind cards - progressive visibility */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Large ellipse on bottom left - hidden on mobile and small screens */}
        <motion.div
          className="hidden lg:block absolute bottom-[300px] xl:bottom-[350px] left-[15px] xl:left-[20px] z-0 opacity-60"
          variants={decorativeVariants}
        >
          <Image
            src="/images/large-ellipse.svg"
            alt="decorative ellipse"
            width={200}
            height={200}
            className="lg:w-[220px] lg:h-[220px] xl:w-[257px] xl:h-[257px]"
          />
        </motion.div>
        {/* Small ellipse on upper right - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-[40px] sm:top-[50px] lg:top-[60px] right-[20px] sm:right-[40px] md:right-[60px] lg:right-[80px] xl:right-[90px] z-0 opacity-70"
          variants={decorativeVariants}
        >
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={120}
            height={120}
            className="md:w-[130px] md:h-[130px] lg:w-[145px] lg:h-[145px] xl:w-[160px] xl:h-[160px]"
          />
        </motion.div>
        {/* Additional medium ellipse for balance with 2-card layout */}
        <motion.div
          className="hidden lg:block absolute top-[250px] right-[200px] z-0 opacity-40"
          variants={decorativeVariants}
        >
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={140}
            height={140}
            className="lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px]"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
