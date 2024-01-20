import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Points from "./Points";

import { AnimationCanvasProps } from "../types";

const AnimationCanvas: React.FC<AnimationCanvasProps> = ({
  camera,
  positions,
  updatePositions,
  bufferGeometryProps,
  bufferAttributeProps,
  pointProps,
}) => {
  return (
    <Canvas legacy={false} camera={camera}>
      <Suspense fallback={null}>
        <Points
          positions={positions}
          updatePositions={updatePositions}
          bufferGeometryProps={bufferGeometryProps}
          bufferAttributeProps={bufferAttributeProps}
          pointProps={pointProps}
        />
      </Suspense>
    </Canvas>
  );
};

export default AnimationCanvas;
