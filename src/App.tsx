import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">PT Kaliandra Karunia Sentosa Abadi (PT KKSA)</h1>
        <p className="text-xl italic">Your Trusted Partner in Industrial Supply</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PT Kaliandra Karunia Sentosa Abadi (KKSA) is a premier supplier company dedicated to providing high-quality industrial goods, materials, and solutions to businesses across Indonesia. Founded on the principles of reliability, integrity, and customer-centric service, we are committed to supporting the operational efficiency and success of our clients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand that in a competitive industrial landscape, a dependable supply chain is not just an advantage—it is a necessity. At PT KKSA, we position ourselves as a strategic partner, meticulously sourcing and delivering products that meet the highest standards of quality and performance. Our goal is to build long-lasting relationships by consistently exceeding expectations and ensuring our clients have the resources they need to thrive.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Vision & Mission</h2>
          <h3 className="text-xl font-medium text-blue-800 mb-2">Vision</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To become the most trusted and preferred industrial supply partner in Indonesia, renowned for our unwavering commitment to quality, reliability, and the success of the clients we serve.
          </p>

          <h3 className="text-xl font-medium text-blue-800 mb-2">Mission</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>To Deliver Excellence:</strong> Consistently source and deliver superior quality industrial products that meet and exceed industry standards.</li>
            <li><strong>To Build Partnerships:</strong> Cultivate strong, long-term relationships with our clients by understanding their unique needs and providing tailored, value-added solutions.</li>
            <li><strong>To Ensure Reliability:</strong> Guarantee timely and efficient delivery through streamlined logistics and robust supply chain management.</li>
            <li><strong>To Operate with Integrity:</strong> Uphold the highest standards of professionalism, transparency, and ethical conduct in all business dealings.</li>
            <li><strong>To Drive Innovation:</strong> Continuously improve our processes and expand our product offerings to adapt to the evolving needs of the industrial sector.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Our Core Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency. Trust is the foundation of everything we do.</li>
            <li><strong>Customer-Centric:</strong> Our clients' success is our success. We listen, we understand, and we deliver.</li>
            <li><strong>Reliability:</strong> We are committed to being a dependable partner. We do what we say we will do, on time, every time.</li>
            <li><strong>Quality:</strong> We provide only products and services that we are proud to stand behind.</li>
            <li><strong>Partnership:</strong> We work collaboratively with our clients, suppliers, and team to achieve mutual growth and success.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Products & Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Raw Materials & Consumables:</strong> Sourcing essential materials required for production processes.</li>
            <li><strong>Machinery, Parts & Equipment:</strong> Supplying durable machinery and genuine spare parts to ensure operational continuity.</li>
            <li><strong>Safety & Personal Protective Equipment (PPE):</strong> Providing certified safety equipment to protect your most valuable asset—your people.</li>
            <li><strong>Maintenance, Repair, and Operations (MRO):</strong> Offering a wide array of tools and supplies to keep your facilities running smoothly.</li>
            <li><strong>Customized Sourcing:</strong> Leveraging our extensive network to source specific or hard-to-find items based on client requirements.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Why Choose PT KKSA?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Uncompromising Quality:</strong> Rigorous quality control to ensure every product meets your specifications.</li>
            <li><strong>Competitive & Transparent Pricing:</strong> Fair market value with no hidden costs.</li>
            <li><strong>Expert Support:</strong> A knowledgeable team ready to provide technical advice and product recommendations.</li>
            <li><strong>Efficient Logistics:</strong> A streamlined process from order to delivery, minimizing downtime for your operations.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> [Your Company Address]</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> [Your Company Phone Number]</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> [Your Company Email Address]</p>
          <p className="text-gray-700"><strong>Website:</strong> [Your Company Website]</p>
        </section>
      </div>

      <footer className="bg-blue-900 text-white text-center py-4 text-sm">
        <p>&copy; 2026 PT Kaliandra Karunia Sentosa Abadi. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
