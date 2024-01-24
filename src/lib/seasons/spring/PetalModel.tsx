import * as React from "react";
import * as THREE from "three";

import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import flowers from "../../../assets/glbs/flowers.glb?url";

interface PetalObjectProps extends Omit<PrimitiveProps, "object"> {
  object: THREE.Object3D;
}

const PetalObject = React.forwardRef<THREE.Object3D, PetalObjectProps>(
  ({ object, position, rotation, scale, ...props }, ref) => {
    return (
      <primitive
        ref={ref}
        object={object}
        position={position}
        rotation={rotation}
        scale={scale}
        {...props} // spread the remaining props
      />
    );
  }
);

const PetalModel = () => {
  const material = React.useMemo(() => {
    new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#bb86a1").convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
    });
  }, []);

  const { nodes: flowersNodes } = useGLTF(flowers);

  // Refs and start times for each petal
  const petalRef1 = React.useRef<THREE.Object3D>(null);
  const petalRef2 = React.useRef<THREE.Object3D>(null);
  const petalRef3 = React.useRef<THREE.Object3D>(null);
  const petalRef4 = React.useRef<THREE.Object3D>(null);
  const petalRef5 = React.useRef<THREE.Object3D>(null);
  const petalRef6 = React.useRef<THREE.Object3D>(null);
  const petalRef7 = React.useRef<THREE.Object3D>(null);
  const petalRef8 = React.useRef<THREE.Object3D>(null);
  const petalRef9 = React.useRef<THREE.Object3D>(null);
  const petalRef10 = React.useRef<THREE.Object3D>(null);
  const petalRef11 = React.useRef<THREE.Object3D>(null);
  const petalRef12 = React.useRef<THREE.Object3D>(null);
  const petalRef13 = React.useRef<THREE.Object3D>(null);
  const petalRef14 = React.useRef<THREE.Object3D>(null);
  const startTime = React.useRef([
    0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3,
  ]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = 1;
    const amplitude = 0.005;

    [
      petalRef1,
      petalRef2,
      petalRef3,
      petalRef4,
      petalRef5,
      petalRef6,
      petalRef7,
      petalRef8,
      petalRef9,
      petalRef10,
      petalRef11,
      petalRef12,
      petalRef13,
      petalRef14,
    ].forEach((ref, index) => {
      if (time > startTime.current[index] && ref.current) {
        ref.current.position.y +=
          Math.sin((time - startTime.current[index]) * speed) * amplitude;
      }
    });
  });

  React.useEffect(() => {
    useGLTF.preload(flowers);
  }, []);

  return (
    <group>
      <PetalObject
        ref={petalRef1}
        object={flowersNodes.petal_013}
        receiveShadow
        castShadow
        material={material}
        position={[-3, -2, -2]}
        rotation={[0, Math.PI, Math.PI / 4]}
        scale={[24, 24, 24]}
      />

      <PetalObject
        ref={petalRef2}
        object={flowersNodes.petal_010}
        receiveShadow
        castShadow
        material={material}
        position={[-1, -1, -4]}
        rotation={[0, Math.PI, 0]}
        scale={[26, 26, 26]}
      />

      <PetalObject
        ref={petalRef3}
        object={flowersNodes.petal_008}
        receiveShadow
        castShadow
        material={material}
        position={[1, 0, -6]}
        rotation={[0, Math.PI, 0]}
        scale={[28, 28, 28]}
      />

      <PetalObject
        ref={petalRef4}
        object={flowersNodes.petal_014}
        receiveShadow
        castShadow
        material={material}
        position={[3, 1, -8]}
        rotation={[0, Math.PI, 0]}
        scale={[46, 46, 46]}
      />

      <PetalObject
        ref={petalRef5}
        object={flowersNodes.petal_009}
        receiveShadow
        castShadow
        material={material}
        position={[4, 2, -10]}
        rotation={[0, Math.PI, 0]}
        scale={[30, 30, 30]}
      />

      <PetalObject
        ref={petalRef6}
        object={flowersNodes.petal_005}
        receiveShadow
        castShadow
        material={material}
        position={[4.5, 4, -10]}
        rotation={[-Math.PI, Math.PI / 2, -Math.PI]}
        scale={[34, 34, 34]}
      />

      <PetalObject
        ref={petalRef7}
        object={flowersNodes.petal_006}
        receiveShadow
        castShadow
        material={material}
        position={[4, 6, -12]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[32, 32, 32]}
      />

      <PetalObject
        ref={petalRef8}
        object={flowersNodes.petal_004}
        receiveShadow
        castShadow
        material={material}
        position={[3, 7, -14]}
        rotation={[Math.PI, 0, Math.PI / 4]}
        scale={[42, 42, 42]}
      />

      <PetalObject
        ref={petalRef9}
        object={flowersNodes.petal_001}
        receiveShadow
        castShadow
        material={material}
        position={[2, 8, -16]}
        rotation={[Math.PI, 0, Math.PI / 4]}
        scale={[38, 38, 38]}
      />

      <PetalObject
        ref={petalRef10}
        object={flowersNodes.petal_002}
        receiveShadow
        castShadow
        material={material}
        position={[1, 8, -18]}
        rotation={[Math.PI / 4, Math.PI / 2, Math.PI / 4]}
        scale={[40, 40, 40]}
      />

      <PetalObject
        ref={petalRef11}
        object={flowersNodes.petal_003}
        receiveShadow
        castShadow
        material={material}
        position={[0, 7, -20]}
        rotation={[Math.PI / 4, -Math.PI / 4, -Math.PI / 4]}
        scale={[42, 42, 42]}
      />

      <PetalObject
        ref={petalRef12}
        object={flowersNodes.petal_007}
        receiveShadow
        castShadow
        material={material}
        position={[0, 6, -22]}
        rotation={[-Math.PI / 2, -Math.PI / 2, Math.PI / 4]}
        scale={[44, 44, 44]}
      />

      <PetalObject
        ref={petalRef13}
        object={flowersNodes.petal_012}
        receiveShadow
        castShadow
        material={material}
        position={[0, 5, -24]}
        rotation={[0, Math.PI, 0]}
        scale={[44, 44, 44]}
      />

      <PetalObject
        ref={petalRef14}
        object={flowersNodes.petal_011}
        receiveShadow
        castShadow
        material={material}
        position={[1, 3, -26]}
        rotation={[0, Math.PI, 0]}
        scale={[50, 50, 50]}
      />
    </group>
  );
};

export default PetalModel;
