import * as React from "react";
import * as THREE from "three";

import { useFrame } from "@react-three/fiber";
import { Cloud, Sky as SkyImpl, Stars } from "@react-three/drei";

const Sky = ({ isDayTime }: { isDayTime: boolean }) => {
  const cloudRefs = React.useRef<THREE.Group[]>([]);

  const addCloudRef = (el: THREE.Group) => {
    if (el && !cloudRefs.current.includes(el)) {
      cloudRefs.current.push(el);
    }
  };

  useFrame(() => {
    //* Change the position of cloud using speed and size
    cloudRefs.current.forEach((cloud: THREE.Group, index) => {
      const speed = 0.1 + 0.1 * index;
      cloud.position.x -= speed;

      //* if the cloud arrives end point, then restart animation
      if (cloud.position.x < -500) {
        cloud.position.x = 500;
      }
    });
  });

  return (
    <>
      {isDayTime ? (
        <>
          <SkyImpl />
          {[...Array(5)].map((_, index) => (
            <Cloud
              key={index}
              ref={addCloudRef}
              concentrate="outside"
              growth={10 + index * 5}
              color="white"
              opacity={1.25}
              seed={0.3 + index * 0.1}
              bounds={10 + index * 5}
              volume={200}
              position={[index * 100, 150, 0]}
            />
          ))}
        </>
      ) : (
        <>
          <SkyImpl
            mieCoefficient={0.5}
            mieDirectionalG={1}
            rayleigh={4}
            turbidity={10}
            sunPosition={[60000, -100000, 30000]} // 태양의 위치 조절
          />
          <Stars count={500}></Stars>
        </>
      )}
    </>
  );
};

export default Sky;
