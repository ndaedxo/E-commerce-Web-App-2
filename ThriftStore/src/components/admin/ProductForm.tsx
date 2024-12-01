//ThriftStore\src\components\admin\ProductForm.tsx
import React, { useState } from 'react';
import  Input  from '../../components/Input';
import  Button  from '../../components/Button';
import  Textarea  from '../../components/Textarea';//Create component

interface ProductFormProps {
  initialData?: {
    name: string;
    price: number;
    description: string;
    category: string;
    stockQuantity: number;
  };
  onSubmit: (data: any) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    price: 0,
    description: '',
    category: '',
    stockQuantity: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <Input id="category" name="category" value={formData.category} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
        <Input id="stockQuantity" name="stockQuantity" type="number" value={formData.stockQuantity} onChange={handleChange} required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ProductForm;