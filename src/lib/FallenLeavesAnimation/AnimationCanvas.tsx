import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Points from "./Points";

const AnimationCanvas: React.FC = () => {
  return (
    <Canvas legacy={false} camera={{ position: [0, 0, 50], fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};

export default AnimationCanvas;
