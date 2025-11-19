import PremiumHeader from '@/components/PremiumHeader';
import PremiumHero from '@/components/PremiumHero';
import PremiumWhyChoose from '@/components/PremiumWhyChoose';
import PremiumHowItWorks from '@/components/PremiumHowItWorks';
import PremiumComparisonCard from '@/components/PremiumComparisonCard';
import UnimoneyFooter from '@/components/UnimoneyFooter';


// // // sample  structure for your perfume site:
// <body>
//   <PremiumHeader />     {/* Navigation - NOT main content */}
//   <main>               {/* Main perfume comparison content */}
//     <PremiumHero />
//     <PremiumComparisonCard />
//     <PerfumeGrid />
//   </main>
//   <UnimoneyFooter />   {/* Footer links - NOT main content */}
// </body>

// The <section> element groups related content with a thematic purpose. Usually has a heading.
// // Hero section - introduces the site
// <section className="hero-section">
//   <h1>Find Perfume Dupes</h1>
//   <p>Save up to 90% on designer fragrances</p>
// </section>

// // Why Choose Us section
// <section className="features-section">
//   <h2>Why Choose ScentMatch?</h2>
//   <div className="feature-cards">...</div>
// </section>

// // How It Works section
// <section className="process-section">
//   <h2>How It Works</h2>
//   <div className="steps">...</div>
// </section>

// // Perfume Listings section
// <section className="perfume-listings">
//   <h2>Designer Perfumes</h2>
//   <div className="perfume-grid">...</div>
// </section>
// The <div> element is a generic container with no semantic meaning. Used purely for styling and layout.

// /* space-y-32 generates this CSS: */
// .space-y-32 > * + * {
//   margin-top: 8rem; /* 128px */
// }

// ┌─────────────────────────────────┐
// │    PremiumComparisonCard        │ ← First child (no top margin)
// └─────────────────────────────────┘
//               ↕ 128px gap (8rem)
// ┌─────────────────────────────────┐
// │      PremiumWhyChoose           │ ← Second child (margin-top: 8rem)
// └─────────────────────────────────┘
//               ↕ 128px gap (8rem)
// ┌─────────────────────────────────┐
// │     PremiumHowItWorks           │ ← Third child (margin-top: 8rem)
// └─────────────────────────────────┘
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumHeader />
      <main className="flex-1"> 
        {/* The <main> element represents the primary content of a webpage., there should only be 1 main element  */}
        <PremiumHero />
        {/* Large spacer to push rest of content far below the hero */}
        <div className="h-[700px] md:h-[900px]" aria-hidden="true" />
        {/* Group remaining sections with generous vertical spacing */}
        <div className="space-y-32">
           {/* space-y-32 is a Tailwind CSS utility class that adds consistent vertical spacing between child elements. */}
           
          <div className="container">
            <PremiumComparisonCard />{/* No margin-top */}
          </div>
          <PremiumWhyChoose /> {/* Gets margin-top: 8rem */}
          <PremiumHowItWorks /> {/* Gets margin-top: 8rem */}
        </div>
      </main>
      <UnimoneyFooter />
    </div>
  );
}
