'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface CTABlockProps {
  title?: string
  heading?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  image?: Media
}

export const CTABlock: React.FC<CTABlockProps> = ({
  title = 'The Golden Bond | Event & Design',
  heading = 'Reserve Your Exquisite Jewelry Experience!',
  description = 'Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.',
  buttonText = 'Plan My Event',
  buttonLink = '#',
  image,
}) => {
  const imageUrl = image?.url || '/images/about/cta.jpg'

  return (
    <section className="cta-section bg-[#F4F1EB] w-screen min-h-[600px] md:min-h-[700px] lg:h-[736px] flex flex-col justify-center items-center relative py-[40px] md:py-[60px] lg:py-[72px] px-4 md:px-8 lg:px-0">
      {/* Small Ellipse - Bottom Right - Hidden on mobile */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={131}
        height={131}
        className="hidden md:block absolute bottom-[80px] md:bottom-[90px] lg:bottom-[100px] right-[30px] md:right-[35px] lg:right-[40px] w-[100px] h-[100px] md:w-[115px] md:h-[115px] lg:w-[131px] lg:h-[131px] z-20"
      />

      <div className="title-container w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[816px] relative z-10 text-center mb-[30px] md:mb-[50px] lg:mb-[64px]">
        <p className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[48px] leading-[120%] tenor-font text-[#1B0E01]">
          {title}
        </p>
      </div>

      <div className="cta-content w-full max-w-[1284px] flex flex-col lg:flex-row relative z-10 gap-8 lg:gap-0">
        {/* Large Ellipse - Bottom Left - Hidden on mobile */}
        <Image
          src="/images/small-ellipse.svg"
          alt="decorative ellipse"
          width={188}
          height={188}
          className="hidden md:block absolute bottom-[-60px] md:bottom-[-70px] lg:bottom-[-80px] left-[-15px] md:left-[-18px] lg:left-[-20px] w-[140px] h-[140px] md:w-[160px] md:h-[160px] lg:w-[188px] lg:h-[188px] z-0"
        />

        <div className="left-side w-full lg:w-auto lg:mr-[154px] mb-8 lg:mb-0">
          <div className="left-content w-full max-w-[435px] mx-auto lg:mx-0">
            <div className="w-full mb-6 md:mb-8 lg:mb-[62px]">
              <h1 className="garamond-font text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-extrabold leading-[120%] text-center lg:text-left text-[#1B0E01]">
                {heading}
              </h1>
            </div>
            <div className="w-full mb-6 md:mb-8 lg:mb-[32px]">
              <p className="tenor-font text-[14px] md:text-[15px] lg:text-[14px] leading-[150%] text-[#4A4A4A] text-center lg:text-left">
                {description}
              </p>
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <a
                href={buttonLink}
                className="w-full sm:w-auto min-w-[240px] lg:min-w-[211px] h-[50px] md:h-[55px] px-[8%] md:px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase"
              >
                <p className="whitespace-nowrap">{buttonText}</p>
              </a>
            </div>
          </div>
        </div>

        <div className="right-side w-full lg:w-[695px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[407px] relative z-0 mx-4 lg:mx-0">
          <Image
            src={imageUrl}
            alt="Smiling employee"
            fill
            className="object-cover z-0 rounded-lg lg:rounded-none"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 695px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
