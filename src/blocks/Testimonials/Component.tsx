'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  title: string
  review: string
  image: string
}

interface TestimonialsBlockProps {
  sectionLabel?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Wedding Celebration',
    review:
      'The most magical evening of our lives. Every detail was perfect, from the golden decorations to the exceptional service. Truly unforgettable.',
    image: '/images/testimonials/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Corporate Gala',
    review:
      'Professional excellence at its finest. The team delivered an extraordinary event that exceeded all our expectations and impressed every guest.',
    image: '/images/testimonials/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Anniversary Party',
    review:
      'Absolutely stunning celebration that captured our vision perfectly. The attention to detail and elegant atmosphere made it truly special.',
    image: '/images/testimonials/testimonial3.jpg',
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'Product Launch',
    review:
      'Exceptional event planning and execution. The venue was transformed into something magical that perfectly represented our brand.',
    image: '/images/testimonials/testimonial4.jpg',
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    title: 'Birthday Celebration',
    review:
      'Every moment was pure joy. The team created an atmosphere of elegance and warmth that made the celebration absolutely perfect.',
    image: '/images/testimonials/testimonial5.jpg',
  },
  {
    id: 6,
    name: 'James Wilson',
    title: 'Charity Fundraiser',
    review:
      'Outstanding professionalism and creativity. They transformed our vision into reality and created an event that truly made a difference.',
    image: '/images/testimonials/testimonial6.jpg',
  },
]

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ({
  sectionLabel = 'Testimonials',
  testimonials = defaultTestimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with second testimonial as main
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Get current arrangement of testimonials
  const getCurrentArrangement = () => {
    const total = testimonials.length
    const arrangement = []

    // Left small image (previous testimonial)
    const leftIndex = (currentIndex - 1 + total) % total
    arrangement.push({
      position: 'left-small',
      testimonial: testimonials[leftIndex],
    })

    // Main large image (current testimonial)
    arrangement.push({
      position: 'main',
      testimonial: testimonials[currentIndex],
    })

    // Right small images (next 4 testimonials)
    for (let i = 1; i <= 4; i++) {
      const rightIndex = (currentIndex + i) % total
      arrangement.push({
        position: `right-${i}`,
        testimonial: testimonials[rightIndex],
      })
    }

    return arrangement
  }

  const arrangement = getCurrentArrangement()
  const mainTestimonial = arrangement.find((item) => item.position === 'main')?.testimonial

  const handleImageClick = (clickedPosition: string) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    if (clickedPosition === 'left-small') {
      // Move all images to the right (go to previous testimonial)
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else if (clickedPosition.startsWith('right-')) {
      // Move images to the left based on which right image was clicked
      const rightPosition = parseInt(clickedPosition.split('-')[1] || '1')
      setCurrentIndex((prev) => (prev + rightPosition) % testimonials.length)
    }

    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <section className="w-full bg-[#1B0E01] flex flex-col lg:flex-row text-white py-8 md:py-12 lg:py-[5%] px-4 md:px-6 lg:px-[5%]">
      {/* Images Section */}
      <div className="w-full lg:w-[40%] flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-[30px] mb-8 lg:mb-0">
        {/* Left Small Image - Hidden on mobile, visible on tablet+ */}
        <div
          className="hidden sm:block w-[120px] sm:w-[130px] lg:w-[150px] h-[180px] sm:h-[190px] lg:h-[220px] relative cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={() => handleImageClick('left-small')}
        >
          <Image
            src={
              arrangement.find((item) => item.position === 'left-small')?.testimonial?.image || ''
            }
            alt="Previous testimonial"
            fill
            className={`object-cover transition-all duration-500 ${
              isTransitioning ? 'opacity-80' : 'opacity-100'
            }`}
            sizes="(max-width: 640px) 120px, (max-width: 1024px) 130px, 150px"
          />
        </div>

        {/* Main Large Image */}
        <div className="w-[280px] sm:w-[320px] lg:w-[380px] h-[400px] sm:h-[460px] lg:h-[540px] relative">
          <Image
            src={mainTestimonial?.image || ''}
            alt={mainTestimonial?.name || ''}
            fill
            className={`object-cover transition-all duration-500 ${
              isTransitioning ? 'opacity-80' : 'opacity-100'
            }`}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[60%] lg:h-[540px] flex flex-col">
        {/* Text Content */}
        <div className="w-full flex-1 lg:h-[55%] lg:pl-[40px]">
          <div className="heading-container mb-6 lg:mb-0">
            <h2 className="tenor-font text-base lg:text-[20px] font-semibold text-[#B58E5A] leading-tight mb-3 lg:mb-[12px] uppercase">
              {sectionLabel}
            </h2>
            <h1
              className={`font-extrabold text-2xl sm:text-3xl lg:text-[32px] garamond-font mb-4 lg:mb-[2.5%] uppercase transition-all duration-500 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {mainTestimonial?.title || ''}
            </h1>
          </div>
          <div className="max-w-full lg:max-w-[510px] mb-6 lg:mb-[5%]">
            <p
              className={`text-sm sm:text-base lg:text-[16px] tenor-font leading-relaxed transition-all duration-500 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              &ldquo;{mainTestimonial?.review || ''}&rdquo;
            </p>
            <p
              className={`text-xs sm:text-sm lg:text-[14px] tenor-font text-[#B58E5A] mt-2 transition-all duration-500 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              - {mainTestimonial?.name || ''}
            </p>
          </div>
          <button className="w-full sm:w-auto max-w-[211px] h-[55px] py-[2.5%] px-[10%] bg-transparent border border-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-[#B58E5A] flex items-center justify-center uppercase hover:cursor-pointer hover:bg-[#B58E5A] hover:text-white transition-all duration-300">
            <p>Explore</p>
          </button>
        </div>

        {/* Bottom Images Gallery */}
        <div className="w-full lg:h-[45%] flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 lg:gap-[30px] lg:pl-[40px] relative items-end mt-8 lg:mt-0 justify-center lg:justify-start">
          {arrangement
            .filter((item) => item.position.startsWith('right-'))
            .map((item, index) =>
              item.testimonial ? (
                <div
                  key={item.testimonial.id}
                  className={`w-[120px] sm:w-[130px] lg:w-[150px] h-[180px] sm:h-[190px] lg:h-[220px] relative cursor-pointer transition-transform duration-500 hover:scale-105 ${
                    index >= 2 ? 'hidden sm:block' : ''
                  } ${index >= 3 ? 'hidden lg:block' : ''}`}
                  onClick={() => handleImageClick(item.position)}
                >
                  <Image
                    src={item.testimonial.image}
                    alt={item.testimonial.name}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      isTransitioning ? 'opacity-80' : 'opacity-100'
                    } ${index === 3 ? 'z-20' : 'z-10'}`}
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 130px, 150px"
                  />
                </div>
              ) : null,
            )}

          {/* Decorative ellipse - only show on large screens */}
          <Image
            src="/images/large-ellipse.svg"
            alt="large ellipse"
            width={257}
            height={257}
            className="hidden lg:block absolute top-[-50px] right-[2px] transform -translate-y-1/2 z-0"
          />
        </div>
      </div>
    </section>
  )
}
