
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About G.Makos Engineering & Metalworks</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building strong foundations with expert welding and fabrication services since 2020
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/ourstory.png"
                alt="Our experienced team"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015 by master welder G. Makori, G.Makos Engineering & Metalworks began as a small operation focused on 
                delivering exceptional quality and service to the local community. What started in a modest workshop has grown 
                into a full-service welding and fabrication shop serving industrial, commercial, and residential clients.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to excellence, continuous learning, and investment in the latest technology has made us a 
                trusted partner for projects ranging from simple repairs to complex custom fabrication work.
              </p>
              <p className="text-gray-600">
                Today, we're proud to employ a team of certified welders and fabricators who share our passion for 
                quality craftsmanship and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hammer-line text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Craftsmanship</h3>
              <p className="text-gray-600">
                We take pride in every weld, every cut, and every detail. Our work reflects our commitment to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-heart-line text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Honest communication, fair pricing, and reliable service are the foundation of our relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in new technologies and techniques to deliver better results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our certified professionals bring decades of combined experience to every project
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">GM</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">G Makori</h3>
                    <p className="text-green-400 mb-2">Founder & Master Welder</p>
                    <p className="text-gray-300 text-sm">
                      AWS Certified Welding Inspector with 20+ years experience in structural and architectural welding
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">SJ</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sarah Johnson</h3>
                    <p className="text-green-400 mb-2">Lead Fabricator</p>
                    <p className="text-gray-300 text-sm">
                      Specialized in custom metal fabrication and precision TIG welding for 12 years
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">DT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">David Thompson</h3>
                    <p className="text-green-400 mb-2">Project Manager</p>
                    <p className="text-gray-300 text-sm">
                      Ensures quality control and timely completion of all projects with 15 years industry experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/service.png"
                alt="Our professional team"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-green-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our expertise can bring your vision to life
          </p>
          <Link href="/contact" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 whitespace-nowrap cursor-pointer inline-block">
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
