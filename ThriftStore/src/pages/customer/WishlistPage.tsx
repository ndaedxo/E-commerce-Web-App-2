
import React from 'react';
import { Card, CardContent, CardHeader } from '../../components/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Table';
import { FaHeart } from 'react-icons/fa'; // Use react-icons
import CustomerNavbar from '../../components/customer/CustomerNavbar';

const wishlistItems = [
  { id: '1', name: 'Vintage T-Shirt', price: 19.99 },
  { id: '2', name: 'Antique Vase', price: 29.99 },
  { id: '3', name: 'Leather Wallet', price: 39.99 },
];

const WishlistPage: React.FC = () => {
  return (
    <div>
      <CustomerNavbar />
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium">Wishlist Items</h3>
          <FaHeart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wishlistItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <button className="text-blue-500 hover:underline">Remove</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default WishlistPage;
