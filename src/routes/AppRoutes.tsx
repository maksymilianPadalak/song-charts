import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../landingPage/components/LandingPage';
import AdminDashboard from '../admin/components/AdminDashboard';
import Login from '../admin/components/Login';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import SongDetails from '../admin/components/SongDetails';

const AppRoutes: React.FC = () => {
  const { token } = useAuth();

  return (
    <>
      <Routes>
        <Route path={''} element={<LandingPage className='min-vh-100' />} />
        <Route path={'admin'}>
          {token ? (
            <>
              <Route path={'dashboard'}>
                <Route path={''} element={<AdminDashboard className={'mt-2'} />} />
                <Route path={'song'} element={<SongDetails />} />
              </Route>
              <Route path='' element={<Navigate to={'dashboard'} />} />
              <Route path='*' element={<Navigate to={'dashboard'} />} />
            </>
          ) : (
            <>
              <Route path={'login'} element={<Login className='min-vh-100 m-4' />} />
              <Route path='' element={<Navigate to={'login'} />} />
              <Route path='*' element={<Navigate to={'login'} />} />
            </>
          )}
        </Route>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
