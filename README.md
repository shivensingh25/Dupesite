# PerfumeDupes - Find Affordable Perfume Alternatives

A modern Next.js web application designed to help users discover affordable alternatives (dupes) to popular designer perfumes. Similar to Fragrantica.com but focused on price comparisons and dupe discovery.

## 🌟 Features

- **Perfume Database**: Browse popular designer perfumes with detailed information
- **Dupe Comparison**: Compare original perfumes with affordable alternatives
- **Smart Search**: Find perfumes by name, brand, or notes
- **Price Savings Calculator**: See exactly how much you can save
- **Rating System**: User ratings and reviews for both originals and dupes
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern Tech Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or use the existing folder

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   ├── perfume/      # Perfume detail pages
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PerfumeGrid.tsx
│   │   ├── PerfumeCard.tsx
│   │   └── Footer.tsx
│   ├── data/             # Mock data
│   │   └── perfumes.ts
│   └── types/            # TypeScript types
│       └── perfume.ts
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## 🎯 What's Next? Making This Site Fully Functional

### 1. **Backend & Database** (Critical)
   - [ ] Set up a database (PostgreSQL, MongoDB, or Supabase)
   - [ ] Create API endpoints for:
     - Perfume CRUD operations
     - Dupe management
     - User authentication
     - Reviews and ratings
   - [ ] Implement search functionality with filtering

**Recommended:** Use Supabase (easy setup) or Prisma + PostgreSQL

### 2. **Authentication System**
   - [ ] User registration and login
   - [ ] Social auth (Google, Facebook)
   - [ ] User profiles
   - [ ] Saved favorites/wishlists

**Tools:** NextAuth.js, Clerk, or Supabase Auth

### 3. **Search & Filtering**
   - [ ] Full-text search implementation
   - [ ] Advanced filters (brand, price range, notes, gender)
   - [ ] Sort options (popularity, price, rating)
   - [ ] Autocomplete suggestions

**Tools:** Algolia, Elasticsearch, or built-in database search

### 4. **User-Generated Content**
   - [ ] Review and rating system
   - [ ] User comments
   - [ ] Photo uploads
   - [ ] Moderation system

### 5. **Content Management**
   - [ ] Admin dashboard
   - [ ] Add/edit perfumes and dupes
   - [ ] Manage user content
   - [ ] Analytics

**Tools:** Build custom with Next.js or use Sanity/Contentful

### 6. **E-commerce Integration** (Optional)
   - [ ] Affiliate links to purchase dupes
   - [ ] Price tracking
   - [ ] Availability alerts
   - [ ] Comparison tools

**Tools:** Amazon Associates, ShareASale, or direct affiliate programs

### 7. **SEO & Performance**
   - [ ] Meta tags and Open Graph
   - [ ] Sitemap generation
   - [ ] Structured data (Schema.org)
   - [ ] Image optimization
   - [ ] Performance monitoring

**Tools:** Next.js built-in SEO, next-sitemap, Google Analytics

### 8. **Mobile App** (Future)
   - [ ] React Native version
   - [ ] Progressive Web App (PWA)
   - [ ] Push notifications

### 9. **Community Features**
   - [ ] User profiles
   - [ ] Follow system
   - [ ] Discussion forums
   - [ ] Fragrance collections

### 10. **Data & Content**
   - [ ] Populate database with real perfume data
   - [ ] Research and add legitimate dupes
   - [ ] Professional product photography
   - [ ] Write descriptions and guides

**Data Sources:**
- Fragrantica API (if available)
- Manual research
- User submissions
- Affiliate program data

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended), Netlify, or AWS

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚢 Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 📝 Environment Variables

Create a `.env.local` file for environment variables:

```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key

# API Keys
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🤝 Contributing

This is a starting template. To make it production-ready:
1. Add real perfume data
2. Implement database
3. Add authentication
4. Set up search functionality
5. Add user reviews

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🎨 Design Credits

Inspired by Fragrantica.com with a focus on dupe comparison functionality.

---

**Ready to make this fully functional?** Start with setting up a database and authentication system! 🚀
