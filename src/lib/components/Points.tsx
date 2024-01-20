import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { ItemProps } from "../types";

const Points: React.FC<ItemProps> = ({
  positions,
  updatePositions,
  bufferGeometryProps,
  bufferAttributeProps,
  pointProps,
}) => {
  const bufferRef = useRef<THREE.BufferAttribute | null>(null);

  useFrame(() => {
    if (updatePositions && bufferRef.current) {
      updatePositions(bufferRef.current.array as Float32Array);
      bufferRef.current.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry {...bufferGeometryProps}>
        <bufferAttribute
          ref={bufferRef}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
          {...bufferAttributeProps}
        />
      </bufferGeometry>
      <pointsMaterial {...pointProps} />
    </points>
  );
};

export default Points;
