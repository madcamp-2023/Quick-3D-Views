import React, { useRef, useMemo, createRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import leaf1Img from "../../assets/leaf1.png";
import leaf2Img from "../../assets/leaf2.png";
import leaf3Img from "../../assets/leaf3.png";
import leaf4Img from "../../assets/leaf4.png";

const Points: React.FC = () => {
  const leafImages = [leaf1Img, leaf2Img, leaf3Img, leaf4Img];
  const leafTextures = useLoader(THREE.TextureLoader, leafImages);
  const count = 200; // 꽃잎의 개수
  const petalSize = 5; // 꽃잎의 크기

  // 각 나뭇잎 유형에 대한 positions 생성
  const leafPositions = useMemo(() => {
    return leafTextures.map(() => {
      const positions = [];
      for (let i = 0; i < count; i++) {
        positions.push(
          Math.random() * 480 - 200, // x
          Math.random() * 500 - 250, // y
          Math.random() * 400 - 200  // z
        );
      }
      return new Float32Array(positions);
    });
  }, [count, leafTextures]);

  // 각 나뭇잎 유형에 대한 BufferAttribute Refs 생성
  const petalsRefs = useRef(leafTextures.map(() => createRef<THREE.BufferAttribute>()));

  // 각 나뭇잎 유형에 대한 useFrame 업데이트 로직
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    leafPositions.forEach((positions, index) => {
      const petalsRef = petalsRefs.current[index];
      if (petalsRef && petalsRef.current) {
        const positionsArray = petalsRef.current.array;

        for (let i = 0; i < count; i++) {
          const idx = i * 3;
          // y 좌표 감소 (내리는 효과)
          positionsArray[idx + 1] -= 0.5 + Math.random() * 0.3;
          // x, z 좌표 움직임 (바람에 흔들리는 효과)
          positionsArray[idx] += Math.sin(time + i) * 0.5;
          positionsArray[idx + 2] += Math.cos(time + i) * 0.3;
          // 꽃잎이 화면 밖으로 나갔을 때 다시 위에서 시작
          if (positionsArray[idx + 1] < -250) {
            positionsArray[idx + 1] = 250;
            positionsArray[idx] = Math.random() * 500 - 200;
            positionsArray[idx + 2] = Math.random() * 400 - 200;
          }
        }

        petalsRef.current.needsUpdate = true;
      }
    });
  });

  // 렌더링 로직에 각 나뭇잎 유형 추가
  return (
    <>
      {leafTextures.map((texture, index) => (
        <points key={index}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              ref={petalsRefs.current[index]}
              attach="attributes-position"
              array={leafPositions[index]}
              count={leafPositions[index].length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            attach="material"
            map={texture}
            size={petalSize}
            sizeAttenuation
            transparent={true}
          />
        </points>
      ))}
    </>
  );
};

export default Points;