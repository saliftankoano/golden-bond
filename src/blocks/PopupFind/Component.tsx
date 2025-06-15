'use client'

import React from 'react'
import Image from 'next/image'

interface PopupFindProps {
  title?: string
  description1?: string
  description2?: string
  buttonText?: string
  buttonLink?: string
  image?: string
}

export const PopupFind: React.FC<PopupFindProps> = ({
  title = 'Find Your Perfect Popup Experience',
  description1 = 'Our popup events bring unique experiences to unexpected locations. From intimate gatherings to surprise celebrations, we create memorable moments that appear when you least expect them.',
  description2 = 'Each popup event is carefully curated to provide an exclusive experience that combines creativity, luxury, and the element of surprise.',
  buttonText = 'PLAN YOUR POPUP',
  buttonLink = '#',
  image = '/images/services/popup-events.jpg',
}) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 garamond-font leading-tight">
              {title.split('Popup').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && 'Popup'}
                  {index === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-lg text-gray-600 tenor-font leading-relaxed">{description1}</p>
            <p className="text-lg text-gray-600 tenor-font leading-relaxed">{description2}</p>
            <a
              href={buttonLink}
              className="inline-block bg-[#B58E5A] text-white px-8 py-4 text-lg font-light tracking-wide hover:bg-amber-700 transition-colors tenor-font"
            >
              {buttonText}
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image src={image} alt="Popup Events Setup" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
