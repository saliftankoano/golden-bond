'use client'

import React from 'react'
import Image from 'next/image'

interface StoryTimeHeroBlockProps {
  title?: string
  subtitle?: string
  buttonText?: string
  backgroundImage?: string
}

export const StoryTimeHeroBlock: React.FC<StoryTimeHeroBlockProps> = ({
  title = 'Golden Bond Story Time',
  subtitle = 'Golden Bond is about celebrating connections that spark meaning.',
  buttonText = 'Plan My Event',
  backgroundImage = '/images/story-time/story-time-hero.jpg',
}) => {
  return (
    <section className="relative w-full h-[500px] sm:h-[580px] md:h-[650px] lg:h-[750px] xl:h-[800px]">
      <Image
        src={backgroundImage}
        alt="Story Time Hero"
        fill
        className="object-cover object-center sm:object-bottom filter brightness-50"
        sizes="100vw"
        priority
      />
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[942px] px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0 flex flex-col justify-center items-center">
        <h1 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[70px] garamond-font leading-[110%] sm:leading-[115%] lg:leading-[120%] font-bold text-white uppercase text-center">
          {title}
        </h1>
        <p className="text-white tenor-font my-[12px] sm:my-[16px] md:my-[18px] lg:my-[22px] xl:my-[24px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[130%] sm:leading-[125%] lg:leading-[120%] text-center max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
          {subtitle}
        </p>
        <div className="btn-container flex justify-center mt-2 sm:mt-1 md:mt-0">
          <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:cursor-pointer transition-colors duration-300 whitespace-nowrap px-4 sm:px-6">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}
