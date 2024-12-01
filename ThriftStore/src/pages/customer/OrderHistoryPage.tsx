import React, { useState, useEffect } from 'react';
import CustomerNavbar from '../../components/customer/CustomerNavbar';
import RecentOrdersList from '../../components/customer/RecentOrdersList';

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

const OrderHistoryPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders from API
    // This is a mock implementation
    setOrders([
      { id: '1', date: '2024-08-10', total: 99.99, status: 'Delivered' },
      { id: '2', date: '2024-08-05', total: 149.99, status: 'Shipped' },
      { id: '3', date: '2024-07-28', total: 79.99, status: 'Processing' },
    ]);
  }, []);

  return (
    <div>
      <CustomerNavbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Order History</h1>
        <RecentOrdersList orders={orders} />
      </div>
    </div>
  );
};

export default OrderHistoryPage;