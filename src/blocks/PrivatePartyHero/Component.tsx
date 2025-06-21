'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PrivatePartyHeroProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  heroImage?: string
}

export const PrivatePartyHero: React.FC<PrivatePartyHeroProps> = ({
  title = 'Book a Private Jewelry Party',
  description = 'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
  buttonText = 'Plan My Event',
  buttonLink = '#',
  heroImage = '/images/private-party/hero.jpg',
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

  const textVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.4,
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
      className="private-party-hero flex flex-col lg:flex-row bg-[#F4F1EB] relative pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.div
        className="left w-full lg:w-1/2 px-[20px] sm:px-[40px] md:px-[50px] lg:ml-[60px] lg:px-0 mt-[30px] md:mt-[40px] lg:mt-[45px]"
        variants={textVariants}
      >
        <div className="w-full max-w-[622px] flex flex-col mx-auto lg:mx-0">
          <motion.h1
            className="w-full text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[54px] text-black garamond-font leading-[120%] mb-[16px] md:mb-[21px]"
            variants={textVariants}
          >
            Book a Private <br /> Jewelry Party
          </motion.h1>
          <motion.p
            className="w-full text-[15px] md:text-[16px] lg:text-[17px] text-[#4A4A4A] leading-[150%] tenor-font mb-[30px] md:mb-[40px] lg:mb-[72px]"
            variants={textVariants}
          >
            {description}
          </motion.p>
          <motion.div
            className="w-full flex justify-center lg:justify-start z-10"
            variants={textVariants}
          >
            <a
              href={buttonLink}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] h-[48px] md:h-[52px] lg:h-[55px] px-[6%] sm:px-[8%] md:px-[10%] bg-[#B58E5A] text-[14px] sm:text-[15px] lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase"
            >
              <p className="whitespace-nowrap">{buttonText}</p>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="right hidden md:flex w-full lg:w-1/2 justify-center lg:justify-end mt-[40px] lg:mt-[45px] px-[20px] lg:px-0 lg:ml-[5%] xl:ml-[10%] relative">
        <motion.div
          className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[682px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[737px] relative z-10"
          variants={imageVariants}
        >
          <Image src={heroImage} alt="Private Party" fill className="object-cover" />
        </motion.div>

        {/* Large Ellipse - Responsive positioning */}
        <motion.div
          className="absolute bottom-[40px] md:bottom-[60px] lg:bottom-[80px] right-[10%] sm:right-[15%] lg:right-[23.5%] z-20"
          variants={decorativeVariants}
        >
          <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[257px] lg:h-[257px]">
            <Image src="/images/large-ellipse.svg" alt="" fill />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
