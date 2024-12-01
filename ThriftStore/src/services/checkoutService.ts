import axios from 'axios';

// Checkout Service
export const checkoutService = {
  processPayment: async (paymentData: object) => {
    const response = await axios.post('/api/payments', paymentData);
    return response.data;
  },
  validateShipping: async (shippingData: object) => {
    const response = await axios.post('/api/shipping/validate', shippingData);
    return response.data;
  },
};
