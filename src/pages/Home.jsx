import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import CategoryLinks from '../components/CategoryLinks ';

function Home() {
  // Screen size detection
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');

  // Responsive background image
  const heroImage = isMobile 
    ? './assets/home/mobile/image-hero.jpg'
    : isTablet
    ? './assets/home/tablet/image-hero.jpg'
    : './assets/home/desktop/image-hero.jpg';

  return (
    <div className="relative">
      {/* Hero Section with responsive background */}
      <div 
        className="relative min-h-[400px] w-full bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Nav />
        <div className="relative z-10 flex h-[calc(100vh-90px)] w-full items-center justify-center px-4 sm:justify-start sm:pl-[10%]">
          <div className="w-full max-w-[90%] xs:max-w-[400px] sm:max-w-[450px] text-white">
            <span className="mb-3 xs:mb-4 sm:mb-6 block text-xs xs:text-sm sm:text-lg uppercase tracking-[6px] xs:tracking-[8px] sm:tracking-[12px] opacity-50">
              New Product
            </span>
            <h1 className="mb-3 xs:mb-4 sm:mb-8 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] tracking-[0.5px] xs:tracking-[1px] sm:tracking-[2px] md:tracking-[3px]">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="mb-4 xs:mb-6 sm:mb-8 md:mb-12 text-xs xs:text-sm sm:text-base md:text-lg leading-[1.5] xs:leading-[1.7] opacity-75">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link 
              to="/product/xx99-mark-two-headphones" 
              className="inline-block bg-orange-500 px-4 xs:px-6 sm:px-8 md:px-12 py-2 xs:py-2.5 sm:py-3 md:py-4 text-xs xs:text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.5px] xs:tracking-[1px] sm:tracking-[2px] text-white hover:bg-orange-300 transition-colors"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
      
      <CategoryLinks/>
      
      {/* ZX9 Speaker Section */}
      <div className="relative bg-orange-500 overflow-hidden py-8 sm:py-12 md:py-16 rounded-lg my-8 sm:my-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-[1110px]">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="relative w-full md:w-[40%] mb-6 sm:mb-8 md:mb-0">
            <img 
              src="./assets/home/desktop/image-speaker-zx9.png" 
              alt="ZX9 Speaker" 
              className="relative z-10 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[350px] mx-auto"
            />
            <div className="absolute inset-0 bg-[url('./assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-center bg-contain opacity-20"></div>
          </div>
          <div className="w-full md:w-[50%] text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-3 sm:mb-4 md:mb-6">ZX9 SPEAKER</h2>
            <p className="text-sm sm:text-base md:text-lg opacity-75 mb-4 sm:mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link 
              to="/product/zx9-speaker" 
              className="inline-block bg-black px-6 sm:px-8 md:px-10 py-1 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[1px] sm:tracking-[2px] text-white hover:bg-gray-800 transition-colors"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>

      {/* ZX7 Speaker Section */}
      <div className="relative my-8 sm:my-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-[1110px] rounded-lg overflow-hidden h-[200px] sm:h-[280px] md:h-[320px] lg:h-[400px]">
        <div className="relative h-full w-full">
          <img 
            src="./assets/home/desktop/image-speaker-zx7.jpg" 
            alt="ZX7 Speaker" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-xs sm:max-w-sm md:max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-2 sm:mb-4 md:mb-6">ZX7 SPEAKER</h2>
              <Link 
                to="/product/zx7-speaker" 
                className="inline-block border-2 border-black px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[1px] sm:tracking-[2px] text-black bg-transparent hover:bg-black hover:text-white transition-colors"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* YX1 Earphones Section */}
      <div className="relative my-8 sm:my-12 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-[1110px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
          <div className="w-full sm:w-1/2 h-[200px] sm:h-[280px] md:h-[320px] rounded-lg overflow-hidden">
            <img 
              src="./assets/home/desktop/image-earphones-yx1.jpg" 
              alt="YX1 Earphones" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 bg-gray-100 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center h-[200px] sm:h-[280px] md:h-[320px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-4 sm:mb-5 md:mb-6">YX1 EARPHONES</h2>
            <Link 
              to="/product/yx1-earphones" 
              className="inline-block border-2 border-black px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[1px] sm:tracking-[2px] text-black bg-transparent hover:bg-black hover:text-white transition-colors w-fit"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative my-16 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-[1110px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 md:mb-8 tracking-wider">
              BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO GEAR
            </h2>
            <p className="text-sm md:text-base leading-relaxed opacity-75">
              Located at the heart of New York City, Audiophile is the premier store for high-end headphones, 
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of our products. Stop by our store 
              to meet some of the fantastic people who make Audiophile the best place to buy your portable 
              audio equipment.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="./assets/shared/desktop/image-best-gear.jpg" 
              alt="Best Audio Gear" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <footer className="bg-black text-white">
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
  );
}

export default Home;