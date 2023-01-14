import React from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const Loader: React.FC<Props> = ({ size = 'md', fullScreen = false }) => {
  return (
    <div className={`loader-container${fullScreen ? '-full-screen' : ''}`}>
      <div className={`spinner-${size}`} />
    </div>
  );
};

export default Loader;
