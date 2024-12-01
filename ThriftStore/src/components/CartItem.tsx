// ThriftStore\src\components\CartItem.tsx
import React from 'react';
import { FaTrash, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
  updateQuantity: (id: number, newQuantity: number) => void;
  removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, updateQuantity, removeItem }) => {
  const handleQuantityChange = (amount: number) => {
    const newQuantity = item.quantity + amount;
    if (newQuantity >= 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <li className="cart-item">
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(-1)} aria-label="Decrease quantity">
          <FaMinusCircle />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(1)} aria-label="Increase quantity">
          <FaPlusCircle />
        </button>
        <button onClick={() => removeItem(item.id)} aria-label="Remove item">
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
