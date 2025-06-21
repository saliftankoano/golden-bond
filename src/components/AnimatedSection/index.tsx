'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const getVariantsByDirection = (dir: string) => {
    const baseVariants = {
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      up: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      },
      down: {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 },
      },
      left: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
      },
      right: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
      },
    }

    return baseVariants[dir as keyof typeof baseVariants] || baseVariants.up
  }

  const variants = getVariantsByDirection(direction)

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  )
}
