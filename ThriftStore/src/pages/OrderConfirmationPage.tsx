//ThriftStore\src\pages\OrderConfirmationPage.tsx
import React from 'react';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
        <p className="font-bold">Thank you for your order!</p>
        <p>Your order has been successfully placed and is being processed.</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Details</h2>
        <p>Order Number: #12345</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
        <p>John Doe</p>
        <p>123 Main St</p>
        <p>Anytown, ST 12345</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p>If you have any questions about your order, please contact our customer support.</p>
        <a href="/contact" className="text-blue-500 hover:underline">Contact Us</a>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;