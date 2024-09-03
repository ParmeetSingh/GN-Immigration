// components/Footer.js
"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Immigration Services</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/work/express" legacyBehavior><a className="hover:text-red-700">Express Entry</a></Link></li>
              <li><Link href="/work/citizenship" legacyBehavior><a className="hover:text-red-700">Citizenship</a></Link></li>
              <li><Link href="/work/family" legacyBehavior><a className="hover:text-red-700">Family Class Sponsorship</a></Link></li>
              <li><Link href="/work/study" legacyBehavior><a className="hover:text-red-700">Study Permit</a></Link></li>
              <li><Link href="/work/provincial" legacyBehavior><a className="hover:text-red-700">Provincial Nominee Program</a></Link></li>
              <li><Link href="/work/work-permit" legacyBehavior><a className="hover:text-red-700">Work Permit</a></Link></li>
              <li><Link href="/work/investors" legacyBehavior><a className="hover:text-red-700">Investors & Business</a></Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" legacyBehavior><a className="hover:text-red-700">About Us</a></Link></li>
              <li><Link href="/why-choose-dodo" legacyBehavior><a className="hover:text-red-700">Why Choose GN Immigration</a></Link></li>
              <li><Link href="/blog" legacyBehavior><a className="hover:text-red-700">Blog</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="hover:text-red-700">Contact Us</a></Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Connect</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="https://facebook.com/dodoimmigration" legacyBehavior><a className="hover:text-red-700">Facebook</a></Link></li>
              <li><Link href="https://instagram.com/dodoimmigration" legacyBehavior><a className="hover:text-red-700">Instagram</a></Link></li>
            </ul>
            <form className="mt-6">
              <h2 className="text-xl font-bold">Sign up for our newsletter</h2>
              <p className="text-sm mt-2">Get the latest important news and updates from GN Immigration delivered to your inbox.</p>
              <div className="relative mt-4">
                <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-gray-300 bg-gray-900 py-2 px-4 text-white placeholder-gray-500 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50" />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-8">
          <Link href="/" legacyBehavior>
            <a className="text-lg font-semibold">GN Immigration</a>
          </Link>
          <p className="text-sm text-gray-500">© GN Immigration 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
