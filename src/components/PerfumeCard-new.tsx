import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Perfume } from '@/types/perfume';

interface PerfumeCardProps {
  perfume: Perfume;
}

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  return (
    <div className="border-b border-gray-200 pb-4 hover:bg-gray-50">
      <div className="flex gap-4">
        <div className="w-24 h-32 bg-gray-100"></div>
        <div className="flex-1">
          <Link href={`/perfume/${perfume.id}`} className="text-sm text-blue-700 uppercase font-semibold hover:underline">
            {perfume.brand}
          </Link>
          <h3 className="mb-2">
            <Link href={`/perfume/${perfume.id}`} className="text-xl font-bold text-blue-700 hover:underline">
              {perfume.name}
            </Link>
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
            <span className="text-sm">{perfume.rating}</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold">${perfume.price}</span>
            <Link href={`/perfume/${perfume.id}`} className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              {perfume.dupeCount} Dupes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
