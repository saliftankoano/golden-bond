'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Event {
  id: number
  title: string
  description: string
  image: string
}

interface PopupPastEventsProps {
  sectionTitle?: string
  sectionDescription?: string
  buttonText?: string
  buttonLink?: string
  events?: Event[]
}

const defaultEvents: Event[] = [
  {
    id: 1,
    title: 'Secret Garden Popup',
    description: 'An intimate gathering in a hidden urban garden.',
    image: '/images/services/popup-events.jpg',
  },
  {
    id: 2,
    title: 'Rooftop Surprise Event',
    description: 'A magical evening under the stars with unexpected delights.',
    image: '/images/services/popup-events.jpg',
  },
  {
    id: 3,
    title: 'Gallery After Hours',
    description: 'Exclusive access to art spaces with curated experiences.',
    image: '/images/services/popup-events.jpg',
  },
]

export const PopupPastEvents: React.FC<PopupPastEventsProps> = ({
  sectionTitle = 'Past Popup Events',
  sectionDescription = 'Explore some of our memorable popup experiences that created magic in unexpected places.',
  buttonText = 'CREATE YOUR POPUP',
  buttonLink = '#',
  events = defaultEvents,
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

  return (
    <motion.section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F1EB]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 garamond-font leading-tight mb-6"
            variants={headerVariants}
          >
            {sectionTitle}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 tenor-font leading-relaxed max-w-3xl mx-auto"
            variants={headerVariants}
          >
            {sectionDescription}
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {events.map((event) => (
            <motion.div key={event.id} className="group" variants={eventVariants}>
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 garamond-font">{event.title}</h3>
                <p className="text-gray-600 tenor-font leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-12" variants={buttonVariants}>
          <a
            href={buttonLink}
            className="inline-block bg-[#B58E5A] text-white px-8 py-4 text-lg font-light tracking-wide hover:bg-amber-700 transition-colors tenor-font"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
