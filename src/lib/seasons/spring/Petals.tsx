import * as React from "react";
import * as THREE from "three";

import { useFrame, useLoader } from "@react-three/fiber";


const Petals: React.FC = () => {
  const imgTex = useLoader(THREE.TextureLoader, "/flower.png");
  const petalsRef = React.useRef<THREE.BufferAttribute | null>(null);

  const count = 150;
  const petalSize = 2;

  const positions = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        Math.random() * 100 - 50, // x
        Math.random() * 100 - 50, // y
        Math.random() * 100 // z
      );
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame((state) => {
    if (petalsRef.current) {
      const positions = petalsRef.current.array;

      for (let i = 0; i < count; i++) {
        const idx = i * 3;

        positions[idx + 1] -= 0.1 + Math.random() * 0.5;

        positions[idx] += Math.sin(state.clock.elapsedTime + i) * 0.3;
        positions[idx + 2] += Math.cos(state.clock.elapsedTime + i) * 0.3;

        if (positions[idx + 1] < -25) {
          positions[idx + 1] = 100 - 50;
          positions[idx] = Math.random() * 100 - 50;
          positions[idx + 2] = Math.random() * 100;
        }
      }

      petalsRef.current.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={petalsRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={"pink"}
        size={petalSize}
        sizeAttenuation
        transparent={true}
      />
    </points>
  );
};

export default Petals;
