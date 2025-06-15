'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer className="bg-[#1B0E01] tenor-font px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[115px] py-12 sm:py-16 md:py-20 lg:py-[120px] w-full">
      <div className="footer-core max-w-7xl lg:max-w-[1210px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="footer-core-left flex flex-col items-center lg:items-start max-w-sm lg:max-w-none">
          <div className="footer-brand mb-4 lg:mb-6">
            <Image
              src="/images/logo.svg"
              alt="Golden Bond Logo"
              width={117}
              height={117}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[117px] lg:h-[117px]"
            />
          </div>

          <div className="address max-w-[220px] lg:max-w-[196px] mb-6 lg:mb-8 text-white">
            <p className="text-sm sm:text-base leading-relaxed">
              731 Walker Road, Suite F, Great Falls, VA 22066
            </p>
          </div>

          <div className="socials flex gap-4 sm:gap-6">
            <Link href="https://www.youtube.com/@GoldenBondJewelry" className="social-link group">
              <Image
                src="/images/socials/yt.svg"
                alt="YouTube"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <Link href="https://www.instagram.com/goldenbondjewelry" className="social-link group">
              <Image
                src="/images/socials/ig.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <Link href="https://www.facebook.com/goldenbondjewelry" className="social-link group">
              <Image
                src="/images/socials/fb.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <Link href="https://www.tiktok.com/@goldenbondjewelry" className="social-link group">
              <Image
                src="/images/socials/tt.svg"
                alt="TikTok"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-core-right flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-[44px] w-full lg:w-auto justify-center lg:justify-end">
          <div className="links-1 flex flex-col items-center sm:items-start">
            <Link href="/education" className="footer-link group mb-4 sm:mb-6 lg:mb-[38px]">
              <p className="text-[#FBD6A4] text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                Education
              </p>
            </Link>
            <Link href="/portfolio" className="footer-link group">
              <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                Portfolio
              </p>
            </Link>
          </div>

          <div className="links-2 flex flex-col items-center sm:items-start">
            <Link href="/events" className="footer-link group mb-4 sm:mb-6 lg:mb-[38px]">
              <p className="text-[#FBD6A4] text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                Events
              </p>
            </Link>
            <div className="space-y-2 sm:space-y-3 lg:space-y-[12px] flex flex-col items-center sm:items-start">
              <Link href="/private-parties" className="footer-link group">
                <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                  Private Parties
                </p>
              </Link>
              <Link href="/corporate-events" className="footer-link group">
                <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                  Corporate Events
                </p>
              </Link>
              <Link href="/pop-up-events" className="footer-link group">
                <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                  Pop-Up
                </p>
              </Link>
            </div>
          </div>

          <div className="links-3 flex flex-col items-center sm:items-start">
            <Link href="/resources" className="footer-link group mb-4 sm:mb-6 lg:mb-[38px]">
              <p className="text-[#FBD6A4] text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                Resources
              </p>
            </Link>
            <div className="space-y-2 sm:space-y-3 lg:space-y-[12px] flex flex-col items-center sm:items-start">
              <Link href="/home" className="footer-link group">
                <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                  Home
                </p>
              </Link>
              <Link href="/story-time" className="footer-link group">
                <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                  Story Time
                </p>
              </Link>
              <Link href="/about" className="footer-link group">
                <p className="text-[#B58E5A] text-sm sm:text-base group-hover:text-[#FBD6A4] transition-colors duration-300">
                  About
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-10 sm:mt-12 md:mt-16 lg:mt-[70px] pt-6 sm:pt-8 border-t border-[#B58E5A]/20">
        <p className="text-center text-[#FBD6A4] text-xs sm:text-sm">
          Copyright © 2025, Golden Bond. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
