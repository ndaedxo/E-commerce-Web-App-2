// src/pages/ShopPage.tsx
import React, { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import Select from '../components/Select';
import SearchBar from '../components/SearchBar';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('default');
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData: Product[] = await fetchProducts();
        setProducts(productData);

        // Extract categories and filter out undefined values
        const categorySet = new Set(productData.map(product => product.category).filter((category): category is string => category !== undefined));
        setCategories(Array.from(categorySet));
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSortOrder('default');
    setSearchTerm('');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price;
    if (sortOrder === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Shop Our Collection</h1>
        <div className="flex flex-col md:flex-row md:justify-between mb-8 gap-6">
          <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter by Category</h2>
            <Select value={selectedCategory} onChange={handleCategoryChange} ariaLabel="Filter by Category">
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
          <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Sort by</h2>
            <Select value={sortOrder} onChange={handleSortChange} ariaLabel="Sort by">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </Select>
          </div>
          <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Search</h2>
            <SearchBar onSearch={handleSearch} />
            <button onClick={handleClearFilters} className="w-full mt-4 p-2 bg-red-500 text-white rounded-md">
              Clear Filters
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
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
      </div>
    </div>
  );
};

export default ShopPage;

