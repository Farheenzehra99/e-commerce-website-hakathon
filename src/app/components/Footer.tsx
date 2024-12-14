// 'use client';

// import React, { useState } from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// function Footer() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendEmail = () => {
//     if (!email.includes("@")) {
//       setMessage("❌ Please enter a valid email address.");
//     } else {
//       setMessage("✅ You have successfully subscribed!");
//     }
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="bg-gray-100 py-16 text-gray-600">
//       <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//         {/* First Section */}
//         <div>
//           <h1 className="text-[#151875] text-3xl font-bold mb-4">Hekto</h1>
//           <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//               className="w-full px-3 py-2 text-sm outline-none"
//             />
//             <button
//               onClick={handleSendEmail}
//               className="bg-[#FB2E86] text-white px-4 py-2 text-sm font-medium hover:bg-pink-700 transition-colors"
//             >
//               Sign Up
//             </button>
//           </div>
//           {message && (
//             <p className={`mt-2 text-sm ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
//               {message}
//             </p>
//           )}
//           <p className="mt-4 text-gray-500">Contact Info</p>
//           <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
//         </div>

//         {/* Second Section */}
//         <div>
//           <h2 className="text-[#151875] text-xl font-semibold mb-4">Categories</h2>
//           <ul className="space-y-2">
//             <li>Laptops & Computers</li>
//             <li>Cameras & Photography</li>
//             <li>Smart Phones & Tablets</li>
//             <li>Video Games & Consoles</li>
//             <li>Waterproof Headphones</li>
//           </ul>
//         </div>

//         {/* Third Section */}
//         <div>
//           <h2 className="text-[#151875] text-xl font-semibold mb-4">Customer Care</h2>
//           <ul className="space-y-2">
//             <li>My Account</li>
//             <li>Discount</li>
//             <li>Returns</li>
//             <li>Order History</li>
//             <li>Order Tracking</li>
//           </ul>
//         </div>

//         {/* Fourth Section */}
//         <div>
//           <h2 className="text-[#151875] text-xl font-semibold mb-4">Pages</h2>
//           <ul className="space-y-2">
//             <li>Blog</li>
//             <li>Browse the Shop</li>
//             <li>Category</li>
//             <li>Pre-Built Pages</li>
//             <li>Visual Composer Elements</li>
//             <li>WooCommerce Pages</li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 border-t border-gray-200 pt-8">
//         <div className="flex justify-between items-center w-[90%] mx-auto">
//           <p className="text-gray-500">&copy; Webecy - All Rights Reserved. Muqaddas Fatima</p>
//           <div className="flex space-x-4">
//             <a href="https://github.com/MuqaddasFatima24" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
//               <FaFacebookF />
//             </a>
//             <a href="@muqadas_fatima25" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
//               <FaTwitter />
//             </a>
//             <a href="@muqadas_fatima25" className="w-8 h-8 rounded-full bg-[#151875] flex items-center justify-center text-white hover:bg-blue-700">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from 'react'
import {FaFacebook, FaGithub} from 'react-icons/fa'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'
import Link from "next/link"

function Footer() {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-[#E7E4F8]">
  <div className="container px-5 py-24 mx-auto   ">
    <div className="flex flex-wrap md:text-left text-center order-first">


    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Hekto
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
            </label>
            <input
              type="text"
              id="footer-field"
              placeholder='Enter Email Address'
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py- px-5 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-600 border-0 py-1 px-5 focus:outline-none hover:bg-red-600 ">
            Sign-Up
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
        Contact Info
          <br className="lg:block hidden" />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-wide text-lg mb-3 ml-6">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800  ml-6">Laptops & Computers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ml-6">Cameras & Photography</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ml-6">Smart Phones & Tablets</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ml-6">Video Games & Consoles</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800 ml-6">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Customer Care
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">My Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discount</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Returns</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Orders History</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Pages
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Browse the Shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Category</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Pre-Built Pages</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Visual Composer Elements</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">WooCommerce Pages</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-[#E7E4F8]">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2024 farheen zehra —
        <a
          href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @Right Reserved
         </a> 
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='blank' href={"https://www.facebook.com/profile.php?id=61552506270420"} className="text-gray-900">
      <FaFacebook className='text-3xl ' />
      </Link>

      <Link
      target='blank' href={"https://vercel.com/farheenzehra99s-projects"} className="ml-3 text-gray-900">
      <IoLogoVercel className='text-3xl' />
      </Link>
      
      <Link
      target='blank' href={"https://www.linkedin.com/in/syeda-farheen-zehra-648459268/"} className="ml-3 text-gray-900">
        <FaLinkedin className='text-3xl ' />
      </Link>
    </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer;