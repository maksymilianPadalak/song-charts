import React from 'react';
import AuthProvider from './providers/AuthProvider';
import AppRoutes from './components/routes/AppRoutes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes></AppRoutes>
    </AuthProvider>
  );
};

export default App;
