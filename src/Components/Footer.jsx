import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c30] text-white py-10 px-6 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Left: Contact Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-lg">+123 456 7890</p>
          <p className="text-lg">contact@yourtravelblog.com</p>

          <h3 className="mt-6 text-xl font-semibold">Stay Updated on Travel Stories</h3>
          <p className="text-gray-300">Subscribe to get the latest travel guides and tips!</p>
          
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-gray-900"
            />
            <button className="mt-3 bg-blue-600 text-black font-semibold px-5 py-2 rounded-md w-full">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Have Questions?</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name *" className="p-3 w-full rounded-md text-white border border-gray-500" />
            <input type="text" placeholder="Last Name *" className="p-3 w-full rounded-md text-white border border-gray-500" />
            <input type="email" placeholder="Email *" className="p-3 w-full rounded-md text-white col-span-2 border border-gray-500" />
            <textarea placeholder="Your Message *" className="p-3 w-full rounded-md text-white col-span-2 h-24 border border-gray-500"></textarea>
            <button className="col-span-2 mt-2 bg-blue-600 text-black font-semibold px-5 py-2 rounded-md w-full">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-10">
        © {new Date().getFullYear()} Your Travel Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
