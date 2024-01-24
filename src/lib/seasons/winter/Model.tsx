import * as React from "react";
import * as THREE from "three";

import { useGLTF, Reflector } from "@react-three/drei";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  children?: React.ReactNode;
  isDayTime: boolean;
}

export default function Model(props: ModelProps) {
  const { isDayTime } = props;
  const group = React.useRef<THREE.Group>(null);
  const { nodes: snowman1Nodes } = useGLTF("/snowman1.glb");
  const { nodes: snowman2Nodes } = useGLTF("/snowman2.glb");
  const { nodes: snowman3Nodes } = useGLTF("/snowman3.glb");
  const { nodes: olafNodes } = useGLTF("/olaffrozen.glb");
  const { nodes: giftNodes } = useGLTF("/gift_box.glb");

  const material = React.useMemo(() => {
    new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#bb86a1").convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
    });
  }, []);

  const snowmanModel1 = snowman1Nodes.Sketchfab_Scene;
  const snowmanModel2 = snowman2Nodes.Sketchfab_Scene;
  const snowmanModel3 = snowman3Nodes.Sketchfab_Scene;
  const olafModel = olafNodes.Sketchfab_Scene;
  const giftBoxModel = giftNodes.Sketchfab_Scene;

  React.useEffect(() => {
    // useGLTF.preload(snowman1);
    // useGLTF.preload(snowman2);
    // useGLTF.preload(snowman3);
    // useGLTF.preload(olaffrozen);
    // useGLTF.preload(giftBox);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <Reflector
        resolution={1024}
        receiveShadow
        mirror={0}
        mixBlur={1}
        mixStrength={0.3}
        depthScale={1}
        minDepthThreshold={0.8}
        maxDepthThreshold={1}
        position={[0, 0, 8]}
        scale={[2, 2, 1]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        args={[70, 70]}
      >
        {/* #37474F */}

        {(Material: React.ElementType, props) => (
          <Material
            metalness={0.25}
            color={isDayTime ? "#60d9e9" : "#37474F"}
            roughness={1}
            {...props}
          />
        )}
      </Reflector>
      <primitive
        object={giftBoxModel}
        receiveShadow
        castShadow
        material={material}
        position={[2, 0, -10]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
        scale={[15, 15, 15]}
      />
      <primitive
        object={olafModel}
        receiveShadow
        castShadow
        material={material}
        position={[-1.93, 5.6, -5]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
        scale={[0.7, 0.7, 0.7]}
      />

      <primitive
        object={snowmanModel1}
        receiveShadow
        castShadow
        material={material}
        position={[-1.93, 1, -12]}
        rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
        scale={[1, 1, 1]}
      />
      <primitive
        object={snowmanModel2}
        receiveShadow
        castShadow
        material={material}
        position={[-1.93, 1, -15]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
        scale={[1, 1, 1]}
      />
      <primitive
        object={snowmanModel3}
        receiveShadow
        castShadow
        material={material}
        position={[-1.93, -0.2, -18]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
        scale={[40, 40, 40]}
      />
    </group>
  );
}
