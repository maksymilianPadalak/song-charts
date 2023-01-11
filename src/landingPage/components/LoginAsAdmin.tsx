import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

const LoginAsAdmin: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} d-flex justify-content-between`}>
      <div className='d-flex justify-content-start'></div>
      <div className='d-flex justify-content-end'>
        <Link to={'admin'} className={'link'}>
          <h5 className='m-3'>Log in as Admin</h5>
        </Link>
      </div>
    </div>
  );
};

export default LoginAsAdmin;
