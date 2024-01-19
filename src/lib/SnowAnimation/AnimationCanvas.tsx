import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Snows from "./Snows";
import { OrbitControls } from "@react-three/drei";

const AnimationCanvas: React.FC = () => {
  return (
    <Canvas legacy={false} camera={{ position: [200, 5, 200], fov: 20 }}>
      <Suspense fallback={null}>
        <Snows />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default AnimationCanvas;
