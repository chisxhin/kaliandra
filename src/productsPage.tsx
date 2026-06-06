import { useState, useEffect } from 'react' 
import { useNavigate, useLocation } from 'react-router-dom'  // Add this import
import logo from './assets/logo.png'

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [sortBy, setSortBy] = useState('featured') 

  // Read category from URL on page load
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const categoryParam = params.get('category')
    
    if (categoryParam) {
      // Decode the category name and set it as active
      const decodedCategory = decodeURIComponent(categoryParam)
      setActiveCategory(decodedCategory)
    }
  }, [location])

  // Handle scrolling when page loads with hash
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  // Navigation handler
  const handleNavigation = (sectionId: string) => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

    // Real KKSA Products
    const products = [
    // PTFE Product - ONLY in Raw Materials & Consumables
    {
        name: 'Dry Film PTFE Release Agent | MS-122AD',
        category: 'Raw Materials & Consumables',
        price: 51.01,
        originalPrice: null,
        discount: null,
        rating: 4.9,
        description: 'High lubricity PTFE fluoropolymer specialized for mold release and dry lubricant applications. A nonflammable, non-ozone depleting carrier solvent / propellant.',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3783?w=300'
    },
    // Combilift Products - ONLY in Machinery, Parts & Equipment
    {
        name: 'Combi-CB Multidirectional Forklift',
        category: 'Machinery, Parts & Equipment',
        price: 45000,
        originalPrice: null,
        discount: null,
        rating: 5.0,
        description: 'Multidirectional forklift for handling long and bulky loads in narrow aisles.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-cb-white-bg.png'
    },
    {
        name: 'Combi-MR4 360 Forklift',
        category: 'Machinery, Parts & Equipment',
        price: 48000,
        originalPrice: null,
        discount: null,
        rating: 4.9,
        description: '360-degree steering forklift for maximum maneuverability.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-mr4-white-bg.png'
    },
    {
        name: 'Combi-SL Sideloading Forklift',
        category: 'Machinery, Parts & Equipment',
        price: 55000,
        originalPrice: null,
        discount: null,
        rating: 4.8,
        description: 'Sideloading forklift for handling long materials like pipes and timber.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-sl-white-bg.png'
    },
    {
        name: 'Aisle Master Articulated Forklift',
        category: 'Machinery, Parts & Equipment',
        price: 38000,
        originalPrice: null,
        discount: null,
        rating: 4.9,
        description: 'Articulated forklift designed for very narrow aisle operations.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/aisle-master-electric-white-bg.png'
    },
    {
        name: 'Combi-WR Pedestrian Stacker',
        category: 'Machinery, Parts & Equipment',
        price: 18000,
        originalPrice: null,
        discount: null,
        rating: 4.7,
        description: 'Pedestrian stacker for light to medium duty applications.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-wr-white-bg.png'
    },
    {
        name: 'Combi-PPT Powered Pallet Truck',
        category: 'Machinery, Parts & Equipment',
        price: 15000,
        originalPrice: null,
        discount: null,
        rating: 4.8,
        description: 'Powered pallet truck for efficient horizontal transport.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-ppt-white-bg.png'
    },
    {
        name: 'Combi-SC Straddle Carrier',
        category: 'Machinery, Parts & Equipment',
        price: 120000,
        originalPrice: null,
        discount: null,
        rating: 5.0,
        description: 'Heavy-duty straddle carrier for container handling.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-sc-white-bg.png'
    },
    {
        name: 'Combi-CSS Container Slip-Sheet Loader',
        category: 'Machinery, Parts & Equipment',
        price: 85000,
        originalPrice: null,
        discount: null,
        rating: 4.9,
        description: 'Specialized container loader for slip-sheet operations.',
        image: 'https://combilift.com/wp-content/uploads/2023/04/combi-css-white-bg.png'
    }
    ]

  // All categories (keeping your original list)
  const categories = [
    'All Products',
    'Machinery, Parts & Equipment',
    'Safety & Personal Protective Equipment',
    'Raw Materials & Consumables',
    'Maintenance, Repair & Operations',
    'Customized Sourcing'
  ]

  // Filter products based on selected category
  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeCategory)

    // Sort products based on selected option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') {
        return a.price - b.price
    } else if (sortBy === 'price-high-low') {
        return b.price - a.price
    }
    return 0 // featured - keep original order
    })

  return (
    <div className="min-h-screen bg-white">
    {/* Navigation Bar */}
    <nav className="bg-gray-900 border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
        {/* Brand Identity */}
        <a 
            href="/" 
            onClick={(e) => {
            e.preventDefault()
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 cursor-pointer"
        >
            <img src={logo} alt="KALIANDRA Logo" className="h-10 w-auto py-2" />
            <span className="font-bold text-xl text-white">KALIANDRA</span>
        </a>
        
        {/* Desktop Menu Links */}
        <div className="hidden min-[900px]:flex gap-6">
            <button
            onClick={() => handleNavigation('about')}
            className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap cursor-pointer"
            >
            About Us
            </button>
            
            <button
            onClick={() => handleNavigation('vision')}
            className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap cursor-pointer"
            >
            Vision & Mission
            </button>
            
            <button
            onClick={() => handleNavigation('products')}
            className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap cursor-pointer"
            >
            Products & Services
            </button>
            
            <button
            onClick={() => handleNavigation('whychoose')}
            className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap cursor-pointer"
            >
            Why Choose Us
            </button>
            
            {/* Contact - stays on Products page */}
            <button
            onClick={() => {
                const footer = document.getElementById('contact')
                footer?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-white hover:text-orange-500 transition font-medium whitespace-nowrap cursor-pointer"
            >
            Contact Information
            </button>
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
            <button
                onClick={() => {
                setIsMenuOpen(false)
                handleNavigation('about')
                }}
                className="text-white hover:text-orange-500 transition font-medium py-2 text-left cursor-pointer"
            >
                About Us
            </button>
            <button
                onClick={() => {
                setIsMenuOpen(false)
                handleNavigation('vision')
                }}
                className="text-white hover:text-orange-500 transition font-medium py-2 text-left cursor-pointer"
            >
                Vision & Mission
            </button>
            <button
                onClick={() => {
                setIsMenuOpen(false)
                handleNavigation('products')
                }}
                className="text-white hover:text-orange-500 transition font-medium py-2 text-left cursor-pointer"
            >
                Products & Services
            </button>
            <button
                onClick={() => {
                setIsMenuOpen(false)
                handleNavigation('whychoose')
                }}
                className="text-white hover:text-orange-500 transition font-medium py-2 text-left cursor-pointer"
            >
                Why Choose Us
            </button>
            <button
                onClick={() => {
                setIsMenuOpen(false)
                const footer = document.getElementById('contact')
                footer?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-white hover:text-orange-500 transition font-medium py-2 text-left cursor-pointer"
            >
                Contact Information
            </button>
            </div>
        </div>
        )}
    </div>
    </nav>

      {/* Page Title Banner */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Products & Services</h1>
        <p className="text-gray-500 mt-3">High-quality industrial solutions for your business needs</p>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Sidebar - Categories */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-green-800 mb-4 border-b pb-2">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`text-left w-full px-3 py-2 rounded-lg transition ${
                        activeCategory === category 
                          ? 'bg-orange-500 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Product Grid */}
          <div className="md:w-3/4">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 text-sm">
                Showing {filteredProducts.length} of {products.length} products
              </p>
                <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-1 text-sm text-gray-600"
                >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                </select>
            </div>

            {/* Coming Soon State - When no products in category */}
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Coming Soon</h3>
                  <p className="text-gray-500">New products are on the way. Check back later!</p>
                </div>
              </div>
            ) : (
              <>
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

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
                <li><a href="/" className="hover:text-orange-500 transition">About Us</a></li>
                <li><a href="/#vision" className="hover:text-orange-500 transition">Vision & Mission</a></li>
                <li><a href="/#products" className="hover:text-orange-500 transition">Products & Services</a></li>
                <li><a href="/#whychoose" className="hover:text-orange-500 transition">Why Choose Us</a></li>
                <li><a href="/#contact" className="hover:text-orange-500 transition">Contact Information</a></li>
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

// Product Card Component
function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Discount Badge - only show if discount exists */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        </div>
      )}
      
      {/* Product Image */}
      <div className="h-48 overflow-hidden relative bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        
        {/* Hover Icons */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 transition">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition">
              ❤️
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition">
              🔍
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition">
              🛒
            </button>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-bold text-gray-800 mt-1 mb-2 text-sm line-clamp-2">{product.name}</h3>
        
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-800">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Description */}
        {product.description && (
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
        )}
      </div>
    </div>
  )
}

export default ProductsPage