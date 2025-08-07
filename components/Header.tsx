
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    document.body.classList.add('page-exit');
    setTimeout(() => {
      router.push(href);
    }, 200);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <i className="ri-fire-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-gray-900">G.Makos Engineering & Metalworks</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/products')}
              className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium whitespace-nowrap cursor-pointer transition-all duration-200"
            >
              Contact Us
            </button>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slideDown">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-gray-700 hover:text-green-600 font-medium cursor-pointer text-left transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-gray-700 hover:text-green-600 font-medium cursor-pointer text-left transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/services')}
                className="text-gray-700 hover:text-green-600 font-medium cursor-pointer text-left transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/products')}
                className="text-gray-700 hover:text-green-600 font-medium cursor-pointer text-left transition-colors duration-200"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium whitespace-nowrap cursor-pointer transition-all duration-200 text-left"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
