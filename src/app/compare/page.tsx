import ImprovedHeader from '@/components/ImprovedHeader';
import ImprovedPerfumeGrid from '@/components/ImprovedPerfumeGrid';
import ImprovedFooter from '@/components/ImprovedFooter';

export default function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ImprovedHeader />
      <main className="flex-1 pt-24">
        <ImprovedPerfumeGrid />
      </main>
      <ImprovedFooter />
    </div>
  );
}
