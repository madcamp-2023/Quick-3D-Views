import * as React from "react";
import { Canvas } from "@react-three/fiber";

import Sky from "./Sky";
import Ocean from "./Ocean";

const Summer: React.FC<{ isDayTime?: boolean }> = ({ isDayTime = true }) => {
  return (
    <Canvas
      camera={{ position: [-100, 5, -100], fov: 50, near: 1, far: 20000 }}
    >
      <React.Suspense fallback={null}>
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight
          position={[0, 40, 0]}
          decay={0}
          distance={45}
          penumbra={1}
          intensity={100}
        />
        <spotLight
          position={[-20, 0, 10]}
          color="white"
          angle={0.15}
          decay={0}
          penumbra={-1}
          intensity={30}
        />
        <spotLight
          position={[20, -10, 10]}
          color="white"
          angle={0.2}
          decay={0}
          penumbra={-1}
          intensity={20}
        />
        <Ocean />
        <Sky isDayTime={isDayTime} />
      </React.Suspense>
    </Canvas>
  );
};

export default Summer;
