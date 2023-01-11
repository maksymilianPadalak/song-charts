import React from 'react';
import LandingPage from './landingPage/components/LandingPage';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage className='min-vh-100' />} />
      </Routes>
    </div>
  );
};

export default App;
