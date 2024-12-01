// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { fetchProducts } from '../api/products'; // Ensure correct import path

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: Product[] = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};
