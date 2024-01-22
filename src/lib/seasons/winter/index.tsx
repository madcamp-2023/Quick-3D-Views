import * as React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url);

  // 모델의 크기와 위치를 조정
  gltf.scene.scale.set(5, 5, 5); // 모델의 스케일 조정
  gltf.scene.position.set(0, 0, 0); // 모델의 위치 조정

  return <primitive object={gltf.scene} />;
}

const Winter: React.FC = () => {
  const modelUrl = "/glbs/winter.glb";

  return (
    <Canvas>
      <React.Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model url={modelUrl} />
        <OrbitControls />
      </React.Suspense>
    </Canvas>
  );
};

export default Winter;
