import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <header className="flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-6 md:py-8 bg-black bg-opacity-50">
        {/* Burger Menu for Mobile */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <img 
            src={isMenuOpen 
              ? "/assets/shared/tablet/icon-close-menu.svg" 
              : "/assets/shared/tablet/icon-hamburger.svg"
            } 
            alt="Menu" 
            className="w-6 h-6"
          />
        </button>

        {/* Logo - Centered on mobile */}
        <Link 
          to="/" 
          className={`text-3xl sm:text-4xl font-bold text-white hover:text-orange-500 transition-colors ${
            isMenuOpen ? 'opacity-0 md:opacity-100' : ''
          }`}
        >
          audiophile
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <li>
              <Link 
                to="/" 
                className="font-bold text-sm sm:text-base leading-[25px] tracking-[3px] uppercase text-white hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/headphones" 
                className="font-bold text-sm sm:text-base leading-[25px] tracking-[3px] uppercase text-white hover:text-orange-500 transition-colors"
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link 
                to="/speakers" 
                className="font-bold text-sm sm:text-base leading-[25px] tracking-[3px] uppercase text-white hover:text-orange-500 transition-colors"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link 
                to="/earphones" 
                className="font-bold text-sm sm:text-base leading-[25px] tracking-[3px] uppercase text-white hover:text-orange-500 transition-colors"
              >
                Earphones
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Cart */}
        <div className="cart">
          <Link to="/cart">
            <img 
              src="/assets/shared/desktop/icon-cart.svg" 
              alt="Shopping Cart" 
              className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-70 transition-opacity filter brightness-0 invert"
            />
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
            <div className="absolute top-24 left-0 right-0 bg-white p-12 flex flex-col gap-8">
              <Link 
                to="/" 
                className="font-bold text-lg uppercase text-black hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/headphones" 
                className="font-bold text-lg uppercase text-black hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Headphones
              </Link>
              <Link 
                to="/speakers" 
                className="font-bold text-lg uppercase text-black hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </Link>
              <Link 
                to="/earphones" 
                className="font-bold text-lg uppercase text-black hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Earphones
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Nav;