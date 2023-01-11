import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const AdminDashboard: React.FC = () => {
  const { onLogout } = useAuth();

  const handleLogout = async () => {
    await onLogout();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
