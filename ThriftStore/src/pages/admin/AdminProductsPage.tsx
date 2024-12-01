//ThriftStore\src\pages\admin\AdminProductsPage.tsx
import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import ProductForm from '../../components/admin/ProductForm';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Table';
import  Button  from '../../components/Button';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stockQuantity: number;
}

const AdminProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch products from API
    // This is a mock implementation
    setProducts([
      { id: '1', name: 'T-Shirt', price: 19.99, category: 'Clothing', stockQuantity: 100 },
      { id: '2', name: 'Jeans', price: 49.99, category: 'Clothing', stockQuantity: 50 },
    ]);
  }, []);

  const handleAddProduct = (productData: any) => {
    // Add product to API
    // This is a mock implementation
    setProducts([...products, { ...productData, id: Date.now().toString() }]);
    setShowForm(false);
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <Button onClick={() => setShowForm(true)} className="mb-4">Add New Product</Button>
        {showForm && <ProductForm onSubmit={handleAddProduct} />}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stockQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminProductsPage;