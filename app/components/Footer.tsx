"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <Link href="/">
              <span className="text-gray-300 hover:text-white">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-300 hover:text-white">About</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-300 hover:text-white">Services</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-300 hover:text-white">Contact</span>
            </Link>
          </div>
          <div className="text-gray-300">&copy; {new Date().getFullYear()} My Company</div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link href="https://facebook.com">
            <span className="text-gray-300 hover:text-white">Facebook</span>
          </Link>
          <Link href="https://twitter.com">
            <span className="text-gray-300 hover:text-white">Twitter</span>
          </Link>
          <Link href="https://linkedin.com">
            <span className="text-gray-300 hover:text-white">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
