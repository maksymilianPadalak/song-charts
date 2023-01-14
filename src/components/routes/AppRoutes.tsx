import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../user/LandingPage';
import AdminDashboard from '../admin/AdminDashboard';
import Login from '../admin/Login';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import SongDetails from '../admin/SongDetails';
import AlbumStats from '../user/AlbumStats';

const AppRoutes: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Routes>
        <Route path={''} element={<LandingPage className='min-vh-100' />} />
        <Route path={'/album/:title'} element={<AlbumStats />} />
        <Route path={'admin'}>
          {isLoggedIn ? (
            <>
              <Route path={'dashboard'}>
                <Route path={''} element={<AdminDashboard />} />
                <Route path={'song/:id'} element={<SongDetails />} />
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
