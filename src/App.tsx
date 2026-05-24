function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================ */}
      {/* HEADER & NAVIGATION */}
      {/* ============================================ */}
      
      {/* Top Utility Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          {/* Contact Details - Left */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">📞</span>
              <span>(406) 555-0120</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">✉️</span>
              <span>example@gmail.com</span>
            </div>
          </div>
          
          {/* Social Media Icons - Right */}
          <div className="flex gap-3">
            <button className="w-7 h-7 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-xs transition">f</button>
            <button className="w-7 h-7 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-xs transition">𝕏</button>
            <button className="w-7 h-7 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-xs transition">p</button>
            <button className="w-7 h-7 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-xs transition">📷</button>
            <button className="w-7 h-7 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-xs transition">▶</button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Row */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Identity - Logo Placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">K</div>
              <span className="font-bold text-xl text-gray-900">KALIANDRA</span>
            </div>
            
            {/* Menu Links - Center */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition font-medium">About Us</a>
              <a href="#vision" className="text-gray-700 hover:text-orange-500 transition font-medium">Vision & Mission</a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 transition font-medium">Products & Services</a>
              <a href="#whychoose" className="text-gray-700 hover:text-orange-500 transition font-medium">Why Choose PT KKSA</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition font-medium">Contact Information</a>
            </div>
            
            {/* Mobile menu button placeholder */}
            <button className="md:hidden text-gray-700">☰</button>
          </div>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main Text */}
          <div>
            {/* Sub-headline with orange line */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-0.5 bg-orange-500"></div>
              <span className="text-orange-600 font-medium tracking-wide">Award-Winning Construction Excellence</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-green-800">Where Innovation Drives</span>
              <br />
              <span className="text-orange-500">Structural Perfection</span>
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
            <div className="absolute left-0 top-0 w-1 h-24 bg-orange-500"></div>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        
        {/* Bottom Section - Media Showcase & Metrics */}
        <div className="mt-16 bg-gray-900 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Featured Image Placeholder */}
            <div className="h-64 md:h-80 bg-gradient-to-r from-green-700 to-orange-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-2">🏗️</div>
                <p className="text-sm">[Image Placeholder - Construction Team]</p>
              </div>
            </div>
            {/* Metrics placeholder */}
            <div className="p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-orange-400 text-sm">PROJECT METRICS PLACEHOLDER</p>
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
            {/* Large Hero Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3">🎬</div>
                <p className="text-gray-600">[Hero Image Placeholder]</p>
              </div>
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
          
          {/* Three-Column Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Residential Construction */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4">
              <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-1">🏠</div>
                  <p className="text-xs">[Image Placeholder]</p>
                </div>
                <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">🏠</div>
              </div>
              <div className="p-5 pt-8">
                <h3 className="text-xl font-bold text-green-800 mb-2">Residential Construction</h3>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                <a href="#" className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
            
            {/* Card 2 - Commercial Construction */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4">
              <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-1">🏢</div>
                  <p className="text-xs">[Image Placeholder]</p>
                </div>
                <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">🏢</div>
              </div>
              <div className="p-5 pt-8">
                <h3 className="text-xl font-bold text-green-800 mb-2">Commercial Construction</h3>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                <a href="#" className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
            
            {/* Card 3 - Renovations and Remodeling */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:border-b-4 hover:border-orange-500 hover:border-r-4">
              <div className="h-40 bg-gradient-to-r from-green-700 to-green-500 relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-5xl mb-1">🔧</div>
                  <p className="text-xs">[Image Placeholder]</p>
                </div>
                <div className="absolute -bottom-6 left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">🔧</div>
              </div>
              <div className="p-5 pt-8">
                <h3 className="text-xl font-bold text-green-800 mb-2">Renovations and Remodeling</h3>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                <a href="#" className="text-green-700 font-medium group-hover:text-orange-500 transition flex items-center gap-1">
                  Learn more <span>→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Section Call-to-Action */}
          <div className="flex justify-center gap-3 mt-12">
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
              View All Services
            </button>
            <button className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center text-white text-xl hover:bg-green-700 transition">
              →
            </button>
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
                <span className="text-green-800">Building Trust,</span>
                <br />
                <span className="text-orange-500">Delivering Excellence</span>
              </h2>
            </div>
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Crane hook graphic placeholder */}
          <div className="flex justify-center mb-8">
            <div className="text-5xl">🏗️</div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Media Showcase - Left */}
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">👷‍♂️👷‍♀️</div>
                <p className="text-gray-600">[Image Placeholder - Team Collaboration]</p>
              </div>
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
              Let's <span className="text-orange-500">Connect</span> there
            </h2>
            <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Directory & Information Grid - Four Columns */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1 - Brand Profile & Socials */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">K</div>
                <span className="font-bold text-white text-xl">KALIANDRA</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-white text-xs transition">f</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-white text-xs transition">𝕏</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-white text-xs transition">p</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-white text-xs transition">📷</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-white text-xs transition">▶</button>
              </div>
            </div>
            
            {/* Column 2 - Navigation Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition">Our Team</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition">Contact Us</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Testimonial</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">FAQs</a></li>
              </ul>
            </div>
            
            {/* Column 3 - Contact Details */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 (000) 000-0000</li>
                <li>✉️ example@gmail.com</li>
                <li>📍 2464 Royal Ln. Mesa, New Jersey 45463</li>
              </ul>
            </div>
            
            {/* Column 4 - Newsletter Subscription */}
            <div>
              <h3 className="text-white font-bold mb-4">Get the latest information</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 px-4 py-2 rounded-l-lg border-none focus:outline-none text-gray-800"
                />
                <button className="w-10 bg-orange-500 rounded-r-lg flex items-center justify-center text-white hover:bg-orange-600 transition">
                  ✉️
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright Bar */}
        <div className="bg-orange-500 py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>Copyright © 2025 KKSA. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">User Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App