'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Products() {
  const productCategories = [
    {
      title: "Metal Doors",
      description: "Secure and stylish steel doors built for both security and beauty",
      image: "/images/metal-door.png",
      products: [
        { name: "Double Security Door – Classic Black", price: "", features: ["Reinforced Frame", "Wrought Iron Grills", "Weather-Resistant Paint"] },
        { name: "Single Entry Door – Red Oxide", price: "", features: ["Heavy-Duty Hinges", "Powder-Coated Finish", "Decorative Mesh Design"] }
      ]
    },
    {
      title: "Steel Beds",
      description: "Durable metal beds with stylish frames designed for strength and comfort",
      image: "/images/steel-bed.png",
      products: [
        { name: "5x6 Modern Steel Bed", price: "", features: ["Powder-Coated Frame", "Noiseless Design", "Easy Assembly"] },
        { name: "4x6 Classic Black Bed", price: "", features: ["High Headboard", "Sturdy Welds", "Mattress Support Rails"] }
      ]
    },
    {
      title: "Metal Gates",
      description: "Custom metal gates for homes, compounds, and commercial properties",
      image: "/images/metal-gate.png",
      products: [
        { name: "Sliding Gate – Mesh Style", price: "", features: ["Sliding Rails Included", "Galvanized Steel", "Security Lock Frame"] },
        { name: "Double Swing Gate – Grid Frame", price: "", features: ["Rust-Proof Finish", "Heavy-Duty Hinges", "Gate Stoppers"] }
      ]
    },
    {
      title: "Window Grills",
      description: "Protective and decorative window grills handcrafted for every window size",
      image: "/images/window-grill.jpeg",
      products: [
        { name: "Square Bar Grill", price: "", features: ["Anti-Rust Coating", "Custom Sizes Available",] },
      ]
    },
    {
      title: "Safety Railings",
      description: "Essential metal railings engineered for safety and support on stairs in any building. Durable construction meets elegant design.",
      image: "/images/railings.png",
      products: [
        { name: "Modern Exterior Railing", price: "", features: ["Brushed Stainless Steel", "Vertical Baluster Design", "Code Compliant Spacing"] },
        { name: "Industrial Style Railing", price: "", features: ["Heavy-Duty Steel", "Matte Black Finish", "Secure Wall Mount"] }
      ]
    },
    {
      title: "Furniture Frames",
      description: "Custom metal frames for chairs, tables, shelves, and more",
      image: "/images/furniture-frame.png",
      products: [
        { name: "Dining Table Frame – 6 Seater", price: "", features: ["Black Coated", "Rectangular Design", "Welded Corners"] },
        { name: "Metal Shelf Frame – 5 Tier", price: "", features: ["Steel Tubing", "Wall Mountable", "Matte Finish"] },
        { name: "Industrial Style Chair Frame", price: "", features: ["Heavy Gauge Steel", "Distressed Finish", "Reinforced Joints"] },
        { name: "Modern Coffee Table Base", price: "", features: ["Polished Chrome", "Geometric Design", "Floor Protectors"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Durable, locally crafted metalwork from doors to gates, made for lasting strength and security
            </p>
          </div>
          
          <div className="space-y-20">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="rounded-xl shadow-lg w-full h-full object-contain object-top"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">{category.description}</p>
                    
                    <div className="space-y-6">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="border-b border-gray-100 pb-6 last:border-b-0">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            <span className="text-xl font-bold text-green-600">{product.price}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Buy From Us?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We don't just sell products - we provide complete solutions backed by expertise and support
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-medal-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Brands</h3>
                    <p className="text-gray-600">We partner with industry leaders for quality you can trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-customer-service-2-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Our experienced team helps you choose the right equipment for your specific needs and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-tools-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service & Support</h3>
                    <p className="text-gray-600">Comprehensive warranty support, repairs, and maintenance services for all equipment purchased.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-truck-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Quick delivery options available with local pickup and regional shipping services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/products.png"
                alt="Expert customer service"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Upgrade Your Equipment?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your equipment needs and get personalized recommendations
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
