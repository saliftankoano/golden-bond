'use client'

import React from 'react'
import Image from 'next/image'

interface Step {
  title: string
  description: string
  image: string
}

interface CorporateFindProps {
  title?: string
  steps?: Step[]
}

const defaultSteps: Step[] = [
  {
    title: 'Select a Chain',
    description: 'All 14k gold option',
    image: '/images/private-party/pick.jpg',
  },
  {
    title: 'Choose a Charm',
    description: 'A naked chain is just fine too',
    image: '/images/private-party/pick.jpg',
  },
  {
    title: 'Pick Your Placement',
    description: 'Bracelet, Necklace, Ring or Anklet',
    image: '/images/private-party/pick.jpg',
  },
  {
    title: 'Custom Fit It',
    description: 'Bracelet, Necklace, Ring or Anklet',
    image: '/images/private-party/pick.jpg',
  },
]

export const CorporateFind: React.FC<CorporateFindProps> = ({
  title = 'Find Your Missing Piece',
  steps = defaultSteps,
}) => {
  return (
    <section className="w-screen bg-[#F4F1EB] flex flex-col items-center relative pt-[100px] overflow-x-hidden">
      {/* Small Ellipse */}
      <div className="absolute top-[120px] left-[5px]">
        <Image src="/images/small-ellipse.svg" alt="" width={146} height={146} />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[500px] mb-[80px] px-4">
        <h2 className="garamond-font text-[32px] sm:text-[40px] md:text-[48px] text-black leading-[120%] text-center">
          {title}
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="flex gap-[20px] max-w-[1350px] mx-auto px-[20px] pb-[80px]">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-[317px]">
            {/* Image Container */}
            <div className="w-[317px] h-[379px] relative mb-[30px]">
              <Image src={step.image} alt={step.title} fill className="object-cover" />
            </div>

            {/* Step Content */}
            <div className="text-center">
              <h3 className="garamond-font text-[24px] text-black leading-[120%] mb-[8px]">
                {step.title}
              </h3>
              <p className="text-[16px] text-[#4A4A4A] leading-[150%] tenor-font">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
