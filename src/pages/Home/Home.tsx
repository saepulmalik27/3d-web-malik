import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';

import Bird from '@/models/Bird';
import Island from '@/models/Island';
import Plane from '@/models/Plane';
import Sky from '@/models/Sky';

import Loader from '@/components/Loader';

import useHome from './_hooks/useHome';

const Home = () => {
  const { methods } = useHome();
  const {
    screenPosition: islandPosition,
    screenScale: islandScale,
    rotation: islandRotation,
  } = methods.adjustIslandForScreenSize();
  // const { screenPosition: birdPosition, screenScale: birdScale, rotation: birdRotation } = methods.adjustPlaneForScreenSize()

  return (
    <section className='relative h-screen w-full'>
      {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP
    </div> */}

      <Canvas
        className='h-screen w-full bg-transparent'
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={1} groundColor={'#000000'} />
          <Bird />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
