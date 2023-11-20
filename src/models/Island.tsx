import React from 'react';
import { useRef } from 'react';
import { Group } from 'three';

import { a } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';

import { TModel3d } from '@/types/model3d.types';

import islandScene from '/assets/3d/island.glb';

type IslandProps = TModel3d;

const Island: React.FC<IslandProps> = ({ position, scale, rotation }) => {
  const islandRef = useRef<Group | null>(null);
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group
      position={position}
      scale={scale}
      rotation={rotation}
      ref={islandRef}
    >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;
