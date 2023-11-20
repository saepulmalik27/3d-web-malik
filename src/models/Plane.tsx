import { useGLTF } from '@react-three/drei';

const Plane = () => {
  const { scene } = useGLTF('/assets/3d/plane.glb');

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
