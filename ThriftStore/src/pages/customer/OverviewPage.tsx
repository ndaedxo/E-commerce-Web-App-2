// ThriftStore\src\pages\CustomerDashboardPage.tsx
import React from "react";
import { Card, CardContent, CardHeader } from "../../components/Card";
import { Alert, AlertDescription, AlertTitle } from "../../components/Alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/Table";
import { FaBox, FaCreditCard, FaHeart, FaBell } from "react-icons/fa";
// Use react-icons
import CustomerNavbar from "../../components/customer/CustomerNavbar";

const recentOrders = [
  { id: "1234", date: "2024-08-05", total: 59.99, status: "Delivered" },
  { id: "1235", date: "2024-08-01", total: 29.99, status: "Shipped" },
  { id: "1236", date: "2024-07-28", total: 79.99, status: "Processing" },
];

const CustomerOverviewPage: React.FC = () => {
  return (
    <div>
      <CustomerNavbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome back, John!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Total Orders</h3>
              <FaBox className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Loyalty Points</h3>
              <FaCreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Wishlist Items</h3>
              <FaHeart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Notifications</h3>
              <FaBell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-6">
          <AlertTitle>Special Offer!</AlertTitle>
          <AlertDescription>
            Get 20% off on your next purchase. Use code: SAVE20 at checkout.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Orders</h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
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

export default CustomerOverviewPage;
