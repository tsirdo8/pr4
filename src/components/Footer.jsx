import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div><footer className="bg-black text-white">
            <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:max-w-[1110px]">
              <div className="border-t border-gray-700 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
                  <div className="mb-8 md:mb-0">
                    <Link to="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">
                      audiophile
                    </Link>
                  </div>
                  
                  <nav className="mb-8 md:mb-0">
                    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 text-center sm:text-left">
                      <li>
                        <Link 
                          to="/" 
                          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-orange-500 transition-colors"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/headphones" 
                          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-orange-500 transition-colors"
                        >
                          Headphones
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/speakers" 
                          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-orange-500 transition-colors"
                        >
                          Speakers
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/earphones" 
                          className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-orange-500 transition-colors"
                        >
                          Earphones
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
    
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 pb-12">
                  <div className="text-sm md:text-base text-gray-400 text-center lg:text-left max-w-xl">
                    <p className="mb-6">
                      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                      and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                      visit our demo facility - we're open 7 days a week.
                    </p>
                    <p className="text-sm text-gray-500">
                      Copyright {new Date().getFullYear()}. All Rights Reserved
                    </p>
                  </div>
    
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-orange-500 transition-colors">
                      <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-orange-500 transition-colors">
                      <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-orange-500 transition-colors">
                      <img src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </div>
  )
}
