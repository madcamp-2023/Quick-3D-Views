import React, { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";

import { useFrame, useLoader } from "@react-three/fiber";
import flowerImg from "../../assets/flower.png";

const Points: React.FC = () => {
  const imgTex = useLoader(THREE.TextureLoader, flowerImg);

  const petalsRef = useRef<THREE.BufferAttribute | null>(null);

  const count = 500; // 꽃잎의 개수
  const petalSize = 2; // 꽃잎의 크기

  // 꽃잎 초기 위치 설정
  const positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        Math.random() * 500 - 200, // x
        Math.random() * 500 - 250, // y
        Math.random() * 400 - 200  // z
      );
    }
    return new Float32Array(positions);
  }, [count]);

  // 프레임마다 꽃잎의 위치 업데이트
  useFrame((state) => {
    if (petalsRef.current) {
      const positions = petalsRef.current.array;
      const time = state.clock.getElapsedTime(); // 현재 시간
  
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const x = positions[idx];
        const y = positions[idx + 1];
        const z = positions[idx + 2];
  
        // y 좌표 감소 (내리는 효과)
        positions[idx + 1] -= 0.5 + Math.random() * 0.5;
  
        // x, z 좌표 움직임 (바람에 흔들리는 효과)
        positions[idx] += Math.sin(time + i) * 0.3;
        positions[idx + 2] += Math.cos(time + i) * 0.3;
  
        // 꽃잎이 화면 밖으로 나갔을 때 다시 위에서 시작
        if (positions[idx + 1] < -250) {
          positions[idx + 1] = 250;
          positions[idx] = Math.random() * 300 - 200;
          positions[idx + 2] = Math.random() * 400 - 200;
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

export default Points;
