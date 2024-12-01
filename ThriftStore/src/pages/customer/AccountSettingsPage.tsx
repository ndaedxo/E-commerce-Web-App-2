import React, { useState } from 'react';
import CustomerNavbar from '../../components/customer/CustomerNavbar';
import  Input  from '../../components/Input';
import  Button  from '../../components/Button';
import { Card, CardContent, CardHeader } from '../../components/Card';

const AccountSettingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to update user data)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <CustomerNavbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <Card>
          <CardHeader>Update Your Information</CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              <Button type="submit">Update Settings</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountSettingsPage;