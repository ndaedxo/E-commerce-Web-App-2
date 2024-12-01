import React from 'react';
import { Card, CardContent, CardHeader } from '../../components/Card';

interface AccountSummaryProps {
  name: string;
  email: string;
  memberSince: string;
  totalOrders: number;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ name, email, memberSince, totalOrders }) => {
  return (
    <Card>
      <CardHeader>Account Summary</CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Member Since:</strong> {memberSince}</p>
          <p><strong>Total Orders:</strong> {totalOrders}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSummary;
