'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Event {
  title: string
  description: string
  image: string
}

interface PrivatePartyPastEventsProps {
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

export const PrivatePartyPastEvents: React.FC<PrivatePartyPastEventsProps> = ({
  title = 'See something you like?',
  subtitle = 'Let our team know - we love to see what inspires you!',
  buttonText = 'PLAN MY EVENT',
  buttonLink = '#',
  events = defaultEvents,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(events.length / 3) // Show 3 events per slide

  return (
    <section className="w-screen bg-[#F4F1EB] flex flex-col items-center py-[100px]">
      {/* Header */}
      <div className="text-center mb-[80px]">
        <h2 className="garamond-font text-[48px] text-black leading-[120%] mb-[16px]">{title}</h2>
        <p className="tenor-font text-[16px] text-[#666666] leading-[150%]">{subtitle}</p>
      </div>

      {/* Events Horizontal Scroll */}
      <div className="w-full overflow-x-auto mb-[60px]">
        <div className="flex gap-[20px] px-[20px] min-w-max">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col w-[320px] flex-shrink-0">
              {/* Event Image */}
              <div className="w-[320px] h-[240px] relative mb-[20px] overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>

              {/* Event Content */}
              <div className="text-left">
                <h3 className="garamond-font text-[24px] text-black leading-[120%] mb-[8px]">
                  {event.title}
                </h3>
                <p className="tenor-font text-[14px] text-[#666666] leading-[150%]">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-[8px] mb-[60px]">
        {Array.from({ length: Math.max(totalSlides, 4) }, (_, index) => (
          <div
            key={index}
            className={`h-[8px] rounded-full cursor-pointer transition-all duration-300 ${
              index === 0 ? 'w-[40px] bg-[#C8A882]' : 'w-[8px] bg-[#D4D4D4] hover:bg-[#C8A882]'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Plan My Event Button */}
      <a
        href={buttonLink}
        className="bg-[#C8A882] text-white px-[40px] py-[16px] text-[14px] font-medium tracking-[2px] uppercase hover:bg-[#B8986F] transition-colors duration-300"
      >
        {buttonText}
      </a>
    </section>
  )
}
