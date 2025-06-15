'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { ExpertCard } from './ExpertCard'

interface Expert {
  name: string
  title: string
  description: string
  image: Media
}

interface ExpertsBlockProps {
  sectionLabel?: string
  sectionTitle?: string
  sectionDescription?: string
  experts?: Expert[]
}

export const ExpertsBlock: React.FC<ExpertsBlockProps> = ({
  sectionLabel = 'Golden Bond Team',
  sectionTitle = 'Our Experts.',
  sectionDescription = 'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
  experts = [],
}) => {
  // Static experts data with original images as fallback
  const defaultExperts = [
    {
      name: 'Beth',
      title: 'Sales & Marketing',
      description:
        'Beth serves as advisor, operations, financial and risk management advisor — not daily operator.',
      image: '/images/about/beth.webp',
    },
    {
      name: 'Mia',
      title: 'Operations & Production',
      description:
        'Mia serves as advisor, operations, financial and risk management advisor — not daily operator.',
      image: '/images/about/mia.webp',
    },
    {
      name: 'Sky',
      title: 'Operations & Production',
      description:
        'Sky serves as advisor, operations, financial and risk management advisor — not daily operator.',
      image: '/images/about/sky.webp',
    },
    {
      name: 'Taara',
      title: 'Operations & Production',
      description:
        'Taara serves as advisor, operations, financial and risk management advisor — not daily operator.',
      image: '/images/about/taara.webp',
    },
    {
      name: 'Sophia',
      title: 'Operations & Production',
      description:
        'Sophia serves as advisor, operations, financial and risk management advisor — not daily operator.',
      image: '/images/about/sophia.webp',
    },
  ]

  const expertsData = experts.length > 0 ? experts : defaultExperts

  return (
    <section className="experts-section w-screen h-[750px] md:h-[850px] lg:h-[950px] bg-[#1B0E01] flex flex-col justify-center items-center relative py-[60px] md:py-[80px] lg:py-[100px] px-6 sm:px-8 md:px-12 lg:px-0 pb-[80px] md:pb-[100px] lg:pb-[120px] overflow-hidden">
      {/* Small Ellipse - Upper Left */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={160}
        height={160}
        className="hidden md:block absolute top-[120px] md:top-[150px] lg:top-[180px] left-[-10px] w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] z-0"
      />

      {/* Small Ellipse - Upper Right */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={160}
        height={160}
        className="hidden md:block absolute top-[80px] md:top-[100px] lg:top-[120px] right-[60px] md:right-[70px] lg:right-[80px] w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] z-0"
      />

      {/* Small Ellipse - Lower Right */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={160}
        height={160}
        className="hidden md:block absolute bottom-[80px] md:bottom-[100px] lg:bottom-[120px] right-[-20px] w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] z-0"
      />

      <div className="intro w-full max-w-[320px] sm:max-w-[580px] md:max-w-[674px] flex flex-col justify-center items-center relative z-10 mb-[30px] md:mb-[40px] lg:mb-[50px] mx-auto mt-[20px] md:mt-[30px] lg:mt-[40px]">
        <div className="w-full text-center mb-2">
          <h2 className="tenor-font text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] text-[#B58E5A]">
            {sectionLabel}
          </h2>
        </div>
        <div className="w-full text-center pt-[6px] lg:pt-[8px]">
          <h1 className="garamond-font text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[48px] leading-[120%] font-semibold break-words">
            {sectionTitle}
          </h1>
        </div>
        <div className="w-full text-center pt-[6px] lg:pt-[8px]">
          <p className="tenor-font text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[150%] text-white/80">
            {sectionDescription}
          </p>
        </div>
      </div>

      {/* Experts Slider Container */}
      <div className="experts-slider-container w-full relative z-10">
        <div className="experts-slider overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 md:gap-8 pb-4 px-4 md:px-8 lg:px-12 min-w-max">
            {expertsData.map((expert, index) => (
              <div
                key={`${expert.name}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] snap-start"
              >
                <ExpertCard
                  image={expert.image}
                  name={expert.name}
                  title={expert.title}
                  description={expert.description}
                  alt={`${expert.name} - ${expert.title} Expert`}
                />
              </div>
            ))}
            {/* Add some extra space at the end */}
            <div className="flex-shrink-0 w-4"></div>
          </div>
        </div>

        {/* Scroll indicator with dots */}
        <div className="flex justify-center items-center mt-6 mb-4 gap-4">
          <div className="flex gap-2">
            {expertsData.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-white/30"></div>
            ))}
          </div>
          <p className="tenor-font text-[12px] md:text-[14px] text-white/60 ml-4">
            Swipe to see more →
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .experts-slider {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-padding-left: 1rem;
          scroll-padding-right: 1rem;
        }

        /* Ensure proper scrolling on different devices */
        @media (hover: hover) {
          .experts-slider:hover {
            cursor: grab;
          }
          .experts-slider:active {
            cursor: grabbing;
          }
        }

        /* Add fade effect at edges to indicate more content */
        .experts-slider-container::before,
        .experts-slider-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 60px;
          width: 20px;
          z-index: 10;
          pointer-events: none;
        }

        .experts-slider-container::before {
          left: 0;
          background: linear-gradient(to right, #1b0e01, transparent);
        }

        .experts-slider-container::after {
          right: 0;
          background: linear-gradient(to left, #1b0e01, transparent);
        }

        /* Hide fade on mobile for cleaner look */
        @media (max-width: 768px) {
          .experts-slider-container::before,
          .experts-slider-container::after {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
