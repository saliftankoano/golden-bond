'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Event {
  title: string
  description: string
  image: string
}

interface CorporatePastEventsProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
  events?: Event[]
}

const defaultEvents: Event[] = [
  {
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/corporate/event1.jpg',
  },
  {
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/corporate/event1.jpg',
  },
  {
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/corporate/event1.jpg',
  },
  {
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/corporate/event1.jpg',
  },
  {
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/corporate/event1.jpg',
  },
]

export const CorporatePastEvents: React.FC<CorporatePastEventsProps> = ({
  title = 'See something you like?',
  subtitle = 'Let our team know - we love to see what inspires you!',
  buttonText = 'PLAN MY EVENT',
  buttonLink = '#',
  events = defaultEvents,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(events.length / 3) // Show 3 events per slide

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

  const eventVariants = {
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

  const dotsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as any

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      className="w-screen bg-[#F4F1EB] flex flex-col items-center py-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="text-center mb-[80px] px-4" variants={headerVariants}>
        <h2 className="garamond-font text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-black leading-[120%] mb-[16px]">
          {title}
        </h2>
        <p className="tenor-font text-[14px] sm:text-[16px] text-[#666666] leading-[150%]">
          {subtitle}
        </p>
      </motion.div>

      {/* Events Horizontal Scroll */}
      <div className="w-full overflow-x-auto mb-[60px]">
        <motion.div className="flex gap-[20px] px-[20px] min-w-max" variants={containerVariants}>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col w-[300px] sm:w-[320px] flex-shrink-0"
              variants={eventVariants}
            >
              {/* Event Image */}
              <div className="w-[300px] sm:w-[320px] h-[225px] sm:h-[240px] relative mb-[20px] overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>

              {/* Event Content */}
              <div className="text-left">
                <h3 className="garamond-font text-[20px] sm:text-[24px] text-black leading-[120%] mb-[8px]">
                  {event.title}
                </h3>
                <p className="tenor-font text-[13px] sm:text-[14px] text-[#666666] leading-[150%]">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <motion.div className="flex gap-[8px] mb-[60px]" variants={dotsVariants}>
        {Array.from({ length: Math.max(totalSlides, 4) }, (_, index) => (
          <div
            key={index}
            className={`h-[8px] rounded-full cursor-pointer transition-all duration-300 ${
              index === 0 ? 'w-[40px] bg-[#C8A882]' : 'w-[8px] bg-[#D4D4D4] hover:bg-[#C8A882]'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </motion.div>

      {/* Plan My Event Button */}
      <motion.a
        href={buttonLink}
        className="bg-[#C8A882] text-white px-[40px] py-[16px] text-[14px] font-medium tracking-[2px] uppercase hover:bg-[#B8986F] transition-colors duration-300"
        variants={buttonVariants}
      >
        {buttonText}
      </motion.a>
    </motion.section>
  )
}
