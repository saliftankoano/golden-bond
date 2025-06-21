'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as any

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as any

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as any

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  } as any

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
  } as any

  return (
    <motion.section
      className="corporate-hero flex flex-col lg:flex-row bg-[#F4F1EB] relative pb-[40px] md:pb-[60px] lg:pb-[80px] overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <motion.div
        className="left w-full lg:w-1/2 px-[20px] sm:px-[40px] md:px-[50px] lg:ml-[60px] lg:px-0 mt-[30px] md:mt-[40px] lg:mt-[45px] tenor-font"
        variants={textVariants}
      >
        <div className="w-full max-w-[622px] flex flex-col mx-auto lg:mx-0">
          <motion.h1
            className="w-full text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[54px] text-black garamond-font leading-[120%] mb-[16px] md:mb-[21px]"
            variants={textVariants}
          >
            Enter your information <br /> and we will contact you
          </motion.h1>
          <motion.p
            className="w-full text-[15px] md:text-[16px] lg:text-[17px] text-[#4A4A4A] leading-[150%] tenor-font mb-[30px] md:mb-[35px] lg:mb-[40px]"
            variants={textVariants}
          >
            Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and
            sterling silver, as well as clasped and ready to wear jewelry.
          </motion.p>

          <motion.form
            className="w-full space-y-[16px] md:space-y-[18px] lg:space-y-[20px]"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col sm:flex-row gap-[16px] md:gap-[18px] lg:gap-[20px]"
              variants={formVariants}
            >
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
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-[16px] md:gap-[18px] lg:gap-[20px]"
              variants={formVariants}
            >
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
            </motion.div>

            <motion.div variants={formVariants}>
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
            </motion.div>

            <motion.div variants={formVariants}>
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
            </motion.div>

            <motion.div
              className="w-full flex justify-center lg:justify-start mt-[24px] md:mt-[28px] lg:mt-[32px] z-10"
              variants={formVariants}
            >
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] h-[48px] md:h-[52px] lg:h-[55px] px-[6%] sm:px-[8%] md:px-[10%] bg-[#B58E5A] text-[14px] sm:text-[15px] lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase"
              >
                <p className="whitespace-nowrap">PLAN MY EVENT</p>
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>

      <div className="right hidden md:flex w-full lg:w-1/2 justify-center lg:justify-end mt-[40px] lg:mt-[45px] px-[20px] lg:px-0 lg:ml-[5%] xl:ml-[10%] relative">
        {/* Ellipse decorations */}
        <motion.div
          className="absolute top-[150px] sm:top-[200px] lg:top-[250px] -left-[50px] sm:-left-[80px] lg:-left-[100px] w-[180px] sm:w-[220px] lg:w-[257px] h-[180px] sm:h-[220px] lg:h-[257px] z-0"
          variants={decorativeVariants}
        >
          <Image src="/images/large-ellipse.svg" alt="" fill className="opacity-50" />
        </motion.div>
        <motion.div
          className="absolute -bottom-[40px] sm:-bottom-[60px] lg:-bottom-[80px] -right-[30px] sm:-right-[40px] lg:-right-[50px] w-[180px] sm:w-[220px] lg:w-[257px] h-[180px] sm:h-[220px] lg:h-[257px] z-0"
          variants={decorativeVariants}
        >
          <Image src="/images/large-ellipse.svg" alt="" fill className="opacity-30" />
        </motion.div>

        <motion.div
          className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[682px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[737px] relative z-10"
          variants={imageVariants}
        >
          <Image
            src="/images/contact/sign.jpg"
            alt="Golden Bond Neon Sign"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
