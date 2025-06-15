'use client'

import React from 'react'
import Image from 'next/image'

interface StoryTimeArticleTestimonialBlockProps {
  testimonialLabel?: string
  testimonialName?: string
  testimonialQuote?: string
  testimonialImage?: string
  buttonText?: string
}

export const StoryTimeArticleTestimonialBlock: React.FC<StoryTimeArticleTestimonialBlockProps> = ({
  testimonialLabel = 'Testimonials',
  testimonialName = 'Julia',
  testimonialQuote = "I had the pleasure of attending a Story Time event at Golden Bond Studio, and it was truly a magical experience. The atmosphere was warm and inviting, and the stories shared by the curator were absolutely captivating. I left feeling inspired and enlightened, and I can't wait to attend another event in the future.",
  testimonialImage = 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  buttonText = 'Plan My Event',
}) => {
  return (
    <section className="testimonial-section min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:h-[782px] bg-[#1B0E01] flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Image */}
      <div className="left w-full h-[300px] sm:h-[400px] md:h-[450px] lg:my-[121px] lg:ml-[60px] lg:w-[496px] lg:max-w-[496px] lg:h-[540px] lg:max-h-[540px] relative">
        <Image
          src={testimonialImage}
          alt="Testimonial"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="right flex-1 px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-12 md:py-16 lg:mt-[121px] lg:w-[713px] lg:max-w-[713px] relative">
        <div className="testimonial-content max-w-full lg:max-w-[613px] lg:max-h-[287px] lg:pl-[91px] relative z-10">
          <h2 className="text-[#B58E5A] text-[16px] sm:text-[18px] lg:text-[20px] tenor-font leading-[120%] lg:leading-[20%] uppercase">
            {testimonialLabel}
          </h2>
          <h1 className="mt-[8px] sm:mt-[10px] lg:mt-[12px] text-white font-extrabold garamond-font text-[24px] sm:text-[28px] lg:text-[32px]">
            {testimonialName}
          </h1>
          <div className="mt-[16px] sm:mt-[20px] lg:mt-[24px] text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-[140%] sm:leading-[145%] lg:leading-[150%] tenor-font">
            &ldquo;{testimonialQuote}&rdquo;
          </div>
          <button className="w-full sm:w-auto mt-[24px] sm:mt-[28px] lg:mt-[32px] min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:cursor-pointer transition-colors duration-300 whitespace-nowrap px-4 sm:px-6">
            {buttonText}
          </button>
        </div>

        {/* Large Ellipse positioned responsively */}
        <div className="hidden lg:block absolute top-[120px] -right-[200px] w-[200px] h-[200px] xl:w-[257px] xl:h-[257px]">
          <Image
            src="/images/large-ellipse.svg"
            alt="Decorative ellipse"
            width={257}
            height={257}
            className="w-full h-full"
          />
        </div>

        {/* Mobile/Tablet decorative ellipse */}
        <div className="lg:hidden absolute -top-[50px] -right-[50px] sm:-right-[80px] w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] opacity-30">
          <Image
            src="/images/large-ellipse.svg"
            alt="Decorative ellipse"
            width={150}
            height={150}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
