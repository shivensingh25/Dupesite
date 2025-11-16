# 🌸 ScentMatch - Premium Perfume Dupes Comparison

> **Ultra-clean, minimalist luxury fragrance discovery platform**

An exquisitely designed Next.js application for discovering affordable alternatives to designer perfumes. Built with a focus on premium aesthetics, fluid animations, and exceptional user experience.

---

## ✨ Design Philosophy

**Inspired by the best:**
- 🍎 **Apple** - Minimalist clarity and refined typography
- 💄 **Sephora + Glossier** - Clean, luxurious product presentation  
- 🎨 **Calm Pastels** - Soft, ethereal gradients
- 🚀 **YC Startup** - Professional, high-converting landing page

---

## 🎨 Visual Design System

### Color Palette
```css
Luxury Neutrals:
  --cream: #fdfbf7        /* Primary background */
  --pearl: #f8f6f3        /* Secondary background */
  --sand: #e8e4dd         /* Borders & dividers */

Soft Accents:
  --rose-dust: #f5e6e8    /* Hero gradients */
  --lavender-mist: #e8e4f3 /* Subtle highlights */
  --sage: #d4e3d5         /* Accent touches */

Premium Gradients:
  --rose-gold: #d4a5a5    /* Primary CTA */
  --champagne: #e8d5b7    /* Luxury accents */
  --dusty-rose: #c9ada7   /* Links & highlights */
  --soft-lavender: #b8a9c9 /* Secondary CTA */
  --mint: #b8d8ba         /* Fresh accents */
```

### Typography
- **Font**: SF Pro Display (Apple-inspired)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)
- **Letter Spacing**: -0.02em for headings (tighter, modern)
- **Line Height**: 1.2 for headings, 1.7 for body text

### Shadows & Depth
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.04)   /* Subtle lift */
--shadow-md: 0 4px 16px rgba(0,0,0,0.06)  /* Card default */
--shadow-lg: 0 8px 32px rgba(0,0,0,0.08)  /* Hover state */
--shadow-xl: 0 16px 48px rgba(0,0,0,0.10) /* Modal/overlay */
```

---

## 🎭 Premium Components

### 1. **Header** (`Header.tsx`)
- ✅ Glass-morphism effect on scroll
- ✅ Expanding search bar animation
- ✅ Smooth navigation link underlines
- ✅ Animated dark mode toggle
- ✅ Sticky positioning with blur backdrop

### 2. **Hero Section** (`Hero.tsx`)
- ✅ Ethereal gradient backgrounds
- ✅ Floating animated blob elements
- ✅ Glow effect on search focus
- ✅ Popular search chip buttons
- ✅ Badge with sparkles icon

### 3. **Product Cards** (`PerfumeCard.tsx`)
- ✅ 3D bottle silhouette with gradients
- ✅ Floating "Hot" badge with sparkles
- ✅ Dupe count badge (top-right)
- ✅ Star ratings with gradient fills
- ✅ Pill-shaped note tags
- ✅ Hover lift & shadow transition
- ✅ Gradient CTA button with arrow

### 4. **Product Grid** (`PerfumeGrid.tsx`)
- ✅ Animated category chips with ripple
- ✅ Smooth layoutId transitions
- ✅ Grid/List view toggle
- ✅ Custom select dropdowns
- ✅ Results counter with gradients
- ✅ Staggered card animations

### 5. **Footer** (`Footer.tsx`)
- ✅ Multi-column layout
- ✅ Social media icons with hover effects
- ✅ Newsletter subscription form
- ✅ Animated pulsing heart
- ✅ Decorative rotating gradient blob

---

## 🚀 Animation Library

### Framer Motion Effects

**Entrance Animations:**
```typescript
fadeInUp: { opacity: 0→1, y: 30px→0 }
scaleIn: { opacity: 0→1, scale: 0.95→1 }
slideInRight: { opacity: 0→1, x: 20px→0 }
```

**Hover Effects:**
```typescript
Card Lift: { y: 0→-8px }
Button Scale: { scale: 1→1.05 }
Icon Bounce: { scale: 1→1.1, y: 0→-3px }
```

**Special Effects:**
```typescript
Rotating Blob: { rotate: 0→360°, duration: 20s }
Floating Badge: { y: 0→-10px, repeat: ∞ }
Pulsing Heart: { scale: 1→1.2→1, repeat: ∞ }
```

### CSS Animations
- `fadeInUp` - Page section reveals
- `shimmer` - Skeleton loaders
- `float` - Decorative elements
- `pulse` - Attention indicators

---

## 📱 Responsive Design

### Breakpoints
```
Mobile:  < 768px  - Single column, horizontal scroll chips
Tablet:  768-1024px - 2 column grid
Desktop: > 1024px - 3 column grid, full navigation
```

### Mobile Optimizations
- Horizontal scroll for category chips
- Stacked product cards
- Collapsible filters
- Touch-friendly 44px minimum tap targets
- Reduced motion for performance

---

## 🎯 Key Features

### User Experience
- [x] Sticky search bar with expand animation
- [x] Category filtering with animated transitions
- [x] Sort by popularity, price, rating
- [x] Grid/List view toggle
- [x] Skeleton loaders for async content
- [x] Dark mode toggle (UI only, ready for implementation)
- [x] Smooth scroll anchors

### Performance
- [x] Next.js 16 with Turbopack
- [x] React Server Components where possible
- [x] Optimized animations (GPU-accelerated)
- [x] Lazy loading for images
- [x] Code splitting

### Accessibility
- [x] Semantic HTML5 elements
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation support
- [x] Focus-visible states
- [x] Color contrast compliance (WCAG AA)

---

## 🛠 Tech Stack

```json
{
  "framework": "Next.js 16.0.3",
  "runtime": "Turbopack",
  "styling": "Tailwind CSS v4",
  "animations": "Framer Motion 11.x",
  "icons": "Lucide React",
  "language": "TypeScript",
  "fonts": "SF Pro Display"
}
```

---

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Development server:** http://localhost:3000

---

## 🎨 Customization Guide

### Changing Colors
Edit `src/app/globals.css` CSS variables:
```css
:root {
  --rose-gold: #YOUR_COLOR;
  --dusty-rose: #YOUR_COLOR;
  /* etc... */
}
```

### Adjusting Animations
Modify Framer Motion props in components:
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} // ← Adjust speed
>
```

