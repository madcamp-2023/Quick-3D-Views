import * as React from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";

import {
  ReactThreeFiber,
  extend,
  useFrame,
  useLoader,
} from "@react-three/fiber";

import waternormals from "/images/waternormals.jpeg";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      water: ReactThreeFiber.Object3DNode<Water, typeof Water> & {
        rotationX?: number;
      };
    }
  }
}

extend({ Water });

function Ocean() {
  const ref = React.useRef<Water>(null);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    waternormals
  ) as THREE.Texture;
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = React.useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = React.useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
    }),
    [waterNormals]
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += delta;
    }
  });

  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}
export default Ocean;
