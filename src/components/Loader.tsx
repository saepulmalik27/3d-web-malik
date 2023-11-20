import React from 'react';

import { Html } from '@react-three/drei';
const Loader = () => {
  return (
    <Html>
      <div className='flex items-center justify-center'>
        <div className='h-20 w-20 animate-spin rounded-full border-4 border-blue-500'></div>
      </div>
    </Html>
  );
};

export default Loader;
