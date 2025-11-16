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
        <div className="container mt-12">
          <PremiumComparisonCard />
        </div>
        <PremiumWhyChoose />
        <PremiumHowItWorks />
      </main>
      <UnimoneyFooter />
    </div>
  );
}
