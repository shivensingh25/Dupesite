'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, Heart, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MinimalFooter() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Women's Fragrances", href: '/category/women' },
      { label: "Men's Fragrances", href: '/category/men' },
      { label: 'Unisex Scents', href: '/category/unisex' },
      { label: 'Best Sellers', href: '/best-sellers' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#1E1E1E] text-white">
      
      {/* Newsletter Section */}
      <div className="border-b border-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Never Miss a New Dupe</h3>
              <p className="text-[#9E9E9E]">
                Get weekly updates on the latest designer perfume alternatives
              </p>
            </div>
            <div>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A5A5A]" strokeWidth={1.5} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-[#2D2D2D] border border-[#3D3D3D] rounded-xl text-white placeholder-[#5A5A5A] focus:outline-none focus:border-[#5A5A5A] transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-white text-[#1E1E1E] font-semibold hover:bg-[#FAF9F6] transition-all flex items-center gap-2"
                >
                  Subscribe
                  <Send className="w-4 h-4" strokeWidth={2} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F7E9EF] to-[#EEE8F7] flex items-center justify-center">
                <span className="text-[#1E1E1E] text-xl font-semibold">S</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold">ScentMatch</h2>
                <p className="text-xs text-[#9E9E9E]">Find Your Perfect Dupe</p>
              </div>
            </Link>
            <p className="text-[#9E9E9E] text-sm mb-6 leading-relaxed">
              Your trusted source for finding high-quality perfume alternatives.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#2D2D2D] hover:bg-[#3D3D3D] border border-[#3D3D3D] flex items-center justify-center transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-[#9E9E9E]" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#FAF9F6]">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#9E9E9E] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#FAF9F6]">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#9E9E9E] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#FAF9F6]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#9E9E9E] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#9E9E9E]">
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-[#F7E9EF] fill-current" strokeWidth={0} /> by ScentMatch
            </p>
            <p>© {currentYear} ScentMatch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
