// src/components/PaymentForm.tsx
import React from 'react';

interface PaymentFormProps {
  onSubmit: (event: React.FormEvent) => void;
  className?: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" id="cardNumber" name="cardNumber" required />

      <label htmlFor="expiryDate">Expiry Date</label>
      <input type="text" id="expiryDate" name="expiryDate" required />

      <label htmlFor="cvv">CVV</label>
      <input type="text" id="cvv" name="cvv" required />

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
