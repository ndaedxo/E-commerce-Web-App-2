// src/hooks/useCart.ts
import { useState } from 'react';

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateQuantity = async (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setLoading(true);
    setError(null);

    try {
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 500));

      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      setError('Failed to update quantity. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 500));

      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (err) {
      setError('Failed to remove item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addItem = (item: CartItemType) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return { cartItems, updateQuantity, removeItem, addItem, loading, error };
};

export default useCart;
