// ThriftStore\src\hooks\useSearch.ts
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { Product } from './types';

export const useSearch = (query: string) => {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const searchProducts = async () => {
      if (query) {
        try {
          const data = await api.searchProducts(query);
          setResults(data);
          setLoading(false);
        } catch (err) {
          setError(err as Error);
          setLoading(false);
        }
      } else {
        setResults([]);
        setLoading(false);
      }
    };
    searchProducts();
  }, [query]);

  return { results, loading, error };
};
