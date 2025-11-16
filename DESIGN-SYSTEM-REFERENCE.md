# 🎨 Quick Reference - Minimal Design System

## Color Palette

```css
/* Primary Colors */
#F7E9EF  - Soft Blush (backgrounds, badges)
#EEE8F7  - Lavender Haze (accents, gradients)
#FAF9F6  - Warm Ivory (page background)
#E7E6E4  - Neutral Stone (borders, dividers)
#1E1E1E  - Deep Charcoal (text, buttons)

/* Text Colors */
#1E1E1E  - Primary text
#5A5A5A  - Secondary text
#9E9E9E  - Tertiary text (captions)

/* Accent Colors */
#E8F5E9  - Soft Mint (dupe badges)
#FFF4E6  - Soft Amber (original badges)
#E3F2FD  - Soft Blue (optional)
```

## Typography Scale

```css
h1: 42px / 600
h2: 32px / 600
h3: 22px / 500
body: 16px / 400
small: 14px / 400
```

## Spacing Scale

```css
py-20  - Major sections (80px)
gap-8  - Between cards (32px)
mt-12  - Between grids (48px)
p-6    - Inside cards (24px)
mb-5   - Heading to subtitle (20px)
mb-8   - Subtitle to content (32px)
```

## Shadows

```css
shadow-sm  - Subtle (cards, badges)
shadow-md  - Medium (hover states)
No shadow-lg or shadow-xl
```

## Border Radius

```css
rounded-xl      - Cards (12px)
rounded-full    - Badges, buttons
rounded-2xl     - Logo (16px)
```

## Icons

```javascript
// Lucide Icons only
import { IconName } from 'lucide-react';

// Usage
<IconName className="w-6 h-6" strokeWidth={1.5} />

// Sizes
Cards: w-6 h-6 (24px)
Inline: w-4 h-4 (16px)
```

## Animations

```javascript
// Fade up on scroll
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}

// Hover lift
whileHover={{ y: -4 }}
transition={{ duration: 0.3 }}

// Button press
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.25 }}
```

## Component Structure

```jsx
// Section
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>

// Card
<div className="bg-white rounded-xl border border-[#E7E6E4] p-6 shadow-sm">
  {/* Content */}
</div>

// Badge
<span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-sm font-semibold">
  Label
</span>

// Button Primary
<button className="px-8 py-3.5 rounded-xl bg-[#1E1E1E] text-white font-semibold shadow-sm hover:shadow-md">
  Text
</button>

// Button Secondary
<button className="px-8 py-3.5 rounded-xl bg-white border border-[#E7E6E4] text-[#1E1E1E] font-semibold">
  Text
</button>
```

## Grid Layouts

```jsx
// 2×2 Grid (Features)
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Cards */}
</div>

// 3-Column (How It Works)
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

## DO's and DON'Ts

### ✅ DO
- Use pastel colors only
- Keep shadows subtle (shadow-sm)
- Use outline icons, stroke 1.5
- Maintain spacing rhythm
- Use pill badges
- Keep text readable (#1E1E1E, #5A5A5A)
- Animate smoothly (0.25-0.4s)

### ❌ DON'T
- No neon colors
- No heavy shadows
- No mixed icon styles
- No cramped spacing
- No decorative numbers
- No harsh gradients
- No jarring animations
