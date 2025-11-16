export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  notes: string[];
  category: 'men' | 'women' | 'unisex';
  dupeCount: number;
  dupePrice: number;
  isPopular?: boolean;
  description?: string;
}

export interface Dupe {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  similarity: number; // percentage
  originalPerfumeId: string;
  notes: string[];
  whereToBy: string[];
}