### Adding New Products
Update `src/data/perfumes.ts`:
```typescript
{
  id: 'unique-id',
  name: 'Perfume Name',
  brand: 'Brand',
  price: 120,
  rating: 4.5,
  reviews: 1200,
  notes: ['Note 1', 'Note 2'],
  category: 'women',
  dupeCount: 8,
  isPopular: true
}
```

---

## 🏆 Design Highlights

### What Makes It Premium?

1. **Airy White Space** - Generous padding, breathing room
2. **Soft Shadows** - Layered, subtle depth
3. **Pastel Gradients** - Ethereal, calming backgrounds
4. **Micro-interactions** - Everything responds to hover/tap
5. **Smooth Transitions** - Cubic bezier easing (0.4, 0, 0.2, 1)
6. **Typography Hierarchy** - Clear visual weight differences
7. **Glass-morphism** - Blur effects for modern feel
8. **Gradient Accents** - Subtle color transitions everywhere

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Dark mode full implementation
- [ ] Advanced filtering (price range, notes, occasions)
- [ ] User accounts & favorites
- [ ] Compare side-by-side
- [ ] Scent quiz/recommendations
- [ ] Review system
- [ ] Shopping cart integration
- [ ] Admin dashboard for content management

### Performance Optimizations
- [ ] Image optimization with next/image
- [ ] Font subsetting
- [ ] Route prefetching
- [ ] Service worker for offline support
- [ ] Analytics integration

---

## 📄 License

MIT License - Feel free to use for personal/commercial projects

---

## 💖 Crafted With

- **Design Inspiration**: Apple, Sephora, Glossier, Calm
- **Built By**: Senior Frontend Engineer
- **Focus**: Ultra-clean minimalist luxury UI
- **Philosophy**: Form follows function, beauty enhances usability

---

**Live Demo**: http://localhost:3000  
**Design System**: See `globals.css`  
**Component Library**: `src/components/`

---

*Made with ❤️ for fragrance lovers*
