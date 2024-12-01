// src/pages/CartPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import useCart from '../hooks/useCart';

const ShoppingCartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeItem, loading, error } = useCart();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    // Navigate to the Checkout Page
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>
        <div>
          <CartSummary items={cartItems} />
          <Button 
            className="w-full mt-4" 
            onClick={handleProceedToCheckout}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed to Checkout'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
