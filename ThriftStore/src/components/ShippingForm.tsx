// src/components/ShippingForm.tsx
import React from 'react';

interface ShippingFormProps {
  onSubmit: (event: React.FormEvent) => void;
  className?: string;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" required />

      <label htmlFor="state">State</label>
      <input type="text" id="state" name="state" required />

      <label htmlFor="zip">ZIP Code</label>
      <input type="text" id="zip" name="zip" required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ShippingForm;
