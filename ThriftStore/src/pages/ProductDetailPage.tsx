// src/pages/ProductDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import axios from '../api/axios'; // Import axios instance

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null); // Adjust type as needed
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`); // Update to match your API route
        setProduct(response.data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product details.');
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    // Add to cart logic
    alert('Product added to cart');
  };

  const formattedPrice = product?.price ? Number(product.price).toFixed(2) : '0.00';

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Button onClick={() => navigate('/shop')} className="mb-4 bg-blue-500 text-white hover:bg-blue-600">
          Back to Shop
        </Button>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {product ? (
          <Card className="bg-white shadow-lg rounded-lg p-6">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-2">{product.name}</CardTitle>
              <p className="text-xl font-semibold text-gray-800">${formattedPrice}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 text-lg font-medium">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button 
                onClick={handleAddToCart} 
                className="w-full bg-green-500 text-white hover:bg-green-600"
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ) : (
          <p className="text-gray-700">Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
