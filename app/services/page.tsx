'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Metal Doors & Gates",
      description: "Secure and stylish steel doors and gates, custom-built for your safety and aesthetics.",
      icon: "ri-door-line",
      features: ["Security Doors", "Sliding & Folding Doors", "Decorative Gates", "Patio & Entry Doors"]
    },
    {
      title: "Window Grills & Railings",
      description: "Beautifully crafted window grills and balcony railings designed for safety and elegance.",
      icon: "ri-window-2-line",
      features: ["Burglar-Proof Grills", "Balcony Railings", "Stair Railings", "Custom Window Frames"]
    },
    {
      title: "Metal Bed Frames & Furniture",
      description: "Heavy-duty and stylish metal beds and furniture designed for lasting comfort and support.",
      icon: "ri-hotel-bed-line",
      features: ["Custom Bed Frames", "Headboards & Footboards", "Steel Furniture", "Modern & Classic Designs"]
    },
    {
      title: "Custom Metal Fabrication",
      description: "We fabricate any metal item to your design — from partitions to display units and furniture.",
      icon: "ri-tools-line",
      features: ["Shop Fronts", "Display Racks", "Partition Frames", "Tailored Metal Solutions"]
    },
    {
      title: "Repair & Maintenance",
      description: "Welding repair and restoration of metal doors, gates, grills, and furniture on demand.",
      icon: "ri-settings-3-line",
      features: ["Welding Repairs", "Surface Refinishing", "Part Replacement", "On-Site Maintenance"]
    },
    {
      title: "Mobile Welding Services",
      description: "Bringing expert welding to your location — fast, reliable, and tailored to your needs.",
      icon: "ri-truck-line",
      features: ["Emergency Door Fixes", "On-Site Installation", "Quick Response Repairs", "Construction Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive welding and fabrication services for residential and commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-green-600 text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine traditional craftsmanship with modern technology to deliver superior results
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-award-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                    <p className="text-gray-600">All our welders are AWS certified with extensive experience in their specialties.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-time-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                    <p className="text-gray-600">Efficient project management ensures your work is completed on time and within budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-shield-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties and quality assurance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-phone-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">Round-the-clock availability for urgent repairs and emergency situations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/welding.png"
                alt="Professional welding services in action"
                className="rounded-xl shadow-lg w-full h-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial consultation to project completion, we ensure a smooth and professional experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Consultation</h3>
              <p className="text-gray-300">
                We discuss your project requirements, timeline, and budget to develop the best solution.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Planning</h3>
              <p className="text-gray-300">
                Detailed project planning, material selection, and scheduling to ensure smooth execution.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Execution</h3>
              <p className="text-gray-300">
                Professional execution by our certified team using the latest equipment and techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Check</h3>
              <p className="text-gray-300">
                Thorough quality inspection and testing to ensure all work meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need a Custom Quote?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us for a personalized consultation and detailed quote.
          </p>
          <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 whitespace-nowrap cursor-pointer inline-block">
            Request Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
