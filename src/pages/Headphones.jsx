import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CategoryLinks from '../components/CategoryLinks ';


function Headphones() {
  return (
    <div className="bg-white">
      <Nav />
      
      {/* Page Header */}
      <div className="bg-black text-white py-8 md:py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-center">HEADPHONES</h1>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-6 py-16 md:py-24 space-y-32">

        {/* XX99 MARK II */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-32">
          <div className="md:w-1/2">
            <img 
              src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" 
              alt="XX99 Mark II Headphones"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-sm uppercase tracking-[10px] text-orange-500">NEW PRODUCT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4 mb-6">XX99 MARK II HEADPHONES</h2>
            <p className="text-gray-500 mb-8">
              The new XX99 Mark II headphones are the pinnacle of pristine audio. They redefine your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <Link 
              to="/product/xx99-mark-two-headphones" 
              className="inline-block bg-orange-500 hover:bg-orange-300 text-white px-6 py-3 uppercase font-bold tracking-wider transition-colors"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* XX99 MARK I */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 lg:gap-32">
          <div className="md:w-1/2">
            <img 
              src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg" 
              alt="XX99 Mark I Headphones"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4 mb-6">XX99 MARK I HEADPHONES</h2>
            <p className="text-gray-500 mb-8">
              As the gold standard for headphones, the classic XX99 Mark I offers superb audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
            </p>
            <Link 
              to="/product/xx99-mark-one-headphones" 
              className="inline-block bg-orange-500 hover:bg-orange-300 text-white px-6 py-3 uppercase font-bold tracking-wider transition-colors"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        {/* XX59 HEADPHONES */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-32">
          <div className="md:w-1/2">
            <img 
              src="/assets/product-xx59-headphones/desktop/image-product.jpg" 
              alt="XX59 Headphones"
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-4 mb-6">XX59 HEADPHONES</h2>
            <p className="text-gray-500 mb-8">
              Enjoy your audio almost anywhere and adjust it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link 
              to="/product/xx59-headphones" 
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

export default Headphones;