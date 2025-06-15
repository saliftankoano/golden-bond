'use client'

import React from 'react'
import Image from 'next/image'

interface PrivatePartyHeroProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  heroImage?: string
}

export const PrivatePartyHero: React.FC<PrivatePartyHeroProps> = ({
  title = 'Book a Private Jewelry Party',
  description = 'Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.',
  buttonText = 'Plan My Event',
  buttonLink = '#',
  heroImage = '/images/private-party/hero.jpg',
}) => {
  return (
    <section className="private-party-hero flex flex-col lg:flex-row bg-[#F4F1EB] relative pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-x-hidden">
      <div className="left w-full lg:w-1/2 px-[20px] sm:px-[40px] md:px-[50px] lg:ml-[60px] lg:px-0 mt-[30px] md:mt-[40px] lg:mt-[45px]">
        <div className="w-full max-w-[622px] flex flex-col mx-auto lg:mx-0">
          <h1 className="w-full text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[54px] text-black garamond-font leading-[120%] mb-[16px] md:mb-[21px]">
            Book a Private <br /> Jewelry Party
          </h1>
          <p className="w-full text-[15px] md:text-[16px] lg:text-[17px] text-[#4A4A4A] leading-[150%] tenor-font mb-[30px] md:mb-[40px] lg:mb-[72px]">
            {description}
          </p>
          <div className="w-full flex justify-center lg:justify-start z-10">
            <a
              href={buttonLink}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] h-[48px] md:h-[52px] lg:h-[55px] px-[6%] sm:px-[8%] md:px-[10%] bg-[#B58E5A] text-[14px] sm:text-[15px] lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase"
            >
              <p className="whitespace-nowrap">{buttonText}</p>
            </a>
          </div>
        </div>
      </div>

      <div className="right hidden md:flex w-full lg:w-1/2 justify-center lg:justify-end mt-[40px] lg:mt-[45px] px-[20px] lg:px-0 lg:ml-[5%] xl:ml-[10%] relative">
        <div className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[682px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[737px] relative z-10">
          <Image src={heroImage} alt="Private Party" fill className="object-cover" />
        </div>

        {/* Large Ellipse - Responsive positioning */}
        <div className="absolute bottom-[40px] md:bottom-[60px] lg:bottom-[80px] right-[10%] sm:right-[15%] lg:right-[23.5%] z-20">
          <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[257px] lg:h-[257px]">
            <Image src="/images/large-ellipse.svg" alt="" fill />
          </div>
        </div>
      </div>
    </section>
  )
}
