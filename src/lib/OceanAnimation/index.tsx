import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls, Cloud, Sky as SkyImpl } from "@react-three/drei";
import { Water } from "three-stdlib";

import waternormals from "../../assets/waternormals.jpeg";

extend({ Water });

function Sky() {
  const cloudRefs = useRef([]);
  cloudRefs.current = [];

  const addCloudRef = (el) => {
    if (el && !cloudRefs.current.includes(el)) {
      cloudRefs.current.push(el);
    }
  };

  useFrame(() => {
    cloudRefs.current.forEach((cloud, index) => {
      // 각 구름의 이동 속도와 크기에 따라 변화
      const speed = 0.1 + 0.1 * index;
      cloud.position.x -= speed;

      // 클라우드가 특정 지점에 도달하면 다시 오른쪽으로 이동 시작
      if (cloud.position.x < -500) {
        cloud.position.x = 500;
      }
    });
  });

  return (
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
          position={[index * 100, 150, 0]} // 초기 위치 설정
        />
      ))}
    </>
  );
}

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, waternormals);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

const OceanAnimation = () => {
  return (
    <Canvas
      camera={{ position: [-100, 5, -100], fov: 50, near: 1, far: 20000 }}
    >
      {/* <pointLight position={[100, 100, 100]} /> */}
      {/* <pointLight position={[-100, -100, -100]} /> */}
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
      <Suspense fallback={null}>
        <Ocean />
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls />
    </Canvas>
  );
};

export default OceanAnimation;
