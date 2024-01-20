// App.tsx
import React, { Suspense, useCallback, useMemo, useState } from "react";
import * as THREE from "three";

import { Canvas, useLoader } from "@react-three/fiber";

import Points from "../components/Points";
import { RippleAnimationProps } from "../types";

import circleImg from "../../assets/circle.png";

const RippleAnimation: React.FC<RippleAnimationProps> = ({
  animationSetteings = { animationTime: 15, frequency: 0.002, amplitude: 0.5 },
  pointsConfig = {
    count: 50,
    sep: 1,
  },
  bufferGeometryProps = { attach: "geometry" },
  bufferAttributeProps = { attach: "attributes-position" },
  pointProps = {
    attach: "material",
    color: 0x00aaff,
    size: 0.3,
    sizeAttenuation: true,
    transparent: false,
    alphaTest: 0.5,
    opacity: 1.0,
  },
}) => {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);

  const [time, setTime] = useState(0);

  const { animationTime, frequency, amplitude } = animationSetteings;
  const { count, sep } = pointsConfig;

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(frequency * (x ** 2 + z ** 2 + time)) * amplitude;
    },
    [time, frequency, amplitude]
  );

  const positions: THREE.TypedArray = useMemo(() => {
    const positions = [0, 0, 0];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * xi;
        const z = sep * zi;
        const y = 0;

        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  const updatePositions: (positionsArray: Float32Array) => void = useCallback(
    (positionsArray: Float32Array) => {
      setTime((prevTime) => prevTime + animationTime);
      for (let i = 0; i < positionsArray.length; i += 3) {
        const x = positionsArray[i];
        const z = positionsArray[i + 2];
        positionsArray[i + 1] = graph(x, z);
      }
    },
    [animationTime, graph]
  );

  return (
    <Canvas legacy={false} camera={{ position: [50, 5, 50], fov: 50 }}>
      <Suspense fallback={null}>
        <Points
          positions={positions}
          updatePositions={updatePositions}
          bufferGeometryProps={bufferGeometryProps}
          bufferAttributeProps={bufferAttributeProps}
          pointProps={{ ...pointProps, map: imgTex }}
        />
      </Suspense>
    </Canvas>
  );
};

export default RippleAnimation;
