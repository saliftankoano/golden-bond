'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Define types for FAQ items
interface FAQItem {
  question: string
  answer: string
}

interface FAQBlockProps {
  sectionLabel?: string
  sectionTitle?: string
  faqItems?: FAQItem[]
}

const defaultFAQItems: FAQItem[] = [
  {
    question: 'How does pricing work for Large Private Events and Corporate bookings?',
    answer:
      'Events with 13+ guests require custom quotes because every large event is unique. Pricing factors include guest count, event duration (typically 3-6 hours), location, specific jewelry experiences requested, staffing needs, and any additional services like branding or catering coordination. Corporate events can be structured as flat-rate packages, revenue-share models, or direct-to-consumer sales depending on your needs and budget.',
  },
  {
    question: "What if some guests don't want welded jewelry? Are there other options?",
    answer:
      "While our signature experience is custom welded jewelry, we understand not every guest may want permanent jewelry. We can provide alternative options like charm bracelets, adjustable pieces, or temporary jewelry options that don't require welding. We'll work with you during planning to ensure every guest has an enjoyable experience that fits their comfort level.",
  },
  {
    question: 'What happens if I need to cancel or reschedule my event?',
    answer:
      "The $200 deposit required for all Sparkle Parties (In-Store and In-Home) is non-refundable but will be applied to your total event cost. If you need to reschedule, we'll work with you to find a new date based on availability. For Large Private Events and Corporate bookings, cancellation policies will be outlined in your custom contract based on the event scope and timeline.",
  },
  {
    question: 'Can I customize the jewelry experience for my guests?',
    answer:
      "Absolutely! Our custom welded jewelry can be personalized for each guest, and we offer personal styling consultation during the event. For Corporate and Large Private Events, we can incorporate your branding, create custom gift packaging, and even develop themed jewelry experiences that align with your event's purpose or company culture.",
  },
  {
    question: 'How long does the welding process take per person?',
    answer:
      'Each guest typically spends 10-15 minutes at our Bracelet Bar for the complete experience, including chain selection, sizing, styling consultation, and welding. With our efficient process and experienced staff, we can accommodate up to 12 guests comfortably within the 2-3 hour event timeframe. For larger events, we bring additional staff to ensure everyone gets personalized attention without long wait times.',
  },
  {
    question: 'Do you travel outside your local area for events?',
    answer:
      "Yes! Our In-Home Sparkle Parties and mobile Bracelet Bar can travel to your preferred location. Travel fees may apply for locations outside our standard service area. For Large Private Events and Corporate bookings, we're happy to discuss destination events and will provide a custom quote that includes any travel and accommodation costs.",
  },
  {
    question: 'How far in advance should I book my event?',
    answer:
      'We recommend booking your Sparkle Party at least 2-4 weeks in advance to ensure availability, especially for weekend dates and during peak seasons (holidays, wedding season). For Large Private Events (13+ guests) and Corporate Events, we suggest booking 4-6 weeks ahead due to the custom planning required. Pop-up events can sometimes be arranged with shorter notice depending on our schedule.',
  },
]

export const FAQBlock: React.FC<FAQBlockProps> = ({
  sectionLabel = 'FAQ',
  sectionTitle = 'Tailored events for you.',
  faqItems = defaultFAQItems,
}) => {
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({})

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

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

  const faqItemVariants = {
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
        delay: 0.8,
      },
    },
  } as any

  return (
    <motion.section
      className="w-full bg-[#F4F1EB] min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="header flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-[15vh] relative px-4"
        variants={headerVariants}
      >
        <div className="header mb-2">
          <h2 className="text-center text-[#B58E5A] text-sm md:text-base lg:text-[16px] font-bold tenor-font uppercase tracking-wider">
            {sectionLabel}
          </h2>
        </div>
        <div className="header-desc">
          <h1 className="text-[#1B0E01] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold garamond-font text-center">
            {sectionTitle}
          </h1>
        </div>

        {/* Decorative ellipse - top right */}
        <motion.div variants={decorativeVariants}>
          <Image
            src="/images/small-ellipse.svg"
            alt="small ellipse"
            width={160}
            height={160}
            className="absolute top-1/2 md:top-3/4 -translate-y-1/2 right-4 md:right-8 lg:right-16 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] z-10"
          />
        </motion.div>
      </motion.div>

      {/* FAQ Content */}
      <div className="faq-container max-w-6xl lg:max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[190px] pb-12 md:pb-16 lg:pb-20 pt-8 md:pt-12 lg:pt-[5vh] relative">
        <div className="max-w-4xl lg:max-w-[800px] mx-auto">
          <motion.div className="w-full space-y-2" variants={containerVariants}>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200"
                variants={faqItemVariants}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left text-sm sm:text-base lg:text-lg font-medium text-[#1B0E01] hover:text-[#B58E5A] transition-colors py-4 md:py-6 flex justify-between items-center"
                >
                  <span>{item.question}</span>
                  <span className="ml-4 flex-shrink-0">{openItems[index] ? '−' : '+'}</span>
                </button>
                {openItems[index] && (
                  <motion.div
                    className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative ellipse - bottom left */}
        <motion.div variants={decorativeVariants}>
          <Image
            src="/images/large-ellipse.svg"
            alt="large ellipse"
            width={257}
            height={257}
            className="absolute bottom-[20px] sm:bottom-[40px] md:bottom-[60px] -left-[30px] sm:-left-[50px] md:-left-[80px] lg:-left-[120px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[257px] xl:h-[257px] z-0"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
