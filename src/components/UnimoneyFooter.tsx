'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function UnimoneyFooter() {
  return (
    <footer className="bg-gray-900 text-white py-24 mt-20">
      <div className="container px-4">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="text-2xl font-bold">ScentMatch</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-base mb-8">
              Discover luxury fragrances for less. Compare, save, and smell amazing.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  Compare Dupes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-6 text-base">
              Get the latest dupe discoveries and fragrance tips.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-5 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition-colors text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-800 pt-10">
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-base">
              © {new Date().getFullYear()} ScentMatch. All rights reserved.
            </p>
            
            <div className="flex gap-8 text-base">
              <Link href="/disclaimer" className="text-gray-400 hover:text-purple-400 transition-colors">
                Disclaimer
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-purple-400 transition-colors">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-purple-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 p-8 bg-gray-800 rounded-2xl"
          >
            <p className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Disclaimer:</strong> ScentMatch is an independent comparison platform. We are not affiliated with any designer fragrance brands mentioned on this site. All brand names and trademarks are the property of their respective owners. Our comparisons are based on community reviews and independent testing. Individual experiences may vary. Always test fragrances before purchasing.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
