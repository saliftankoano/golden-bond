'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export const ContactHero: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="corporate-hero flex flex-col lg:flex-row bg-[#F4F1EB] relative pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-x-hidden">
      <div className="left w-full lg:w-1/2 px-[20px] sm:px-[40px] md:px-[50px] lg:ml-[60px] lg:px-0 mt-[30px] md:mt-[40px] lg:mt-[45px] tenor-font">
        <div className="w-full max-w-[622px] flex flex-col mx-auto lg:mx-0">
          <h1 className="w-full text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[54px] text-black garamond-font leading-[120%] mb-[16px] md:mb-[21px]">
            Enter your information <br /> and we will contact you
          </h1>
          <p className="w-full text-[15px] md:text-[16px] lg:text-[17px] text-[#4A4A4A] leading-[150%] tenor-font mb-[30px] md:mb-[35px] lg:mb-[40px]">
            Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and
            sterling silver, as well as clasped and ready to wear jewelry.
          </p>

          <form
            className="w-full space-y-[16px] md:space-y-[18px] lg:space-y-[20px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row gap-[16px] md:gap-[18px] lg:gap-[20px]">
              <div className="flex-1">
                <label className="block text-[14px] md:text-[15px] lg:text-[16px] text-[#757575] mb-[6px] md:mb-[8px] tenor-font">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter Your First Name"
                  className="w-full h-[44px] md:h-[48px] lg:h-[50px] px-[14px] md:px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[14px] md:text-[15px] lg:text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] rounded-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[14px] md:text-[15px] lg:text-[16px] text-[#757575] mb-[6px] md:mb-[8px] tenor-font">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Your Last Name"
                  className="w-full h-[44px] md:h-[48px] lg:h-[50px] px-[14px] md:px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[14px] md:text-[15px] lg:text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] rounded-sm"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[16px] md:gap-[18px] lg:gap-[20px]">
              <div className="flex-1">
                <label className="block text-[14px] md:text-[15px] lg:text-[16px] text-[#757575] mb-[6px] md:mb-[8px] tenor-font">
                  Birthday
                </label>
                <input
                  type="text"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  placeholder="Enter Your Birthday"
                  className="w-full h-[44px] md:h-[48px] lg:h-[50px] px-[14px] md:px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[14px] md:text-[15px] lg:text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] rounded-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[14px] md:text-[15px] lg:text-[16px] text-[#757575] mb-[6px] md:mb-[8px] tenor-font">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full h-[44px] md:h-[48px] lg:h-[50px] px-[14px] md:px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[14px] md:text-[15px] lg:text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] rounded-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] md:text-[15px] lg:text-[16px] text-[#757575] mb-[6px] md:mb-[8px] tenor-font">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
                className="w-full h-[44px] md:h-[48px] lg:h-[50px] px-[14px] md:px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[14px] md:text-[15px] lg:text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] rounded-sm"
              />
            </div>

            <div>
              <label className="block text-[14px] md:text-[15px] lg:text-[16px] text-[#757575] mb-[6px] md:mb-[8px] tenor-font">
                Why are you reaching out to Golden Bond?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Text...."
                rows={4}
                className="w-full px-[14px] md:px-[16px] py-[10px] md:py-[12px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[14px] md:text-[15px] lg:text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] resize-none rounded-sm"
              />
            </div>

            <div className="w-full flex justify-center lg:justify-start mt-[24px] md:mt-[28px] lg:mt-[32px] z-10">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] h-[48px] md:h-[52px] lg:h-[55px] px-[6%] sm:px-[8%] md:px-[10%] bg-[#B58E5A] text-[14px] sm:text-[15px] lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase"
              >
                <p className="whitespace-nowrap">PLAN MY EVENT</p>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="right hidden md:flex w-full lg:w-1/2 justify-center lg:justify-end mt-[40px] lg:mt-[45px] px-[20px] lg:px-0 lg:ml-[5%] xl:ml-[10%] relative">
        {/* Ellipse decorations */}
        <div className="absolute top-[150px] sm:top-[200px] lg:top-[250px] -left-[50px] sm:-left-[80px] lg:-left-[100px] w-[180px] sm:w-[220px] lg:w-[257px] h-[180px] sm:h-[220px] lg:h-[257px] z-0">
          <Image src="/images/large-ellipse.svg" alt="" fill className="opacity-50" />
        </div>
        <div className="absolute -bottom-[40px] sm:-bottom-[60px] lg:-bottom-[80px] -right-[30px] sm:-right-[40px] lg:-right-[50px] w-[180px] sm:w-[220px] lg:w-[257px] h-[180px] sm:h-[220px] lg:h-[257px] z-0">
          <Image src="/images/large-ellipse.svg" alt="" fill className="opacity-30" />
        </div>

        <div className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[682px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[737px] relative z-10">
          <Image
            src="/images/contact/sign.jpg"
            alt="Golden Bond Neon Sign"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
