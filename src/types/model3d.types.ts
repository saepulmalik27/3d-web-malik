import { EulerOrder, Vector3 } from 'three';

export type TDimensionXYZ = [x: number, y: number, z: number];

export type TModel3d = {
  position: Vector3 | TDimensionXYZ | number | undefined;
  scale: Vector3 | number | TDimensionXYZ | undefined;
  rotation: [x: number, y: number, z: number, order?: EulerOrder] | undefined;
};
