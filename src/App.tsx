import React from 'react';
import LandingPage from './landingPage/components/LandingPage';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/components/AdminDashboard';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage className='min-vh-100' />} />
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
