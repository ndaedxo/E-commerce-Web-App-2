//ThriftStore\src\pages\admin\AdminOrdersPage.tsx
import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Table';

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: string;
}

const AdminOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch orders from API
    // This is a mock implementation
    setOrders([
      { id: '1', customerName: 'John Doe', date: '2024-08-10', total: 99.99, status: 'Shipped' },
      { id: '2', customerName: 'Jane Smith', date: '2024-08-09', total: 149.99, status: 'Processing' },
    ]);
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Orders</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminOrdersPage;