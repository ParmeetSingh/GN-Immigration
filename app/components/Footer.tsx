"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-16"> {/* Increased gap for spacing */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-2 mb-4">Immigration Services</h2>
            <ul className="space-y-2">
              <li><Link href="/work/express" legacyBehavior><a className="hover:text-red-400 transition duration-300">Express Entry</a></Link></li>
              <li><Link href="/work/citizenship" legacyBehavior><a className="hover:text-red-400 transition duration-300">Citizenship</a></Link></li>
              <li><Link href="/work/family" legacyBehavior><a className="hover:text-red-400 transition duration-300">Family Class Sponsorship</a></Link></li>
              <li><Link href="/work/study" legacyBehavior><a className="hover:text-red-400 transition duration-300">Study Permit</a></Link></li>
              <li><Link href="/work/provincial" legacyBehavior><a className="hover:text-red-400 transition duration-300">Provincial Nominee Program</a></Link></li>
              <li><Link href="/work/work-permit" legacyBehavior><a className="hover:text-red-400 transition duration-300">Work Permit</a></Link></li>
              <li><Link href="/work/investors" legacyBehavior><a className="hover:text-red-400 transition duration-300">Investors & Business</a></Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-2 mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link href="/about" legacyBehavior><a className="hover:text-red-400 transition duration-300">About Us</a></Link></li>
              <li><Link href="/why-choose-dodo" legacyBehavior><a className="hover:text-red-400 transition duration-300">Why Choose GN Immigration</a></Link></li>
              <li><Link href="/blog" legacyBehavior><a className="hover:text-red-400 transition duration-300">Blog</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="hover:text-red-400 transition duration-300">Contact Us</a></Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-2 mb-4">Connect</h2>
            <ul className="space-y-2">
              <li><Link href="https://facebook.com/dodoimmigration" legacyBehavior><a className="hover:text-red-400 transition duration-300">Facebook</a></Link></li>
              <li><Link href="https://instagram.com/dodoimmigration" legacyBehavior><a className="hover:text-red-400 transition duration-300">Instagram</a></Link></li>
            </ul>
            <form className="mt-6">
              <h2 className="text-lg font-semibold">Sign up for our newsletter</h2>
              <p className="text-sm mt-1">Get the latest important news and updates from GN Immigration delivered to your inbox.</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-grow rounded-l-lg border border-gray-600 bg-gray-800 py-2 px-4 text-white placeholder-gray-400 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                />
                <button
                  type="submit"
                  className="bg-red-700 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* New Column for Map and Contact Info */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-2 mb-4">Our Location</h2>
            {/* Google Map Embed */}
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1216961204077!2d-79.70847204881031!3d43.70801995489933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3dd87934565f%3A0x42c8dd72a48e2421!2s15%20Ascot%20Ave%2C%20Brampton%2C%20ON%20L6T%202P3!5e0!3m2!1sen!2sca!4v1727755544857!5m2!1sen!2sca"
                width="100%"
                height="250" // Increased height for the map
                style={{ border: 0 }}
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
            {/* <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">Email: info@gnimmigration.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p> */}
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 border-t border-gray-700 pt-6">
          <Link href="/" legacyBehavior>
            <a className="text-lg font-semibold hover:text-red-400 transition duration-300">GN Immigration</a>
          </Link>
          <p className="text-sm text-gray-400">© GN Immigration 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;