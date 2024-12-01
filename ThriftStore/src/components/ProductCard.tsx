// src/components/ProductCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Product } from '../types/Product';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-xl font-bold mb-2">${price}</p>
        {category && <p className="text-sm text-gray-500">Category: {category}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
