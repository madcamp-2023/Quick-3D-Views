import * as React from "react";
import * as THREE from "three";

import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Pointer from "./Pointer";
import Clump from "./Clump";

import autumn_bg from "../../../assets/autumn_bg.jpg";

const Autumn: React.FC = () => {
  const bgTexture = useLoader(THREE.TextureLoader, autumn_bg);

  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 100 }}
    >
      <React.Suspense fallback={<div>loading...</div>}>
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={1}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <Pointer />
          <Clump />
        </Physics>
        <Environment files={"/leaves.hdr"} />
        <OrbitControls minDistance={15} maxDistance={24} enableRotate={false} />

        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial map={bgTexture} />
        </mesh>
      </React.Suspense>
    </Canvas>
  );
};

export default Autumn;
