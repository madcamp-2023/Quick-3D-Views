import React, { useMemo, useRef } from "react";
import * as THREE from "three";

import { useFrame, useLoader } from "@react-three/fiber";
import snowImg from "../../assets/snow.png";

const Snows: React.FC = () => {
  const imgTex = useLoader(THREE.TextureLoader, snowImg);

  const bufferRef = useRef<THREE.BufferAttribute | null>(null);

  const count = 500;

  const positions: THREE.TypedArray = useMemo(() => {
    const positions = [];

    for (let i = 0; i < count; i++) {
      positions.push(
        Math.random() * 500 - 200,
        Math.random() * 500 - 250,
        Math.random() * 400 - 200
      );
    }

    return new Float32Array(positions);
  }, [count]);

  useFrame((state) => {
    if (bufferRef.current) {
      const positions = bufferRef.current.array;
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < count; i++) {
        const idx = i * 3;

        positions[idx + 1] -= 0.5 + Math.random() * 0.5;

        positions[idx] += Math.sin(time + i) * 0.3;
        positions[idx + 2] += Math.cos(time + i) * 0.3;

        if (positions[idx + 1] < -250) {
          positions[idx + 1] = 250;
          positions[idx] = Math.random() * 300 - 150;
          positions[idx + 2] = Math.random() * 400 - 200;
        }
      }

      if (bufferRef.current !== null) {
        bufferRef.current.needsUpdate = true;
      }
    }
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach={"attributes-position"}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        // color={0x00aaff}
        size={10}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};

export default Snows;
