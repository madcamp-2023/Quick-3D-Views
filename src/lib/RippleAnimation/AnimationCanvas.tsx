import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Points from "./Points";

const AnimationCanvas: React.FC = () => {
  return (
    <Canvas legacy={false} camera={{ position: [200, 5, 200], fov: 50 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};

export default AnimationCanvas;
