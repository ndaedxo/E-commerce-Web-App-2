// ThriftStore/src/pages/SearchResultsPage.tsx
// src/pages/SearchResultsPage.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Card, CardContent } from '../components/Card';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface SearchResultsPageProps {
  searchResults: Product[];
  onAddToCart: (product: Product) => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ searchResults, onAddToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get('query') || '';

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <CardContent>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <Button onClick={() => handleProductClick(product.id)}>View Details</Button>
              <Button onClick={() => onAddToCart(product)} className="mt-2">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
