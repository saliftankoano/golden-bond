'use client'

import React from 'react'
import Image from 'next/image'

interface Partner {
  name: string
  logo: string
}

interface CorporatePartnersProps {
  title?: string
  partners?: Partner[]
}

const defaultPartners: Partner[] = [
  {
    name: 'Google',
    logo: '/images/corporate/logo1.svg',
  },
  {
    name: 'Panda Express',
    logo: '/images/corporate/logo2.svg',
  },
  {
    name: 'HSBC',
    logo: '/images/corporate/logo3.svg',
  },
  {
    name: 'Forbes',
    logo: '/images/corporate/logo4.svg',
  },
  {
    name: 'Partner Logo 5',
    logo: '/images/corporate/logo1.svg',
  },
  {
    name: 'Partner Logo 6',
    logo: '/images/corporate/logo2.svg',
  },
  {
    name: 'Partner Logo 7',
    logo: '/images/corporate/logo3.svg',
  },
  {
    name: 'Partner Logo 8',
    logo: '/images/corporate/logo4.svg',
  },
]

export const CorporatePartners: React.FC<CorporatePartnersProps> = ({
  title = "BRANDS WE'VE PARTNERED WITH",
  partners = defaultPartners,
}) => {
  return (
    <section className="w-full bg-[#F4F1EB] flex flex-col items-center py-[80px] px-4">
      {/* Header */}
      <div className="text-center mb-[60px]">
        <h2 className="garamond-font text-[32px] font-semibold text-black leading-[120%] tracking-wider">
          {title}
        </h2>
      </div>

      {/* Partners Grid */}
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-[80px] h-[60px] md:w-[100px] md:h-[75px] relative flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
