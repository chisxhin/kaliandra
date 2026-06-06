import logo from './assets/logo.png'
import cover from './assets/cover.png'
import equipment from './assets/equipment.png'
import safety from './assets/safety.png'
import materials from './assets/materials.png'
import maintenance from './assets/maintenance.png'
import resources from './assets/resources.png'
import teamwork from './assets/teamwork.png'
import vm from './assets/vm.png'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('scrollContainer');
    const rightBtn = document.getElementById('scrollRightBtn');
    
    if (rightBtn && scrollContainer) {
      rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ 
          left: 350,  // Scrolls right by 350px each click
          behavior: 'smooth' 
        });
      });
    }
  }, []);

  // Navigate to products page with category filter
  const navigateToProductsWithCategory = (category: string) => {
    // Encode the category name for URL
    const encodedCategory = encodeURIComponent(category)
    window.location.href = `/products?category=${encodedCategory}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================ */}
      {/* HEADER & NAVIGATION */}
      {/* ============================================ */}
      
      {/* Main Navigation Row */}
      <nav className="bg-gray-900 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Identity */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="KALIANDRA Logo" className="h-10 w-auto py-2" />
              <span className="font-bold text-xl text-white">KALIANDRA</span>
            </div>
            
            {/* Desktop Menu Links - only on large screens */}
            <div className="hidden min-[900px]:flex gap-6">
              <a href="#about" className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap">About Us</a>
              <a href="#vision" className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap">Vision & Mission</a>
              <a href="#products" className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap">Products & Services</a>
              <a href="#whychoose" className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap">Why Choose Us</a>
              <a href="#contact" className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap">Contact Information</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="max-[899px]:block hidden text-white text-2xl focus:outline-none"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="max-[899px]:block hidden py-4 border-t border-gray-700">
              <div className="flex flex-col gap-3 pb-4">
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 transition font-medium py-2"
                >
                  About Us
                </a>
                <a 
                  href="#vision" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 transition font-medium py-2"
                >
                  Vision & Mission
                </a>
                <a 
                  href="#products" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 transition font-medium py-2"
                >
                  Products & Services
                </a>
                <a 
                  href="#whychoose" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 transition font-medium py-2"
                >
                  Why Choose Us
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-orange-500 transition font-medium py-2"
                >
                  Contact Information
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section id="about" className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Main Text */}
            <div>
              {/* Sub-headline with orange line */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-orange-500"></div>
                <span className="text-orange-600 font-medium tracking-wide">Strengthening Your Projects with Integrity</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-green-800">Building on Integrity,</span>
                <br />
                <span className="text-orange-500">Empowering Indonesian Enterprises</span>
              </h1>
              
              {/* Service Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Raw Materials & Consumables</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Machinery, Parts & Equipment</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">PPE</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">MRO</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Customized Sourcing</span>
              </div>
            </div>
            
            {/* Right side - Body Copy with orange accent line */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-3 w-1 h-56 bg-orange-500"></div>
              <p className="text-gray-600 leading-relaxed text-justify">
                A premier supplier company dedicated to providing high-
                quality industrial goods, materials, and solutions to 
                businesses across Indonesia. Founded on the principles of 
                reliability, integrity, and customer-centric service, 
                we are committed to supporting the operational efficiency and 
                success of our clients.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                At PT KKSA, we position ourselves as a strategic partner, meticulously 
                sourcing and delivering products that meet the highest standards of 
                quality and performance. Our goal is to build long-lasting 
                relationships by consistently exceeding expectations and ensuring 
                our clients have the resources they need to thrive.
              </p> 
            </div>
          </div>
          
          {/* Bottom Section - Media Showcase & Metrics */}
          <div className="mt-16">
            <div className="grid md:grid-cols-[67%_30%] gap-6">
              {/* Featured Image Box - 70% */}
              <div className="h-64 md:h-80 bg-gradient-to-r from-green-700 to-orange-500 rounded-xl overflow-hidden">
                <img 
                  src={cover} 
                  alt="Cover image showcasing construction excellence" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Metrics Box - 30% */}
              <div className="bg-gray-900 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold text-orange-400">150+</div>
                  <p className="text-sm">Products Supplied</p>
                  <div className="text-3xl font-bold text-orange-400 mt-4">100%</div>
                  <p className="text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* ============================================ */}
      {/* VISION AND MISSION SECTION */}
      {/* ============================================ */}
      <section id="vision" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-0.5 bg-orange-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-green-800">VISION AND</span>
              <span className="text-orange-500"> MISSION</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
          {/* Large Hero Image */}
          <div className="rounded-2xl overflow-hidden h-full">
            <img 
              src={vm}
              alt="Vision and mission"
              className="w-full h-full object-cover"
            />
          </div>
            
            <div className="space-y-6">
              {/* Vision Card (Navy) */}
              <div className="bg-green-800 rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Vision</h3>
                <p>To become the most trusted and preferred industrial supply partner in Indonesia, renowned for our unwavering commitment to quality, reliability, and the success of the clients we serve.</p>
              </div>
              
              {/* Mission Card (White) */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-green-800 mb-3">Mission</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>To Deliver Excellence</li>
                  <li>To Build Partnerships</li>
                  <li>To Ensure Reliability</li>
                  <li>To Operate with Integrity</li>
                  <li>To Drive Innovation</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Our Core Values - 3 Columns */}
          <div className="text-center mt-16 mb-8">
            <div className="flex justify-center mb-3">
              <div className="w-10 h-0.5 bg-orange-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-green-800">Our Core</span>
              <span className="text-orange-500"> Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">✓</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">We conduct our business with honesty and transparency.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">Providing certified safety equipment to protect your people.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">💡</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Continuously improving processes and expanding offerings.</p>
            </div>
          </div>
        </div>
      </section>

    {/* ============================================ */}
    {/* PRODUCTS AND SERVICES SECTION */}
    {/* ============================================ */}
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <div className="w-10 h-0.5 bg-orange-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-green-800">Services That Fit</span>
            <span className="text-orange-500"> Your Needs</span>
          </h2>
        </div>
        
        {/* Carousel Container with Right Button */}
        <div className="relative">
          {/* Scrollable Container */}
          <div id="scrollContainer" className="overflow-x-auto scroll-smooth hide-scrollbar py-8">
            <div className="flex gap-6 w-max">
              
              {/* Card 1 - Machinery, Parts & Equipment */}
              <div 
                onClick={() => navigateToProductsWithCategory('Machinery, Parts & Equipment')}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4 w-[280px] md:w-[320px] flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative">
                  <img 
                    src={equipment} 
                    alt="Machinery, Parts & Equipment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-20">
                    🏠
                  </div>
                </div>
                <div className="p-5 pt-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Machinery, Parts & Equipment</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Supplying durable machinery and genuine spare parts to ensure operational continuity.</p>
                  <span className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                    Learn more <span>→</span>
                  </span>
                </div>
              </div>
              
              {/* Card 2 - Safety & Personal Protective Equipment */}
              <div 
                onClick={() => navigateToProductsWithCategory('Safety & Personal Protective Equipment')}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4 w-[280px] md:w-[320px] flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative">
                  <img 
                    src={safety} 
                    alt="Safety & Personal Protective Equipment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-20">
                    🛡️
                  </div>
                </div>
                <div className="p-5 pt-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Safety & Personal Protective Equipment</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Providing certified safety equipment to protect your most valuable asset—your people.</p>
                  <span className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                    Learn more <span>→</span>
                  </span>
                </div>
              </div>
              
              {/* Card 3 - Raw Materials & Consumables */}
              <div 
                onClick={() => navigateToProductsWithCategory('Raw Materials & Consumables')}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4 w-[280px] md:w-[320px] flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative">
                  <img 
                    src={materials} 
                    alt="Raw Materials & Consumables" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-20">
                    📦
                  </div>
                </div>
                <div className="p-5 pt-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Raw Materials & Consumables</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Sourcing essential materials required for production processes.</p>
                  <span className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                    Learn more <span>→</span>
                  </span>
                </div>
              </div>
              
              {/* Card 4 - Maintenance, Repair & Operations */}
              <div 
                onClick={() => navigateToProductsWithCategory('Maintenance, Repair & Operations')}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4 w-[280px] md:w-[320px] flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative">
                  <img 
                    src={maintenance} 
                    alt="Maintenance, Repair & Operations" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-20">
                    🔧
                  </div>
                </div>
                <div className="p-5 pt-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Maintenance, Repair & Operations</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Offering a wide array of tools and supplies to keep your facilities running smoothly.</p>
                  <span className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                    Learn more <span>→</span>
                  </span>
                </div>
              </div>
              
              {/* Card 5 - Customized Sourcing */}
              <div 
                onClick={() => navigateToProductsWithCategory('Customized Sourcing')}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4 w-[280px] md:w-[320px] flex-shrink-0 flex flex-col cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative">
                  <img 
                    src={resources} 
                    alt="Customized Sourcing" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg z-20">
                    ⚙️
                  </div>
                </div>
                <div className="p-5 pt-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Customized Sourcing</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">Leveraging our extensive network to source specific or hard-to-find items based on client requirements.</p>
                  <span className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                    Learn more <span>→</span>
                  </span>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Right Arrow Button */}
          <button 
            id="scrollRightBtn"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition shadow-md"
          >
            →
          </button>
        </div>
        
        {/* Section Call-to-Action */}
        <div className="flex justify-center gap-3 mt-12">
          <a 
            href="/products"
            className="px-8 py-3 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US SECTION */}
      {/* ============================================ */}
      <section id="whychoose" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header with top elements */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="w-10 h-0.5 bg-orange-500 mb-3"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-green-800">Why Choose</span>
                <br />
                <span className="text-orange-500">PT KKSA?</span>
              </h2>
            </div>
            <div className="hidden md:block">
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Media Showcase - Left */}
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl h-full min-h-80 overflow-hidden">
              <img 
                src={teamwork} 
                alt="Team Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Core Features Card - Right */}
            <div className="bg-green-800 rounded-2xl p-6 relative">
              <div className="absolute left-0 top-4 w-1 h-24 bg-orange-500"></div>
              <div className="space-y-4 pl-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400 text-xl">✓</span>
                    <h3 className="text-white font-bold">Uncompromising Quality</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Rigorous quality control to ensure every product meets your specifications.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400 text-xl">💰</span>
                    <h3 className="text-white font-bold">Competitive & Transparent Pricing</h3>
                  </div>
                  <p className="text-gray-300 text-sm">Fair market value with no hidden costs.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400 text-xl">🎓</span>
                    <h3 className="text-white font-bold">Expert Support</h3>
                  </div>
                  <p className="text-gray-300 text-sm">A knowledgeable team ready to provide technical advice and product recommendations.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-400 text-xl">🚚</span>
                    <h3 className="text-white font-bold">Efficient Logistics</h3>
                  </div>
                  <p className="text-gray-300 text-sm">A streamlined process from order to delivery, minimizing downtime for your operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT INFORMATION / FOOTER */}
      {/* ============================================ */}
      <footer id="contact" className="bg-green-900">
        {/* Top Call-to-Action Row */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 border-b border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Let’s <span className="text-orange-500">Connect</span> here
            </h2>
            <a 
              href="mailto:info.kksa@gmail.com?subject=Inquiry%20from%20KKSA%20Website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition inline-block text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Directory & Information Grid Columns */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-gray-400">
          <div className="grid md:grid-cols-[1.5fr_1fr_2fr] gap-8">
            {/* Column 1 - Brand Profile & Socials */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="KALIANDRA Logo" className="h-8 w-auto" />
                <span className="font-bold text-white text-xl">KALIANDRA</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">A premier Indonesian industrial supplier of high-quality goods and solutions, committed to integrity, customer satisfaction, and operational efficiency.</p>
            </div>
            
            {/* Column 2 - Navigation Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#vision" className="hover:text-orange-500 transition">Vision & Mission</a></li>
                <li><a href="#products" className="hover:text-orange-500 transition">Products & Services</a></li>
                <li><a href="#whychoose" className="hover:text-orange-500 transition">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition">Contact Information</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Contact Details */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                {/* Phone Row */}
                <div className="grid grid-cols-[30px_1fr] gap-2">
                  <span className="text-gray-400">📞</span>
                  <span className="text-gray-400 text-sm">(+62) 8119620105</span>
                </div>
                
                {/* Email Row */}
                <div className="grid grid-cols-[30px_1fr] gap-2">
                  <span className="text-gray-400">✉️</span>
                  <span className="text-gray-400 text-sm">info.kksa@gmail.com</span>
                </div>
                
                {/* Address Row */}
                <div className="grid grid-cols-[30px_1fr] gap-2">
                  <span className="text-gray-400">📍</span>
                  <span className="text-gray-400 text-sm">Ruko Kunciran Pinang Jl. KH. Mas Mansur No. 18 RT.004 RW.012, Kunciran, Pinang, Kota Tangerang, Banten, 15144</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Bottom Copyright Bar */}
        <div className="bg-orange-500 py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>Copyright © 2026 KKSA. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App