'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface EventCard {
  image: string
  alt: string
  date: string
  name: string
  description: string
}

interface StoryTimeEventsBlockProps {
  heading?: {
    subtitle?: string
    title?: string
  }
  eventCards?: EventCard[]
  viewAllButtonText?: string
}

const defaultEventCards: EventCard[] = [
  {
    image: '/images/services/private-events.jpg',
    alt: 'Private Events',
    date: 'March 15, 2024',
    name: 'Intimate Celebrations',
    description: 'Perfect for bachelorette parties, birthdays, and special gatherings.',
  },
  {
    image: '/images/story-time/jewels.jpg',
    alt: 'Business Events',
    date: 'April 8, 2024',
    name: 'Professional Gatherings',
    description: 'Ideal for corporate meetings, team building, and networking events.',
  },
  {
    image: '/images/services/popup-events.jpg',
    alt: 'Popup Events',
    date: 'May 22, 2024',
    name: 'Pop-Up Experiences',
    description: 'Unique temporary experiences and exclusive showcases.',
  },
  {
    image: '/images/services/private-events.jpg',
    alt: 'Anniversary Events',
    date: 'June 10, 2024',
    name: 'Anniversary Celebrations',
    description: 'Memorable events for milestone anniversaries and special occasions.',
  },
  {
    image: '/images/story-time/jewels.jpg',
    alt: 'Wedding Events',
    date: 'July 18, 2024',
    name: 'Wedding Experiences',
    description: 'Beautiful jewelry experiences for engagements and wedding celebrations.',
  },
  {
    image: '/images/services/popup-events.jpg',
    alt: 'Holiday Events',
    date: 'August 5, 2024',
    name: 'Holiday Gatherings',
    description: 'Festive events perfect for holiday parties and seasonal celebrations.',
  },
]

export const StoryTimeEventsBlock: React.FC<StoryTimeEventsBlockProps> = ({
  heading = {
    subtitle: 'Explore Our Story Time',
    title: 'Tailored Events for Every Occasion',
  },
  eventCards = defaultEventCards,
  viewAllButtonText = 'VIEW ALL',
}) => {
  return (
    <section className="w-full min-h-screen flex flex-col relative px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-12 md:py-16 lg:py-20 bg-[#F4F1EB]">
      <div className="heading-container flex justify-center items-center">
        <div className="inner-heading w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[674px] flex flex-col justify-center items-center text-center px-2 sm:px-4">
          <h2 className="text-[#B58E5A] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] uppercase tenor-font">
            {heading.subtitle}
          </h2>
          <h1 className="text-[#1B0E01] garamond-font font-semibold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[115%] sm:leading-[120%] mt-[6px] sm:mt-[8px] max-w-full">
            {heading.title}
          </h1>
        </div>
      </div>

      <div className="cards-container mt-[32px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px] relative z-10">
        <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[24px] sm:gap-y-[28px] md:gap-y-[32px] gap-x-[32px] sm:gap-x-[40px] md:gap-x-[50px] lg:gap-x-[60px] max-w-[350px] sm:max-w-[400px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1320px] mx-auto justify-items-center">
          {eventCards.map((card, index) => (
            <Link key={index} href="/story-time/article" className="block">
              <div className="event-card w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px] lg:w-[380px] xl:w-[400px] h-[350px] sm:h-[380px] md:h-[400px] lg:h-[430px] xl:h-[453px] relative shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover rounded-sm"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 350px, (max-width: 1024px) 380px, 400px"
                />
                <div className="absolute inset-0 bg-[#1B0E01]/52 rounded-sm" />
                <div className="card-content absolute inset-0 p-3 sm:p-4 lg:p-5 xl:p-6 flex flex-col justify-end z-10">
                  <div className="card-content-inner mb-2 sm:mb-3 lg:mb-4">
                    <h3 className="text-[#B58E5A] tenor-font font-semibold text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[14px] leading-[18px] sm:leading-[20px] mb-1 sm:mb-2 tracking-[0.25px] uppercase">
                      {card.date}
                    </h3>
                    <h2 className="text-white garamond-font font-semibold text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[115%] sm:leading-[120%] mb-1 sm:mb-2">
                      {card.name}
                    </h2>
                  </div>
                  <div className="card-description mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
                    <p className="text-white/90 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] sm:leading-[145%] lg:leading-[150%] tenor-font">
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
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="view-all-container flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
        <Link href="/story-time/article">
          <button className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] leading-[18px] sm:leading-[19px] uppercase tenor-font transition-colors duration-300 rounded-sm hover:shadow-md">
            {viewAllButtonText}
          </button>
        </Link>
      </div>

      {/* Decorative ellipses positioned behind cards - progressive visibility */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Large ellipse on bottom left - hidden on mobile and small screens */}
        <div className="hidden lg:block absolute bottom-[400px] xl:bottom-[550px] left-[15px] xl:left-[20px] z-0 opacity-60">
          <Image
            src="/images/large-ellipse.svg"
            alt="decorative ellipse"
            width={200}
            height={200}
            className="lg:w-[220px] lg:h-[220px] xl:w-[257px] xl:h-[257px]"
          />
        </div>
        {/* Small ellipse on upper right - hidden on mobile */}
        <div className="hidden md:block absolute top-[40px] sm:top-[50px] lg:top-[60px] right-[20px] sm:right-[40px] md:right-[60px] lg:right-[80px] xl:right-[90px] z-0 opacity-70">
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={120}
            height={120}
            className="md:w-[130px] md:h-[130px] lg:w-[145px] lg:h-[145px] xl:w-[160px] xl:h-[160px]"
          />
        </div>
        {/* Additional small ellipse for larger screens */}
        <div className="hidden xl:block absolute top-[300px] left-[60px] z-0 opacity-50">
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  )
}
