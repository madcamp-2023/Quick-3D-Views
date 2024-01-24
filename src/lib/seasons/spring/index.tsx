import * as React from "react";
import * as THREE from "three";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";
import Petals from "./Petals";


function Light() {
  const ref = React.useRef<THREE.Group>(null);
  useFrame((_) => {
    if (ref.current) {
      ref.current.rotation.x = _.clock.elapsedTime;
    }
  });
  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

function Rig() {
  const [vec] = React.useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));
  return <></>;
}

const Spring: React.FC<{ isDayTime?: boolean }> = ({ isDayTime = true }) => {
  const bgTexture = useLoader(THREE.TextureLoader, "/spring_bg.jpg");
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 160], fov: 20 }}>
      <React.Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Model
          position={[-4.5, -4, 0]}
          rotation={[0, -2.8, 0]}
          isDayTime={isDayTime}
        />
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="red" intensity={2} />
        <Light />
        <Rig />
        <Petals />
      </React.Suspense>
      <OrbitControls makeDefault />

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial map={bgTexture} />
      </mesh>
    </Canvas>
  );
};

export default Spring;