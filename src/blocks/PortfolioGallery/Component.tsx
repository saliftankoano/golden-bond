'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface EventCard {
  id: number
  title: string
  description: string
  image: string
  orientation: 'landscape' | 'portrait'
}

interface PortfolioGalleryBlockProps {
  headerSubtitle?: string
  headerTitle?: string
  events?: EventCard[]
}

const defaultEvents: EventCard[] = [
  // Column 1: Portrait, then Landscape
  {
    id: 1,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'portrait',
  },
  {
    id: 2,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'landscape',
  },
  // Column 2: Landscape, then Portrait (opposite pattern)
  {
    id: 3,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'landscape',
  },
  {
    id: 4,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'portrait',
  },
  // Column 3: Portrait, then Landscape (same as column 1)
  {
    id: 5,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'portrait',
  },
  {
    id: 6,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/portfolio/birthday.jpg',
    orientation: 'landscape',
  },
  // Column 4: 3 Landscapes
  {
    id: 7,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'landscape',
  },
  {
    id: 8,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'landscape',
  },
  {
    id: 9,
    title: 'Event Name',
    description:
      "Whether you're an individual entrepreneur or a team looking to expand your skills.",
    image: '/images/story-time/story-time-hero.jpg',
    orientation: 'landscape',
  },
]

export const PortfolioGalleryBlock: React.FC<PortfolioGalleryBlockProps> = ({
  headerSubtitle = 'Let our team know - we love to see what inspires you!',
  headerTitle = 'See something you like?',
  events = defaultEvents,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxClosing, setLightboxClosing] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle opening lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxClosing(false)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }

  // Handle closing lightbox with smooth animation
  const closeLightbox = () => {
    setLightboxClosing(true)
    // Delay the actual closing to allow animation to complete
    setTimeout(() => {
      setLightboxOpen(false)
      setLightboxClosing(false)
      document.body.style.overflow = 'unset' // Restore background scroll
    }, 300) // 300ms matches the transition duration
  }

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }, [events.length])

  // Navigate to next image
  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1))
  }, [events.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, goToPrevious, goToNext])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#F5F5F0] relative overflow-hidden">
        {/* Decorative ellipses - responsive positioning and sizing */}
        <Image
          src="/images/small-ellipse.svg"
          alt="small ellipse"
          width={160}
          height={160}
          className="absolute top-8 sm:top-12 md:top-16 lg:top-20 right-4 sm:right-6 md:right-8 lg:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <Image
          src="/images/large-ellipse.svg"
          alt="large ellipse"
          width={257}
          height={257}
          className="absolute bottom-[20%] sm:bottom-[30%] md:bottom-[40%] lg:bottom-[46.8%] left-2 sm:left-4 md:left-6 lg:left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
        />

        <div className="max-w-7xl mx-auto">
          {/* Header - responsive typography */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[#B58E5A] tenor-font text-sm sm:text-base lg:text-lg mb-2 tracking-wide leading-[120%] max-w-md mx-auto px-4">
              {headerSubtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl garamond-font font-bold text-gray-800 leading-tight px-4">
              {headerTitle}
            </h2>
          </div>

          {/* Masonry Gallery - responsive columns and spacing */}
          <div
            className="columns-2 md:columns-3 lg:columns-4 space-y-4 sm:space-y-6"
            style={{ gap: '20px' }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className="break-inside-avoid mb-4 sm:mb-6 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => openLightbox(index)}
              >
                <div
                  className={`relative mb-3 sm:mb-4 overflow-hidden shadow-md sm:shadow-lg ${
                    event.orientation === 'landscape'
                      ? 'aspect-[293/214]' // 293x214 landscape ratio
                      : 'aspect-[293/505]' // 293x505 portrait ratio
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Content - responsive typography */}
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold garamond-font text-gray-800 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 tenor-font text-xs sm:text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Star Icon - responsive sizing */}
          <div className="text-center mt-12 sm:mt-14 md:mt-16">
            <Image
              src="/images/portfolio/star.svg"
              alt="star"
              width={64}
              height={64}
              className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          className={`fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            lightboxClosing ? 'opacity-0 backdrop-blur-none' : 'opacity-100'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className={`absolute hover:cursor-pointer top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-200 transition-all duration-200 z-10 bg-[#B58E5A] bg-opacity-80 rounded-full p-3 ${
              lightboxClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
            }`}
            aria-label="Close lightbox"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className={`absolute hover:cursor-pointer left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-all duration-200 z-10 bg-[#B58E5A] bg-opacity-80 rounded-full p-3 ${
              lightboxClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
            }`}
            aria-label="Previous image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className={`absolute hover:cursor-pointer right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-all duration-200 z-10 bg-[#B58E5A] bg-opacity-80 rounded-full p-3 ${
              lightboxClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
            }`}
            aria-label="Next image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 sm:w-7 sm:h-7"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>

          {/* Main Image */}
          <div
            className={`relative max-w-[90vw] max-h-[80vh] w-full h-full flex items-center justify-center transition-all duration-300 ease-out ${
              lightboxClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {events[currentImageIndex] && (
              <Image
                src={events[currentImageIndex].image}
                alt={events[currentImageIndex].title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            )}
          </div>

          {/* Image Counter */}
          <div
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base bg-black bg-opacity-30 px-3 py-1 rounded-full transition-all duration-200 ${
              lightboxClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            {currentImageIndex + 1} / {events.length}
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
        </div>
      )}

      <style jsx>{`
        .columns-2 {
          gap: 20px;
        }
        @media (min-width: 640px) {
          .columns-2 {
            gap: 30px;
          }
        }
        @media (min-width: 768px) {
          .columns-2,
          .columns-3 {
            gap: 40px;
          }
        }
        @media (min-width: 1024px) {
          .columns-2,
          .columns-3,
          .columns-4 {
            gap: 49px;
          }
        }
      `}</style>
    </>
  )
}
