import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Rains from "./Rains";
import { OrbitControls } from "@react-three/drei";

const AnimationCanvas: React.FC = () => {
  return (
    <Canvas legacy={false} camera={{ position: [200, 5, 200], fov: 50 }}>
      <Suspense fallback={null}>
        <Rains />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default AnimationCanvas;
