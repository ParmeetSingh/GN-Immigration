// components/Navbar.js
"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">GN Immigration</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior><a className="hover:text-gray-300">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:text-gray-300">About</a></Link>
          <Link href="/services" legacyBehavior><a className="hover:text-gray-300">Services</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:text-gray-300">Contact</a></Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-2">
          <Link href="/" legacyBehavior><a className="block hover:bg-red-600 rounded-md px-3 py-2">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="block hover:bg-red-600 rounded-md px-3 py-2">About</a></Link>
          <Link href="/services" legacyBehavior><a className="block hover:bg-red-600 rounded-md px-3 py-2">Services</a></Link>
          <Link href="/contact" legacyBehavior><a className="block hover:bg-red-600 rounded-md px-3 py-2">Contact</a></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
