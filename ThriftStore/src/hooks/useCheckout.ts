import { useState } from 'react';
import { ShippingInfo, PaymentInfo, CheckoutState } from './types';

export const useCheckout = () => {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({
    step: 'shipping',
    shippingInfo: null,
    paymentInfo: null,
  });

  const proceedToPayment = (shippingInfo: ShippingInfo) => {
    setCheckoutState(prev => ({ ...prev, step: 'payment', shippingInfo }));
  };

  const completeCheckout = async (paymentInfo: PaymentInfo) => {
    try {
      // Implement checkout logic here
      // e.g., await api.completeCheckout(shippingInfo, paymentInfo);
      setCheckoutState(prev => ({ ...prev, step: 'complete', paymentInfo }));
    } catch (err) {
      console.error("Failed to complete checkout:", err);
    }
  };

  return { checkoutState, proceedToPayment, completeCheckout };
};
