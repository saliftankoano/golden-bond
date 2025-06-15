'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

interface AboutHeroBlockProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  image?: Media
}

export const AboutHeroBlock: React.FC<AboutHeroBlockProps> = ({
  title = 'Tailored Events for\nEvery Occasion',
  description = 'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
  buttonText = 'Plan My Event',
  buttonLink = '#',
  image,
}) => {
  const imageUrl = image?.url || '/images/sign.jpg'

  return (
    <section className="about-hero flex flex-col lg:flex-row w-full min-h-[600px] md:min-h-[800px] lg:h-[992px] bg-[#F4F1EB] pt-[20px] md:pt-[35px] lg:pt-[45px] px-4 md:px-8 lg:px-0 overflow-hidden">
      <div className="left-side lg:ml-[60px] w-full lg:w-[60%] flex flex-col justify-center lg:justify-start">
        <div className="w-full max-w-[674px] mx-auto lg:mx-0">
          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[70px] leading-[120%] garamond-font font-semibold text-center lg:text-left text-[#1B0E01]">
            {title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <div className="mt-[16px] md:mt-[20px] lg:mt-[22px]">
            <p className="tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[150%] text-center lg:text-left max-w-[500px] mx-auto lg:mx-0 text-[#1B0E01]">
              {description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href={buttonLink}
              className="w-full uppercase sm:w-auto max-w-[240px] lg:max-w-[211px] h-[50px] md:h-[55px] mt-[40px] md:mt-[60px] lg:mt-[72px] px-[8%] md:px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300"
            >
              <p className="whitespace-nowrap">{buttonText}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="right-side relative w-full lg:w-[40%] flex justify-center lg:justify-end mt-[40px] lg:mt-0">
        {/* Large Ellipse - Upper Left - Hidden on mobile for cleaner look */}
        <Image
          src="/images/large-ellipse.svg"
          alt="decorative ellipse"
          width={257}
          height={257}
          className="hidden md:block absolute top-[200px] md:top-[300px] lg:top-[380px] left-[-50px] md:left-[-80px] lg:left-[-100px] w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[257px] xl:h-[257px] z-0"
        />

        {/* Large Ellipse - Lower Right - Hidden on mobile for cleaner look */}
        <Image
          src="/images/large-ellipse.svg"
          alt="decorative ellipse"
          width={257}
          height={257}
          className="hidden md:block absolute bottom-[80px] md:bottom-[100px] lg:bottom-[130px] right-[-50px] md:right-[-80px] lg:right-[-100px] w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[257px] xl:h-[257px] z-0"
        />

        <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[682px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[737px] relative z-10 mx-4 lg:mx-0">
          <Image
            src={imageUrl}
            alt="Golden Bond sign"
            fill
            className="object-cover rounded-lg lg:rounded-none"
            sizes="(max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, 682px"
            priority
          />
        </div>
      </div>
    </section>
  )
}
