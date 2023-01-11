import React from 'react';

interface Props {
  className?: string;
}

const LoginAsAdmin: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} d-flex justify-content-between`}>
      <div className='d-flex justify-content-start'></div>
      <div className='d-flex justify-content-end'>
        <h5 className='m-3 clickable'>Log in as Admin</h5>
      </div>
    </div>
  );
};

export default LoginAsAdmin;
