import React from 'react';

import { useGLTF } from '@react-three/drei';

const Bird = () => {
  const { scene } = useGLTF('/assets/3d/bird.glb');

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
