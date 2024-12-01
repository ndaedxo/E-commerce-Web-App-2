// ThriftStore\src\components\CartSummary.tsx
import React from 'react';
import { Card, CardContent } from '../components/Card';

interface CartSummaryProps {
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
