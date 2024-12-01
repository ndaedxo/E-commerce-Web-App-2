// ThriftStore\src\hooks\useOrders.ts
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import { Order } from './types';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await api.fetchOrders();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return { orders, loading, error };
};
