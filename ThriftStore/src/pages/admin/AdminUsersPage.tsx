//ThriftStore\src\pages\admin\AdminUsersPage.tsx
import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import UserList from '../../components/admin/UserList';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const AdminUsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users from API
    // This is a mock implementation
    setUsers([
      { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Customer' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    ]);
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <UserList users={users} />
      </div>
    </div>
  );
};

export default AdminUsersPage;