import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaUser, FaHeart } from 'react-icons/fa';

const CustomerNavbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/overview" className="text-xl font-bold">ThriftStore</Link>
        <div className="flex space-x-4">
          <Link to="/overview" className="flex items-center">
            <FaHome className="mr-1" size={18} /> Home
          </Link>
          <Link to="/recent-orders" className="flex items-center">
            <FaShoppingBag className="mr-1" size={18} /> Orders
          </Link>
          <Link to="/profile" className="flex items-center">
            <FaUser className="mr-1" size={18} /> Account
          </Link>
          <Link to="/wishlist" className="flex items-center">
            <FaHeart className="mr-1" size={18} /> Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavbar;

