import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CategoryLinks from '../components/CategoryLinks ';

function Speakers() {
  return (
    <div className="bg-white">
      <Nav />
      
      {/* Page Header */}
      <div className="bg-black text-white py-8 md:py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">SPEAKERS</h1>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-6 py-16 md:py-24 space-y-32">

        {/* ZX9 SPEAKER */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-32">
          <div className="md:w-1/2">
            <img 
              src="/assets/product-zx9-speaker/desktop/image-product.jpg" 
              alt="ZX9 Speaker"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-sm uppercase tracking-[10px] text-orange-500">NEW PRODUCT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4 mb-6">ZX9 SPEAKER</h2>
            <p className="text-gray-500 mb-8">
              Upgrade your sound system with the all-new ZX9 active speaker. It's a revolutionary speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.
            </p>
            <Link 
              to="/product/zx9-speaker" 
              className="inline-block bg-orange-500 hover:bg-orange-300 text-white px-6 py-3 uppercase font-bold tracking-wider transition-colors"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* ZX7 SPEAKER */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 lg:gap-32">
          <div className="md:w-1/2">
            <img 
              src="/assets/product-zx7-speaker/desktop/image-product.jpg" 
              alt="ZX7 Speaker"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4 mb-6">ZX7 SPEAKER</h2>
            <p className="text-gray-500 mb-8">
              Experience high quality sound reproduction with minimal footprint. The ZX7 speaker uses premium components to deliver the top-tier performance of high-powered speakers for home or studio use.
            </p>
            <Link 
              to="/product/zx7-speaker" 
              className="inline-block bg-orange-500 hover:bg-orange-300 text-white px-6 py-3 uppercase font-bold tracking-wider transition-colors"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

      </div>

    <CategoryLinks/>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO GEAR
            </h2>
            <p className="text-gray-500">
              Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/shared/desktop/image-best-gear.jpg" 
              alt="Best Audio Gear" 
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Speakers;