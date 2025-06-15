'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface StoryTimeArticleContentBlockProps {
  title?: string
  eventDate?: string
  eventLocation?: string
  content?: string[]
  mainImage?: string
}

export const StoryTimeArticleContentBlock: React.FC<StoryTimeArticleContentBlockProps> = ({
  title = 'An Evening of Elegance: The Golden Bond Story Time Experience',
  eventDate = 'December 15, 2024',
  eventLocation = 'Golden Bond Studio, Great Falls, VA',
  content = [
    "The soft glow of candlelight danced across the meticulously curated collection of vintage jewelry as guests gathered for an unforgettable evening at Golden Bond Studio. This wasn't just another jewelry viewing—it was an immersive storytelling experience that transported attendees through decades of elegance, craftsmanship, and personal narratives woven into each precious piece.",
    'As the evening began, our master storyteller unveiled the first piece: a stunning 1920s Art Deco diamond bracelet that once graced the wrist of a silent film actress. The intricate geometric patterns caught the light as the tale unfolded—stories of glamorous premieres, secret romances, and the golden age of Hollywood.',
    'The centerpiece of the evening was a rare Victorian emerald necklace, its deep green stones seeming to hold secrets from another era. Our curator shared the fascinating journey of this piece—from the drawing rooms of Victorian England to the ballrooms of Belle Époque Paris, and finally to our intimate gathering in Great Falls, Virginia.',
    "What makes Golden Bond Story Time truly special is the personal connection each guest develops with the pieces. As the evening progressed, attendees were invited to share their own jewelry stories—grandmother's wedding ring, a graduation gift, or a special purchase marking a life milestone.",
    'The evening concluded with guests browsing our curated collection, each piece now carrying not just its inherent beauty, but the stories and connections formed throughout the night. This is the magic we strive to create at every Golden Bond experience—where luxury meets meaning, and every piece tells a story worth sharing.',
  ],
  mainImage = '/images/story-time/glass.jpg',
}) => {
  const [copySuccess, setCopySuccess] = useState(false)

  const handleCopyLink = async () => {
    try {
      const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
      await navigator.clipboard.writeText(currentUrl)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleSocialClick = (platform: string) => {
    const urls = {
      facebook: 'https://www.facebook.com/goldenbondjewelry',
      instagram: 'https://www.instagram.com/goldenbondjewelry',
      youtube: 'https://www.youtube.com/@GoldenBondJewelry',
    }
    window.open(urls[platform as keyof typeof urls], '_blank')
  }

  return (
    <section className="w-full bg-[#F4F1EB] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[115px]">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-[1210px] mx-auto">
        {/* Article Header */}
        <div className="article-header mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
          <h1 className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[62px] garamond-font font-bold text-[#1B0E01] leading-[110%] sm:leading-[115%] lg:leading-[120%] mb-4 sm:mb-6 md:mb-8">
            {title}
          </h1>

          {/* Event Details */}
          <div className="event-details flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 md:gap-8">
            <div className="event-date">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tenor-font text-[#B58E5A] font-medium">
                📅 {eventDate}
              </p>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-[#B58E5A] rounded-full" />
            <div className="event-location">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] tenor-font text-[#B58E5A] font-medium">
                📍 {eventLocation}
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="article-content space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {/* First paragraph */}
          <div className="text-content">
            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] tenor-font text-[#1B0E01] leading-[140%] sm:leading-[135%] lg:leading-[130%] text-justify sm:text-left">
              {content[0]}
            </p>
          </div>

          {/* Featured Image */}
          <div className="image-content">
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                src={mainImage}
                alt="Golden Bond Story Time Event"
                width={800}
                height={500}
                className="w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px] object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
              />
              <div className="image-caption mt-3 sm:mt-4">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] tenor-font text-[#B58E5A] text-center italic">
                  Guests experiencing the intimate storytelling atmosphere at Golden Bond Studio
                </p>
              </div>
            </div>
          </div>

          {/* Content paragraphs */}
          {content.slice(1).map((paragraph, index) => (
            <div key={index} className="text-content">
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] tenor-font text-[#1B0E01] leading-[140%] sm:leading-[135%] lg:leading-[130%] text-justify sm:text-left">
                {paragraph}
              </p>
            </div>
          ))}
        </div>

        {/* Article Footer - Social Sharing */}
        <div className="article-footer mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-10 md:pt-12 lg:pt-16 border-t border-[#B58E5A]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="share-section">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] tenor-font text-[#1B0E01] font-medium mb-3 sm:mb-0 text-center sm:text-left">
                Follow us & share this story:
              </p>
            </div>
            <div className="social-share flex gap-3 sm:gap-4">
              {/* Facebook */}
              <button
                onClick={() => handleSocialClick('facebook')}
                className="social-share-btn w-10 h-10 sm:w-12 sm:h-12 bg-[#1877F2] hover:bg-[#1877F2]/90 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                onClick={() => handleSocialClick('instagram')}
                className="social-share-btn w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              {/* YouTube */}
              <button
                onClick={() => handleSocialClick('youtube')}
                className="social-share-btn w-10 h-10 sm:w-12 sm:h-12 bg-[#FF0000] hover:bg-[#FF0000]/90 rounded-full flex items-center justify-center transition-colors duration-300"
                title="Follow us on YouTube"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="social-share-btn w-10 h-10 sm:w-12 sm:h-12 bg-[#B58E5A] hover:bg-[#B58E5A]/90 rounded-full flex items-center justify-center transition-colors duration-300 relative"
                title="Copy link to clipboard"
              >
                {copySuccess ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Copy Success Message */}
          {copySuccess && (
            <div className="mt-4 text-center">
              <p className="text-[14px] tenor-font text-[#B58E5A] font-medium">
                ✅ Link copied to clipboard!
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="cta-section mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center bg-white rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] garamond-font font-bold text-[#1B0E01] mb-4 sm:mb-6">
            Want to Host Your Own Story Time Event?
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] tenor-font text-[#1B0E01] leading-[130%] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Create unforgettable moments with our exclusive jewelry storytelling experiences.
            Perfect for intimate gatherings, corporate events, or special celebrations.
          </p>
          <div className="btn-container">
            <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:cursor-pointer transition-colors duration-300 whitespace-nowrap px-4 sm:px-6">
              Plan My Event
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
