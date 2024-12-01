// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { useProducts } from '../hooks/useProducts';

const HomePage: React.FC = () => {
  const { products, loading, error } = useProducts();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const featuredProducts = products;

  const handleSearch = (searchTerm: string) => {
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Thrift Store</h1>
        <p className="text-lg text-gray-700">Find the best second-hand items at unbeatable prices!</p>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image || 'default-image-url.jpg'}
                category={product.category}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are dedicated to offering a wide range of high-quality second-hand items. Our goal is to provide you with the best shopping experience while promoting sustainability.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
