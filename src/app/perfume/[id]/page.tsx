import { notFound } from 'next/navigation';
import ImprovedHeader from '@/components/ImprovedHeader';
import ImprovedFooter from '@/components/ImprovedFooter';
import ImprovedPerfumeDetail from '@/components/ImprovedPerfumeDetail';
import { perfumes } from '@/data/perfumes';

export default function PerfumePage({ params }: { params: { id: string } }) {
  const perfume = perfumes.find(p => p.id === params.id);

  if (!perfume) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ImprovedHeader />
      <main className="flex-1 pt-24">
        <ImprovedPerfumeDetail perfume={perfume} />
      </main>
      <ImprovedFooter />
    </div>
  );
}

