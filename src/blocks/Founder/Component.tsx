'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface FounderBlockProps {
  sectionLabel?: string
  sectionTitle?: string
  sectionDescription?: string
  founderLabel?: string
  founderName?: string
  founderStory?: any
  founderImage?: Media
}

export const FounderBlock: React.FC<FounderBlockProps> = ({
  sectionLabel = 'Golden Bond Team',
  sectionTitle = 'Meet Our Team',
  sectionDescription = 'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
  founderLabel = 'MEET The Ceo and her four-legged colleague',
  founderName = 'Lexie & Cash',
  founderImage,
}) => {
  const imageUrl = founderImage?.url || '/images/lexie-cash.jpg'

  return (
    <section className="founder-section w-screen min-h-[700px] md:min-h-[850px] lg:min-h-[992px] bg-[#F4F1EB] flex flex-col justify-center items-center pb-[40px] md:pb-[60px] lg:pb-[78px] px-4 md:px-8 lg:px-0">
      <div className="intro w-full max-w-[674px] pb-[40px] md:pb-[50px] lg:pb-[62px] pt-[20px] flex flex-col justify-center items-center">
        <div className="w-auto text-center">
          <h2 className="tenor-font text-[14px] md:text-[15px] lg:text-[16px] leading-[120%] text-[#B58E5A]">
            {sectionLabel}
          </h2>
        </div>
        <div className="w-auto text-center pt-[6px] lg:pt-[8px]">
          <h1 className="garamond-font text-[#1B0E01] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[120%] font-semibold">
            {sectionTitle}
          </h1>
        </div>
        <div className="w-full max-w-[489px] text-center pt-[6px] lg:pt-[8px]">
          <p className="tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[150%] text-[#4A4A4A]">
            {sectionDescription}
          </p>
        </div>
      </div>

      <div className="founder-container w-full max-w-[1320px] flex flex-col lg:flex-row relative pt-[40px] md:pt-[50px] lg:pt-[62px] gap-8 lg:gap-0">
        <div className="left-side w-full lg:w-[489px] px-4 lg:px-0">
          <div className="w-full text-center lg:text-left mb-6 lg:mb-0">
            <p className="uppercase tenor-font leading-[20px] text-[#B58E5A] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
              {founderLabel}
            </p>
          </div>
          <div className="w-full pt-[20px] md:pt-[28px] lg:pt-[32px]">
            <div className="w-full text-center lg:text-left mb-4 lg:mb-6">
              <h1 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-semibold garamond-font text-[#1B0E01]">
                {founderName}
              </h1>
            </div>
            <div className="w-full pt-[16px] md:pt-[20px] lg:pt-[26px]">
              <p className="tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[150%] text-[#4A4A4A] text-center lg:text-left max-w-[500px] mx-auto lg:mx-0">
                Golden Bond is about celebrating connections that spark meaning.
                <br />
                We&apos;re more than jewelry - we&apos;re an extension of your bond, your story,
                your forever evolving story. Whether it&apos;s a statement, a symbol, a milestone,
                or a moment worth holding onto - our Bracelet Bar sparks the story.
                <br />
                <br />
                Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and
                sterling silver, as well as clasped and ready to wear jewelry.
              </p>
            </div>
          </div>
        </div>

        <div className="spacer hidden lg:block w-[152px] h-full"></div>

        <div className="right-side w-full lg:w-[682px] h-[350px] sm:h-[450px] md:h-[550px] lg:h-[661px] relative mx-4 lg:mx-0">
          {/* Large Ellipse - Upper Right - Hidden on mobile for cleaner look */}
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={160}
            height={160}
            className="hidden md:block absolute top-[-80px] md:top-[-110px] lg:top-[-140px] right-[20px] md:right-[25px] lg:right-[30px] w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] z-0"
          />

          {/* Small Ellipse - Lower Left - Hidden on mobile for cleaner look */}
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={160}
            height={160}
            className="hidden md:block absolute bottom-[5px] left-[-80px] md:left-[-100px] lg:left-[-120px] w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] z-0"
          />

          <Image
            src={imageUrl}
            alt="Lexie and Cash"
            fill
            className="object-cover z-10 rounded-lg lg:rounded-none"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 682px"
          />
        </div>
      </div>
    </section>
  )
}
