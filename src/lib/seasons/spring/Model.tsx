import * as React from "react";
import * as THREE from "three";

import PetalModel from "./PetalModel";
import ButterflyModel from "./ButterflyModel";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  children?: React.ReactNode;
  isDayTime: boolean;
}

export default function Model(props: ModelProps) {
  const group = React.useRef<THREE.Group>(null);

  return (
    <group ref={group} {...props} dispose={null}>
      <PetalModel />
      <ButterflyModel />
    </group>
  );
}
