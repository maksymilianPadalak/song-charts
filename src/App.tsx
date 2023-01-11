import React from 'react';
import LandingPage from './landingPage/components/LandingPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './admin/components/AdminDashboard';
import Login from './admin/components/Login';

const App: React.FC = () => {
  const token = '';
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LandingPage className='min-vh-100' />} />
        <Route path={'/admin'}>
          {token ? (
            <>
              <Route path={'dashboard'} element={<AdminDashboard />} />
              <Route path='' element={<Navigate to={'dashboard'} />} />
              <Route path='*' element={<Navigate to={'dashboard'} />} />
            </>
          ) : (
            <>
              <Route path={'login'} element={<Login />} />
              <Route path='' element={<Navigate to={'login'} />} />
              <Route path='*' element={<Navigate to={'login'} />} />
            </>
          )}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
