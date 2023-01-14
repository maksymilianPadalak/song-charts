import React from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
}

const Loader: React.FC<Props> = ({ size = 'md' }) => {
  return (
    <div className='loader-container'>
      <div className={`spinner-${size}`} />
    </div>
  );
};

export default Loader;
