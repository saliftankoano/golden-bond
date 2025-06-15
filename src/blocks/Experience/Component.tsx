'use client'

import { cn } from '@/utilities/ui'
import React from 'react'
import Image from 'next/image'

import type { ExperienceBlock as ExperienceBlockProps } from '@/payload-types'

export const ExperienceBlock: React.FC<ExperienceBlockProps> = (props) => {
  // We'll use the original golden design with static content for now
  // The CMS fields can be used later if needed for customization

  return (
    <section className="w-full min-h-screen bg-[#F4F1EB] flex text-black px-4 sm:px-6 md:px-8 lg:px-[66px] pt-8 lg:pt-0 pb-12 lg:pb-16">
      <div className="internal-container w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:mt-[60px] gap-8 lg:gap-0">
        {/* Text Content */}
        <div className="w-full lg:w-[40%] lg:h-full">
          <div className="text-container mb-8 lg:mb-[42px]">
            <h2 className="tenor-font text-sm sm:text-base lg:text-[17px] leading-[20px] mb-3 lg:mb-[12px] uppercase">
              What we can do for you
            </h2>
            <h1 className="max-w-full lg:max-w-[489px] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] garamond-font leading-[110%] mb-6 lg:mb-[26px]">
              The Golden Bond Experience
            </h1>
            <p className="text-sm sm:text-base lg:text-[16px] tenor-font leading-relaxed">
              Golden Bond is about celebrating connections that spark meaning. We&apos;re more than
              jewelry - we&apos;re an extension of your bond, your story, your forever evolving
              story.
              <br />
              <br />
              Whether it&apos;s a statement, a symbol, a milestone, or a moment worth holding onto -
              our Bracelet Bar sparks the story.
              <br />
              <br /> Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold
              and sterling silver, as well as clasped and ready to wear jewelry.
            </p>
          </div>
          <button className="w-full sm:w-auto max-w-[211px] h-[55px] py-[2.5%] px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center uppercase font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300">
            <p>Book Now</p>
          </button>
        </div>

        {/* Spacer - only on large screens */}
        <div className="hidden lg:block lg:w-[259px] lg:h-full"></div>

        {/* Images Section */}
        <div className="w-full lg:w-[50%] lg:h-full flex flex-col sm:flex-row lg:flex-row gap-4 lg:gap-0">
          {/* Left Column */}
          <div className="w-full sm:w-1/2 lg:w-1/2 flex flex-col gap-4 lg:gap-0">
            <div className="flex flex-col items-center lg:items-end lg:justify-end lg:pt-[65px]">
              <div className="flex flex-col lg:justify-end">
                <div className="w-full max-w-[270px] h-[200px] sm:h-[220px] lg:h-[246px] relative mx-auto lg:mx-0">
                  <Image
                    src="/images/experience/experience1.png"
                    alt="Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                  />
                </div>
                <h2 className="title garamond-font text-lg sm:text-xl lg:text-[24px] leading-tight lg:leading-[25px] mt-3 lg:mt-[15px] w-full lg:w-[214px] text-center lg:text-right">
                  Gems & Glamour: A Jewelry Showcase
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end lg:justify-end lg:h-[50%]">
              <div className="flex flex-col lg:justify-end">
                <div className="w-full max-w-[270px] h-[200px] sm:h-[220px] lg:h-[246px] relative mx-auto lg:mx-0">
                  <Image
                    src="/images/experience/experience3.png"
                    alt="Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                  />
                </div>
                <h2 className="title garamond-font text-lg sm:text-xl lg:text-[24px] leading-tight lg:leading-[25px] mt-3 lg:mt-[15px] w-full lg:w-[214px] text-center lg:text-right">
                  Magic & Mystery: A Jewelry Showcase
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full sm:w-1/2 lg:w-1/2 relative">
            <div className="flex flex-col items-center lg:items-end lg:justify-end z-10 lg:pl-[15px]">
              <div className="flex flex-col lg:justify-end">
                <div className="w-full max-w-[272px] h-[300px] sm:h-[350px] lg:h-[401px] relative mx-auto lg:mx-0">
                  <Image
                    src="/images/experience/experience2.png"
                    alt="Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 272px"
                  />
                </div>
                <h2 className="title garamond-font text-lg sm:text-xl lg:text-[24px] leading-tight lg:leading-[25px] mt-3 lg:mt-[15px] w-full lg:w-[214px] text-center lg:text-right">
                  Sparkle & Shine Jewelry Showcase
                </h2>
              </div>
            </div>

            {/* Decorative ellipse - only show on large screens */}
            <div className="hidden lg:block absolute bottom-0 right-0 -translate-y-15 z-5">
              <Image src="/images/large-ellipse.svg" alt="large ellipse" width={257} height={257} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
