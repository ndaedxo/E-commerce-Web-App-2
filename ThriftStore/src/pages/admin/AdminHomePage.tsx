// ThriftStore\src\pages\AdminHomePage.tsx
import React from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import { Card, CardContent, CardHeader } from '../../components/Card';
import { Alert, AlertDescription, AlertTitle } from '../../components/Alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaBox, FaUser, FaDollarSign, FaShoppingCart } from 'react-icons/fa'; // Updated icons
// import AdminNavbar from '../../components/admin/AdminNavbar';

const salesData = [
  { name: 'Jan', sales: 4000, returns: 400 },
  { name: 'Feb', sales: 3000, returns: 300 },
  { name: 'Mar', sales: 5000, returns: 500 },
  { name: 'Apr', sales: 4500, returns: 450 },
  { name: 'May', sales: 3500, returns: 350 },
  { name: 'Jun', sales: 4200, returns: 420 },
];

const recentOrders = [
  { id: '1234', customer: 'John Doe', date: '2024-08-10', total: 99.99, status: 'Shipped' },
  { id: '1235', customer: 'Jane Smith', date: '2024-08-09', total: 149.99, status: 'Processing' },
  { id: '1236', customer: 'Bob Johnson', date: '2024-08-08', total: 79.99, status: 'Delivered' },
];

const AdminHomePage: React.FC = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Total Products</h3>
              <FaBox className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Total Users</h3>
              <FaUser className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,678</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Total Revenue</h3>
              <FaDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,200</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Total Orders</h3>
              <FaShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-6">
          <AlertTitle>New Feature!</AlertTitle>
          <AlertDescription>
            The new inventory management system is now live. Please review and update your product stocks.
          </AlertDescription>
        </Alert>

        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">Sales Overview</h2>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="returns" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Orders</h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHomePage;

