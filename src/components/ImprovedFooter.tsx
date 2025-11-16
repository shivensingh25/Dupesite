'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, Heart, Sparkles, Send, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ImprovedFooter() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'Women\'s Fragrances', href: '/category/women' },
      { label: 'Men\'s Fragrances', href: '/category/men' },
      { label: 'Unisex Scents', href: '/category/unisex' },
      { label: 'Best Sellers', href: '/best-sellers' },
      { label: 'New Arrivals', href: '/new' },
    ],
    compare: [
      { label: 'Compare Dupes', href: '/compare' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Accuracy Guide', href: '/accuracy' },
      { label: 'Brand Directory', href: '/brands' },
      { label: 'Note Dictionary', href: '/notes' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns Policy', href: '/returns' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/story' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
      { label: 'Affiliate Program', href: '/affiliate' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', gradient: 'from-purple-600 to-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', gradient: 'from-blue-400 to-blue-600' },
    { icon: Facebook, href: '#', label: 'Facebook', gradient: 'from-blue-600 to-indigo-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                Never Miss a New Dupe
              </h3>
              <p className="text-gray-400">
                Get weekly updates on the latest designer perfume alternatives and exclusive deals.
              </p>
            </div>
            <div>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Join 50,000+ fragrance enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ScentMatch
                </h2>
                <p className="text-xs text-gray-400">Find Your Perfect Dupe</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your trusted source for finding high-quality perfume alternatives. Compare scents, save money, and discover your signature fragrance without breaking the bank.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, gradient }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:shadow-lg border border-gray-700 hover:border-transparent flex items-center justify-center transition-all group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
              Compare
            </h4>
            <ul className="space-y-3">
              {footerLinks.compare.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 border-t border-b border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Designer Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-1">2,000+</div>
              <div className="text-sm text-gray-400">Verified Dupes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">50K+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">4.8★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by ScentMatch Team
              </p>
              <p className="mt-1">
                © {currentYear} ScentMatch. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Payment & Security */}
        <div className="pb-8 text-center">
          <p className="text-xs text-gray-500 mb-3">Secure payments powered by</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'].map((payment) => (
              <div
                key={payment}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-xs font-semibold text-gray-400"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
