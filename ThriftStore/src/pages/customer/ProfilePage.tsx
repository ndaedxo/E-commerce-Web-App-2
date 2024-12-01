//ThriftStore\src\pages\ProfilePage.tsx
import React from 'react';
import CustomerNavbar from '../../components/customer/CustomerNavbar';

const ProfilePage: React.FC = () => {
  return (
    <div>
    <CustomerNavbar />
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Customer Profile</h1>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Profile Information</h2>
          <p className="text-gray-600">Here you can update your profile information such as name, email, and password.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Order History</h2>
          <p className="text-gray-600">View your past orders and track their status here.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Manage Addresses</h2>
          <p className="text-gray-600">Add, edit, or remove your shipping addresses.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
