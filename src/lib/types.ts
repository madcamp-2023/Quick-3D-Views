import {
  ReactThreeFiber,
  BufferAttributeProps,
  BufferGeometryProps,
  PointsMaterialProps,
} from "@react-three/fiber";
import * as THREE from "three";

export declare type Camera = THREE.OrthographicCamera | THREE.PerspectiveCamera;

export declare type AnimationCanvasProps = {
  camera:
    | Camera
    | (Partial<
        ReactThreeFiber.Object3DNode<THREE.Camera, typeof THREE.Camera> &
          ReactThreeFiber.Object3DNode<
            THREE.PerspectiveCamera,
            typeof THREE.PerspectiveCamera
          > &
          ReactThreeFiber.Object3DNode<
            THREE.OrthographicCamera,
            typeof THREE.OrthographicCamera
          >
      > & {
        manual?: boolean;
      });

  positions: Float32Array;
  updatePositions: (positions: Float32Array) => void;
  bufferGeometryProps: BufferGeometryProps;
  bufferAttributeProps: BufferAttributeProps;
  pointProps: PointsMaterialProps;
};

export declare type ItemProps = {
  positions: Float32Array;
  updatePositions: (positions: Float32Array) => void;
  bufferGeometryProps: BufferGeometryProps;
  bufferAttributeProps: BufferAttributeProps;
  pointProps: PointsMaterialProps;
};

export declare type RippleAnimationProps = {
  animationSetteings?: {
    animationTime: number;
    frequency: number;
    amplitude: number;
  };
  pointsConfig?: {
    count: number;
    sep: number;
  };
  bufferGeometryProps?: BufferGeometryProps;
  bufferAttributeProps?: BufferAttributeProps;
  pointProps?: PointsMaterialProps;
  imgSrc?: string;
};
