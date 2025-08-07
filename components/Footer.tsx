
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <i className="ri-fire-line text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">G.Makos Engineering & Metalworks</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional welding services and quality products for industrial, commercial, and residential projects. 
              Over 10 years of experience in metal fabrication and repair.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-instagram-line text-white"></i>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:bg-green-600">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white cursor-pointer">Services</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white cursor-pointer">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-green-600"></i>
                </div>
                <span className="text-gray-400 text-sm">Opp Kakoi Apartments, Mlolongo, Phase 3</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-green-600"></i>
                </div>
                <span className="text-gray-400 text-sm">+254 757 407 948</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-green-600"></i>
                </div>
                <span className="text-gray-400 text-sm">info@gmakosengineering.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 G.Makos Engineering & Metalworks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
