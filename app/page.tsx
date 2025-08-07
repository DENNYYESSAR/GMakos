
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-screen flex items-center justify-center bg-cover bg-center"
               style={{backgroundImage: `url('/images/home.png')`}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Welding <span className="text-green-600">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expert metal fabrication, repair services, and quality welding products for all your industrial and residential needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 whitespace-nowrap cursor-pointer">
              Our Services
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose G.Makos Engineering & Metalworks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 10 years of experience, we deliver exceptional welding services and products that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assured</h3>
              <p className="text-gray-600">
                Every project meets the highest industry standards with certified welders and premium materials
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick project completion without compromising quality, meeting your deadlines every time
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Professional consultation and ongoing support for all your welding and fabrication needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-xl text-gray-600 mb-8">
                From custom fabrication to repair services, we handle projects of all sizes with precision and expertise
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Custom Metal Fabrication</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Structural Steel Welding</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Repair & Maintenance</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Mobile Welding Services</span>
                </div>
              </div>
              
              <Link href="/services" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap cursor-pointer inline-block">
                View All Services
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="/images/welding.png"
                alt="Professional welding services"
                className="rounded-xl shadow-lg w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/images/metal-door.png"
                alt="Welding products and equipment"
                className="rounded-xl shadow-lg w-full h-full object-cover object-top"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">Quality Products</h2>
              <p className="text-xl text-gray-300 mb-8">
                Browse our selection of professional-grade welding products and equipment designed for durability and performance
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300 font-medium">Window Grills</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300 font-medium">Metal Gates & Doors</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300 font-medium">Furniture Frames</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-300 font-medium">Safety Railings</span>
                </div>
              </div>
              
              <Link href="/products" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap cursor-pointer inline-block">
                Shop Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your welding and fabrication needs
          </p>
          <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 whitespace-nowrap cursor-pointer inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
