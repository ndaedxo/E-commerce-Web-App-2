// src/types/Product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string; // Optional if not always present
}
