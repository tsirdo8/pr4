import React from 'react';

const CategoryLinks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-8 py-16 gap-16 md:gap-8 lg:gap-12 mt-24 lg:mt-32 xl:gap-16">
      {/* Headphones */}
      <div className="bg-gray-100 rounded-lg pt-32 pb-10 px-8 flex flex-col items-center relative flex-1 min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
        <div className="absolute -top-20 lg:-top-24 xl:-top-28 w-full flex justify-center">
          <img 
            src="/../assets/shared/desktop/image-category-thumbnail-headphones.png" 
            alt="Headphones" 
            className="h-44 md:h-48 lg:h-56 xl:h-64 2xl:h-72 object-contain"
          />
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider uppercase mb-6">HEADPHONES</h3>
        <a 
          href="/headphones" 
          className="text-base lg:text-lg font-bold text-black opacity-50 hover:opacity-100 hover:text-orange-500 flex items-center gap-2 transition-all"
        >
          SHOP <span className="text-orange-500 font-bold text-lg lg:text-xl">&gt;</span>
        </a>
      </div>

      {/* Speakers */}
      <div className="bg-gray-100 rounded-lg pt-32 pb-10 px-8 flex flex-col items-center relative flex-1 min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
        <div className="absolute -top-20 lg:-top-24 xl:-top-28 w-full flex justify-center">
          <img 
            src="/../assets/shared/desktop/image-category-thumbnail-speakers.png" 
            alt="Speakers" 
            className="h-44 md:h-48 lg:h-56 xl:h-64 2xl:h-72 object-contain"
          />
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider uppercase mb-6">SPEAKERS</h3>
        <a 
          href="/speakers" 
          className="text-base lg:text-lg font-bold text-black opacity-50 hover:opacity-100 hover:text-orange-500 flex items-center gap-2 transition-all"
        >
          SHOP <span className="text-orange-500 font-bold text-lg lg:text-xl">&gt;</span>
        </a>
      </div>

      {/* Earphones */}
      <div className="bg-gray-100 rounded-lg pt-32 pb-10 px-8 flex flex-col items-center relative flex-1 min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
        <div className="absolute -top-20 lg:-top-24 xl:-top-28 w-full flex justify-center">
          <img 
            src="/../assets/shared/desktop/image-category-thumbnail-earphones.png" 
            alt="Earphones" 
            className="h-44 md:h-48 lg:h-56 xl:h-64 2xl:h-72 object-contain"
          />
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider uppercase mb-6">EARPHONES</h3>
        <a 
          href="/earphones" 
          className="text-base lg:text-lg font-bold text-black opacity-50 hover:opacity-100 hover:text-orange-500 flex items-center gap-2 transition-all"
        >
          SHOP <span className="text-orange-500 font-bold text-lg lg:text-xl">&gt;</span>
        </a>
      </div>
    </div>
  );
};

export default CategoryLinks;