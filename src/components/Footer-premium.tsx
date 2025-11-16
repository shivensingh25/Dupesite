'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[var(--pearl)] via-white to-[var(--rose-dust)] pt-20 pb-8 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
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
          className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--rose-gold)]/20 to-[var(--soft-lavender)]/20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--rose-gold)] to-[var(--soft-lavender)] flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gradient">ScentMatch</h3>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Discover luxury fragrances at affordable prices. Quality scents without the premium price tag.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500' },
                { Icon: Twitter, color: 'hover:bg-blue-400' },
                { Icon: Facebook, color: 'hover:bg-blue-600' },
              ].map(({ Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-xl bg-white border border-[var(--sand)] flex items-center justify-center transition-all duration-300 ${color} hover:text-white hover:border-transparent hover:shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">Explore</h4>
            <ul className="space-y-3">
              {['All Perfumes', 'Popular Brands', 'Best Dupes', 'New Arrivals', 'Gift Sets'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-[var(--text-secondary)] hover:text-gradient transition-all duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[var(--rose-gold)] to-[var(--soft-lavender)] mr-0 group-hover:mr-3 transition-all duration-200" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">Categories</h4>
            <ul className="space-y-3">
              {['For Her', 'For Him', 'Unisex', 'Luxury Dupes', 'Budget Friendly'].map((category) => (
                <li key={category}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-[var(--text-secondary)] hover:text-gradient transition-all duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[var(--mint)] to-[var(--champagne)] mr-0 group-hover:mr-3 transition-all duration-200" />
                    {category}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">Stay Updated</h4>
            <p className="text-[var(--text-secondary)] mb-4 text-sm">
              Get the latest dupe discoveries and exclusive deals.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--sand)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--dusty-rose)] focus:ring-2 focus:ring-[var(--dusty-rose)]/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[var(--rose-gold)] to-[var(--dusty-rose)] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[var(--sand)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
              © {currentYear} ScentMatch. Crafted with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-[var(--rose-gold)] text-[var(--rose-gold)]" />
              </motion.span>{' '}
              for fragrance lovers
            </p>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-[var(--text-secondary)] hover:text-gradient transition-all duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
