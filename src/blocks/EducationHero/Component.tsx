'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface FormData {
  fullName: string
  birthday: string
  email: string
  inPerson: boolean
  online: boolean
}

export const EducationHero: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [overlayStep, setOverlayStep] = useState<'waitlist' | 'question' | 'dataform' | 'success'>(
    'waitlist',
  )
  const [userName, setUserName] = useState<string>('')
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthday: '',
    email: '',
    inPerson: false,
    online: false,
  })

  const questionBursts = [
    '/images/education/burst1.svg',
    '/images/education/burst2.svg',
    '/images/education/burst3.svg',
    '/images/education/burst4.svg',
    '/images/education/burst5.svg',
  ]

  const openWaitlistOverlay = () => {
    setOverlayStep('waitlist')
    setIsOverlayOpen(true)
  }

  const closeOverlay = () => {
    setIsOverlayOpen(false)
    setTimeout(() => {
      setOverlayStep('waitlist')
      setUserName('')
      setSelectedAnswer('')
      setFormData({
        fullName: '',
        birthday: '',
        email: '',
        inPerson: false,
        online: false,
      })
    }, 300)
  }

  const handleBeginJourney = () => {
    setOverlayStep('question')
  }

  const handleQuestionNext = (answer: string) => {
    setSelectedAnswer(answer)
    setOverlayStep('dataform')
  }

  const handleFormSubmit = () => {
    setUserName(formData.fullName)
    setOverlayStep('success')
    // TODO: Handle form submission (API call, etc.)
  }

  const renderWaitlistOverlay = () => (
    <div className="absolute inset-0 z-50">
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-[14px] animate-fade-in"
        onClick={closeOverlay}
      />
      <div className="relative w-full h-full bg-[#1B0E01]/70 animate-scale-in overflow-y-auto">
        <button
          onClick={closeOverlay}
          className="hover:cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
        >
          <svg
            className="w-14 h-14 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16 text-center h-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="garamond-font text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] text-center text-white uppercase tracking-wide mb-4 sm:mb-6 drop-shadow-lg">
              JOIN THE WAITLIST
            </h2>
            <p className="tenor-font text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center text-white max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow-md px-2">
              Master the craft and business of permanent jewelry with our comprehensive training
              programs—available <span className="underline">online</span>,{' '}
              <span className="underline">in-person</span>, or{' '}
              <span className="underline">hybrid</span> to fit your needs. Whether you&apos;re an
              individual entrepreneur or a team looking to expand your skills, we provide hands-on,
              expert-led education to help you succeed.
            </p>

            <button
              onClick={handleBeginJourney}
              className="hover:cursor-pointer mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#B58E5A] hover:bg-[#B58E5A]/90 text-white font-semibold tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] transition-colors duration-300 flex items-center gap-2 mx-auto mb-8 sm:mb-10 md:mb-12 drop-shadow-lg"
            >
              BEGIN THE JOURNEY
              <svg
                className="w-4 h-4 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="relative w-full flex justify-center">
              <div className="absolute -left-16 sm:-left-20 md:-left-24 lg:-left-32 top-4 sm:top-6 md:top-8 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[257px] lg:h-[257px] z-0">
                <Image
                  src="/images/large-ellipse.svg"
                  alt=""
                  width={257}
                  height={257}
                  className="opacity-40 sm:opacity-50 md:opacity-60"
                />
              </div>
              <div className="absolute -right-10 sm:-right-12 md:-right-16 lg:-right-30 top-8 sm:top-10 md:top-12 lg:-top-16 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[153px] lg:h-[153px] z-0">
                <Image
                  src="/images/small-ellipse.svg"
                  alt=""
                  width={153}
                  height={153}
                  className="opacity-40 sm:opacity-50 md:opacity-60"
                />
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-[10px] sm:gap-[12px] justify-items-center">
                  {[
                    {
                      src: '/images/education/education.webp',
                      alt: 'Business planning and jewelry design',
                    },
                    {
                      src: '/images/education/model-jewel.jpg',
                      alt: 'Permanent jewelry on hand with flowers',
                    },
                    { src: '/images/education/pop-up.jpg', alt: 'Jewelry welding process' },
                    {
                      src: '/images/education/nice-showcase.jpg',
                      alt: 'Business planning and jewelry design',
                    },
                    { src: '/images/education/course.webp', alt: 'Training course' },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden drop-shadow-lg flex-shrink-0 ${index === 4 ? 'col-span-2 sm:col-span-1 justify-self-center' : ''}`}
                    >
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex justify-center items-center gap-[17.5px]">
                  {[
                    {
                      src: '/images/education/education.webp',
                      alt: 'Business planning and jewelry design',
                    },
                    {
                      src: '/images/education/model-jewel.jpg',
                      alt: 'Permanent jewelry on hand with flowers',
                    },
                    { src: '/images/education/pop-up.jpg', alt: 'Jewelry welding process' },
                    { src: '/images/education/nice-showcase.jpg', alt: 'Students and instructors' },
                    { src: '/images/education/course.webp', alt: 'Training course' },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[225px] xl:w-[250px] xl:h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0"
                    >
                      <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderQuestionOverlay = () => {
    const currentQuestion = 1
    const imageOptions = [
      {
        id: 'business-professional',
        image: '/images/education/nice-showcase.jpg',
        label: 'Business & Professional Focus',
      },
      {
        id: 'creative-artistic',
        image: '/images/education/model-jewel.jpg',
        label: 'Creative & Artistic Focus',
      },
    ]

    const handleNext = () => {
      if (selectedAnswer) {
        handleQuestionNext(selectedAnswer)
      }
    }

    return (
      <div className="absolute inset-0 z-60">
        <div
          className="absolute inset-0 bg-transparent backdrop-blur-[16px] animate-fade-in"
          onClick={closeOverlay}
        />
        <div className="relative w-full h-full bg-[#1B0E01]/70 animate-scale-in overflow-y-auto">
          <button
            onClick={closeOverlay}
            className="hover:cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
          >
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16 text-center h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Question Indicator Bursts */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                {questionBursts.map((burstSrc, index) => (
                  <div
                    key={index}
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-300 ${
                      index === currentQuestion - 1
                        ? 'scale-110 drop-shadow-2xl'
                        : 'scale-90 opacity-40'
                    }`}
                  >
                    <Image
                      src={burstSrc}
                      alt={`Question ${index + 1}`}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        index === currentQuestion - 1
                          ? 'brightness-110 saturate-110'
                          : 'brightness-75'
                      }`}
                    />
                    {index === currentQuestion - 1 && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#B58E5A] animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              <p className="garamond-font font-semibold text-[48px] text-center text-white max-w-[850px] mx-auto leading-relaxed mb-8 sm:mb-12 drop-shadow-md">
                What best describes your current experience with permanent jewelry?
              </p>

              {/* Two Image Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-[24px] lg:gap-[42px] mb-8 sm:mb-12 justify-items-center max-w-4xl mx-auto">
                {imageOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setSelectedAnswer(option.id)}
                    className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedAnswer === option.id ? 'scale-105' : ''
                    }`}
                  >
                    <div
                      className={`relative lg:w-[270px] lg:h-[246px] overflow-hidden transition-all duration-300 ${
                        selectedAnswer === option.id
                          ? 'drop-shadow-2xl ring-4 ring-[#B58E5A] ring-offset-4 ring-offset-transparent'
                          : 'drop-shadow-lg hover:drop-shadow-xl'
                      }`}
                    >
                      <Image
                        src={option.image}
                        alt={option.label}
                        fill
                        className={`object-cover transition-all duration-300 ${
                          selectedAnswer === option.id
                            ? 'brightness-110 saturate-110'
                            : 'brightness-90 hover:brightness-100'
                        }`}
                      />
                    </div>
                    <p className="tenor-font text-[14px] sm:text-[16px] md:text-[18px] text-white text-center mt-4 sm:mt-6 leading-tight drop-shadow-md font-medium">
                      {option.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-semibold tenor-font text-[14px] sm:text-[16px] md:text-[18px] transition-all duration-300 flex items-center gap-2 mx-auto drop-shadow-lg uppercase tracking-wide ${
                  selectedAnswer
                    ? 'bg-[#B58E5A] hover:bg-[#B58E5A]/90 text-white hover:scale-105 cursor-pointer'
                    : 'bg-[#4A4A4A]/49 text-gray-300 cursor-not-allowed'
                }`}
              >
                Next
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderDataFormOverlay = () => {
    const currentQuestion = 4

    const handleInputChange = (field: keyof FormData, value: string | boolean) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }

    const isFormValid =
      formData.fullName &&
      formData.birthday &&
      formData.email &&
      (formData.inPerson || formData.online)

    return (
      <div className="absolute inset-0 z-60">
        <div
          className="absolute inset-0 bg-transparent backdrop-blur-[16px] animate-fade-in"
          onClick={closeOverlay}
        />
        <div className="relative w-full h-full bg-[#1B0E01]/80 animate-scale-in overflow-y-auto">
          <button
            onClick={closeOverlay}
            className="hover:cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
          >
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16 text-center h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Question Indicator Bursts */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                {questionBursts.map((burstSrc, index) => (
                  <div
                    key={index}
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-300 ${
                      index === currentQuestion - 1
                        ? 'scale-110 drop-shadow-2xl'
                        : 'scale-90 opacity-40'
                    }`}
                  >
                    <Image
                      src={burstSrc}
                      alt={`Question ${index + 1}`}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        index === currentQuestion - 1
                          ? 'brightness-110 saturate-110'
                          : 'brightness-75'
                      }`}
                    />
                    {index === currentQuestion - 1 && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#B58E5A] animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              <h2 className="garamond-font text-[36px] sm:text-[42px] md:text-[48px] text-center text-white uppercase tracking-wide mb-8 sm:mb-12 drop-shadow-lg">
                Enter Your Data
              </h2>

              {/* Form Fields */}
              <div className="space-y-6 mb-8 sm:mb-12 max-w-md mx-auto">
                {/* Full Name */}
                <div>
                  <label className="block text-white text-[16px] sm:text-[18px] tenor-font mb-3 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/30 text-white placeholder-white/60 tenor-font text-[14px] sm:text-[16px] focus:outline-none focus:border-[#B58E5A] focus:ring-2 focus:ring-[#B58E5A]/30 transition-all duration-300"
                  />
                </div>

                {/* Birthday */}
                <div>
                  <label className="block text-white text-[16px] sm:text-[18px] tenor-font mb-3 text-left">
                    Birthday
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Birthday"
                    value={formData.birthday}
                    onChange={(e) => handleInputChange('birthday', e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/30 text-white placeholder-white/60 tenor-font text-[14px] sm:text-[16px] focus:outline-none focus:border-[#B58E5A] focus:ring-2 focus:ring-[#B58E5A]/30 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-[16px] sm:text-[18px] tenor-font mb-3 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-white/30 text-white placeholder-white/60 tenor-font text-[14px] sm:text-[16px] focus:outline-none focus:border-[#B58E5A] focus:ring-2 focus:ring-[#B58E5A]/30 transition-all duration-300"
                  />
                </div>

                {/* Checkboxes */}
                <div className="flex justify-center gap-8 mt-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.inPerson}
                      onChange={(e) => handleInputChange('inPerson', e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border-2 border-white/50 mr-3 flex items-center justify-center transition-all duration-300 ${
                        formData.inPerson ? 'bg-[#B58E5A] border-[#B58E5A]' : ''
                      }`}
                    >
                      {formData.inPerson && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-white tenor-font text-[16px] sm:text-[18px]">
                      In-Person
                    </span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.online}
                      onChange={(e) => handleInputChange('online', e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border-2 border-white/50 mr-3 flex items-center justify-center transition-all duration-300 ${
                        formData.online ? 'bg-[#B58E5A] border-[#B58E5A]' : ''
                      }`}
                    >
                      {formData.online && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-white tenor-font text-[16px] sm:text-[18px]">Online</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleFormSubmit}
                disabled={!isFormValid}
                className={`px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-semibold tenor-font text-[14px] sm:text-[16px] md:text-[18px] transition-all duration-300 flex items-center gap-2 mx-auto drop-shadow-lg uppercase tracking-wide ${
                  isFormValid
                    ? 'bg-[#B58E5A] hover:bg-[#B58E5A]/90 text-white hover:scale-105 cursor-pointer'
                    : 'bg-[#4A4A4A]/49 text-gray-300 cursor-not-allowed'
                }`}
              >
                Next
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderSuccessOverlay = () => {
    const currentQuestion = 5

    return (
      <div className="absolute inset-0 z-60">
        <div
          className="absolute inset-0 bg-transparent backdrop-blur-[16px] animate-fade-in"
          onClick={closeOverlay}
        />
        <div className="relative w-full h-full bg-[#1B0E01]/70 animate-scale-in overflow-y-auto">
          <button
            onClick={closeOverlay}
            className="hover:cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
          >
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16 text-center h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Question Indicator Bursts */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                {questionBursts.map((burstSrc, index) => (
                  <div
                    key={index}
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-300 ${
                      index === currentQuestion - 1
                        ? 'scale-110 drop-shadow-2xl'
                        : 'scale-90 opacity-40'
                    }`}
                  >
                    <Image
                      src={burstSrc}
                      alt={`Question ${index + 1}`}
                      fill
                      className={`object-contain transition-all duration-300 ${
                        index === currentQuestion - 1
                          ? 'brightness-110 saturate-110'
                          : 'brightness-75'
                      }`}
                    />
                    {index === currentQuestion - 1 && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#B58E5A] animate-pulse" />
                    )}
                  </div>
                ))}
              </div>

              {/* Success Message */}
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="garamond-font text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] text-center text-white leading-[1.2] mb-6 sm:mb-8 drop-shadow-lg max-w-4xl mx-auto">
                  You&apos;re officially on the waitlist,{' '}
                  <span className="text-[#B58E5A]">{userName}</span> <br /> Stay tuned!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="w-full h-screen relative">
        <Image
          src="/images/education/education.webp"
          alt="Hero"
          fill
          className="object-cover object-bottom filter brightness-50"
        />
        <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[899px] h-auto mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8">
          <div className="heading">
            <h1 className="uppercase garamond-font text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[75px] leading-[120%] text-white">
              BECOME A TRUE PERMANENT JEWELRY PRO
            </h1>
          </div>
          <div className="mt-[16px] sm:mt-[20px] md:mt-[24px] mx-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[641px]">
            <p className="tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[120%] text-white text-center">
              Learn from industry experts with hands-on training, professional coaching, and the
              best tools in the business
            </p>
          </div>
          <div className="btn-container flex justify-center mt-[24px] sm:mt-[32px] md:mt-[40px] lg:mt-[44px] xl:mt-[48px]">
            <button
              onClick={openWaitlistOverlay}
              className="uppercase w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:scale-95 hover:cursor-pointer transition-all duration-300 ease-in-out transform whitespace-nowrap px-4 sm:px-6"
            >
              Join the waitlist
            </button>
          </div>
        </div>

        {isOverlayOpen && overlayStep === 'waitlist' && renderWaitlistOverlay()}
        {isOverlayOpen && overlayStep === 'question' && renderQuestionOverlay()}
        {isOverlayOpen && overlayStep === 'dataform' && renderDataFormOverlay()}
        {isOverlayOpen && overlayStep === 'success' && renderSuccessOverlay()}
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}
