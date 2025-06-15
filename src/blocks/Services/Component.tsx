'use client'

import { cn } from '@/utilities/ui'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const ServicesBlock: React.FC<ServicesBlockProps> = (props) => {
  const { heading, subheading, services } = props

  return (
    <section className="w-full min-h-[909px] lg:h-[909px] flex flex-col relative px-6 lg:px-0">
      <div className="heading-container flex justify-center items-center pt-[40px] lg:pt-[60px]">
        <div className="inner-heading w-full max-w-[674px] flex flex-col justify-center items-center text-center px-4">
          {subheading && (
            <h2 className="text-[#B58E5A] text-[14px] sm:text-[16px] leading-[120%] uppercase tenor-font">
              {subheading}
            </h2>
          )}
          {heading && (
            <h1 className="text-[#1B0E01] garamond-font font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[120%] mt-[8px] max-w-full">
              {heading}
            </h1>
          )}
        </div>
      </div>

      <div className="cards flex flex-col lg:flex-row justify-center items-center mt-[40px] lg:mt-[60px] relative z-10 gap-8 lg:gap-0 pb-12 lg:pb-0">
        {services &&
          services.length > 0 &&
          services.map((service: any, index: number) => {
            const { title, category, description, image, buttons } = service

            return (
              <div
                key={index}
                className={cn(
                  'w-full max-w-[350px] lg:w-[400px] h-[400px] lg:h-[453px] relative shadow-lg',
                  index === 1 && 'lg:mx-[60px]', // Middle card spacing
                )}
              >
                {image && typeof image === 'object' && (
                  <Media fill imgClassName="object-cover" resource={image} />
                )}
                <div className="absolute inset-0 bg-[#1B0E01]/52"></div>
                <div className="card-content absolute inset-0 p-4 lg:p-6 flex flex-col justify-end z-10">
                  <div className="card-content-inner mb-3 lg:mb-4">
                    {category && (
                      <h3 className="text-[#B58E5A] tenor-font font-semibold text-[12px] lg:text-[14px] leading-[20px] mb-2 tracking-[0.25px] uppercase">
                        {category}
                      </h3>
                    )}
                    {title && (
                      <h2 className="text-white garamond-font font-semibold text-[20px] lg:text-[24px] leading-[120%] mb-2">
                        {title}
                      </h2>
                    )}
                  </div>
                  {description && (
                    <div className="card-description mb-4 lg:mb-6">
                      <p className="text-white/90 text-[14px] lg:text-[16px] leading-[150%] tenor-font">
                        {description}
                      </p>
                    </div>
                  )}
                  {buttons && buttons.length > 0 && (
                    <div className="card-buttons flex flex-col sm:flex-row gap-3">
                      {buttons.map((button: any, buttonIndex: number) => {
                        const { label, style, link } = button

                        if (style === 'primary') {
                          return (
                            <button
                              key={buttonIndex}
                              className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-4 lg:px-6 py-2 text-[12px] lg:text-[14px] leading-[19px] uppercase tenor-font"
                            >
                              {label}
                            </button>
                          )
                        } else {
                          return (
                            <button
                              key={buttonIndex}
                              className="text-white hover:text-[#B58E5A] flex items-center justify-center sm:justify-start text-[12px] lg:text-[14px] leading-[19px] uppercase tenor-font"
                            >
                              {label}
                              <ArrowRight className="w-4 h-4 ml-[8px]" />
                            </button>
                          )
                        }
                      })}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
      </div>

      {/* Decorative ellipses positioned behind cards - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
        {/* Large ellipse on bottom left of first card */}
        <div className="absolute bottom-[100px] left-[20px] z-0">
          <Image
            src="/images/large-ellipse.svg"
            alt="decorative ellipse"
            width={257}
            height={257}
          />
        </div>
        {/* Small ellipse on upper right of last card */}
        <div className="absolute top-[55px] right-[100px] z-0">
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={160}
            height={160}
          />
        </div>
      </div>
    </section>
  )
}
