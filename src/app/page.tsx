import PremiumHeader from '@/components/PremiumHeader';
import PremiumHero from '@/components/PremiumHero';
import PremiumWhyChoose from '@/components/PremiumWhyChoose';
import PremiumHowItWorks from '@/components/PremiumHowItWorks';
import PremiumComparisonCard from '@/components/PremiumComparisonCard';
import UnimoneyFooter from '@/components/UnimoneyFooter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumHeader />
      <main className="flex-1">
        <PremiumHero />
        {/* Large spacer to push rest of content far below the hero */}
        <div className="h-[700px] md:h-[900px]" aria-hidden="true" />
        {/* Group remaining sections with generous vertical spacing */}
        <div className="space-y-32">
          <div className="container">
            <PremiumComparisonCard />
          </div>
          <PremiumWhyChoose />
          <PremiumHowItWorks />
        </div>
      </main>
      <UnimoneyFooter />
    </div>
  );
}
