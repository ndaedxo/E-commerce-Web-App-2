// ThriftStore\src\components\admin\AdminNavbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaUsers, FaClipboardList } from 'react-icons/fa';

const AdminNavbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin-home" className="text-xl font-bold">ThriftStore Admin</Link>
        <div className="flex space-x-4">
          <Link to="/admin-home" className="flex items-center">
            <FaHome className="mr-1" size={18} /> Dashboard
          </Link>
          <Link to="/admin-products" className="flex items-center">
            <FaShoppingBag className="mr-1" size={18} /> Products
          </Link>
          <Link to="/admin-orders" className="flex items-center">
            <FaClipboardList className="mr-1" size={18} /> Orders
          </Link>
          <Link to="/admin-users" className="flex items-center">
            <FaUsers className="mr-1" size={18} /> Users
          </Link>
          <Link to="/admin-profile" className="flex items-center">
            <FaUsers className="mr-1" size={18} /> Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
