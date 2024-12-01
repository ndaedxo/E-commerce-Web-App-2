import axios from 'axios';

// Cart Service
export const cartService = {
  addToCart: async (userId: string, productId: string, quantity: number) => {
    const response = await axios.post(`/api/users/${userId}/cart`, { productId, quantity });
    return response.data;
  },
  removeFromCart: async (userId: string, productId: string) => {
    await axios.delete(`/api/users/${userId}/cart/${productId}`);
  },
  updateCartItem: async (userId: string, productId: string, quantity: number) => {
    const response = await axios.put(`/api/users/${userId}/cart/${productId}`, { quantity });
    return response.data;
  },
};
