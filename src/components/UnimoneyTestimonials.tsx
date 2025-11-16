'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'Melbourne, Australia',
    image: '/testimonials/sarah.jpg',
    rating: 5,
    text: 'I was spending $300+ on designer perfumes monthly. ScentMatch helped me find dupes that smell 95% identical for a fraction of the price. Absolute game-changer!',
  },
  {
    name: 'Marcus Rodriguez',
    location: 'Sydney, Australia',
    image: '/testimonials/marcus.jpg',
    rating: 5,
    text: 'As someone who loves luxury fragrances but has a student budget, this site is a lifesaver. The comparisons are detailed and honest.',
  },
  {
    name: 'Priya Sharma',
    location: 'Brisbane, Australia',
    image: '/testimonials/priya.jpg',
    rating: 5,
    text: 'I was skeptical about dupes at first, but the side-by-side comparisons convinced me. Now I own 10 amazing fragrances for the price of one designer bottle!',
  },
];

export default function UnimoneyTestimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]') as HTMLElement | null;
    const delta = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: dir === 'left' ? -delta : delta, behavior: 'smooth' });
  };

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4">
        {/* Header with controls */}
        <div className="mb-10 md:mb-12 flex items-end justify-between gap-4">
          <div className="text-center md:text-left w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Fragrance Lovers Are Saying
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl md:mx-0 mx-auto">
              Join thousands of savvy shoppers who've discovered luxury scents for less.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable testimonials */}
        <div ref={trackRef} className="no-scrollbar overflow-x-auto snap-x snap-mandatory -mx-2 px-2 mb-32">
          <div className="flex gap-6 w-max">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                data-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="snap-start min-w-[320px] md:min-w-[420px] bg-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-gray-100 relative overflow-hidden"
              >
                {/* Accent quote icon */}
                <Quote className="absolute -top-4 -left-2 w-20 h-20 text-purple-100" />

                {/* Rating Stars */}
                <div className="relative z-10 flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="relative z-10 text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  “{testimonial.text}”
                </p>

                {/* Author Info */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meet the Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-16 max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border-2 border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Meet the Founder
            </h3>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Founder Photo */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-4xl md:text-5xl">J</span>
              </div>

              {/* Founder Story */}
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Jaideep</h4>
                <p className="text-purple-600 font-semibold md:text-lg mb-4">Fragrance Enthusiast & Founder</p>
                <p className="text-gray-700 md:text-lg leading-relaxed">
                  As a university student with a passion for luxury fragrances, I was frustrated by the high costs of designer perfumes. After discovering the world of high-quality dupes, I realized there was a gap in the market for honest, transparent comparisons. ScentMatch was born from my personal journey to make luxury scents accessible to everyone, regardless of budget.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
