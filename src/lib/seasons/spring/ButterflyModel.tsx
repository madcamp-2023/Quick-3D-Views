import * as React from "react";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import butterfly from "../../../assets/glbs/butterfly.glb?url";
import butterfly2 from "../../../assets/glbs/butterfly2.glb?url";
import butterfly3 from "../../../assets/glbs/butterfly3.glb?url";

const ButterflyModel = () => {
  const {
    nodes: butterflyNodes,
    materials: butterflyMaterials,
    animations: butterflyAnimations,
  } = useGLTF(butterfly);
  const {
    nodes: butterfly2Nodes,
    materials: butterfly2Materials,
    animations: butterfly2Animations,
  } = useGLTF(butterfly2);
  const {
    nodes: butterfly3Nodes,
    materials: butterfly3Materials,
    animations: butterfly3Animations,
  } = useGLTF(butterfly3);

  const { ref: butterflyRef, actions: butterflyActions } =
    useAnimations(butterflyAnimations);

  const { ref: butterfly2Ref, actions: butterfly2Actions } =
    useAnimations(butterfly2Animations);

  const { ref: butterfly3Ref, actions: butterfly3Actions } =
    useAnimations(butterfly3Animations);

  React.useEffect(() => {
    if (butterflyActions["Flying"]) {
      butterflyActions["Flying"].play();
    }
  }, [butterflyActions]);

  React.useEffect(() => {
    if (butterfly2Actions["fly"]) {
      butterfly2Actions["fly"].setEffectiveTimeScale(0.3);
      butterfly2Actions["fly"].play();
    }
  }, [butterfly2Actions]);

  React.useEffect(() => {
    if (butterfly3Actions["fly"]) {
      butterfly3Actions["fly"].setEffectiveTimeScale(0.6);
      butterfly3Actions["fly"].play();
    }
  }, [butterfly3Actions]);

  const startTime2 = React.useRef([0, 0.5, 1.0]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = 1;
    const amplitude = 0.01;

    [butterflyRef, butterfly2Ref, butterfly3Ref].forEach((ref, index) => {
      if (time > startTime2.current[index] && ref.current) {
        ref.current.position.y +=
          Math.sin((time - startTime2.current[index]) * speed) * amplitude;
      }
    });
  });

  return (
    <group>
      <primitive
        ref={butterflyRef}
        object={butterflyNodes.root}
        receiveShadow
        castShadow
        material={butterflyMaterials.default}
        position={[0, 8, -24]}
        rotation={[Math.PI, 0, Math.PI / 4]}
        scale={[1, 1, 1]}
      />

      <primitive
        ref={butterfly3Ref}
        object={butterfly3Nodes.root}
        receiveShadow
        castShadow
        material={butterfly3Materials.default}
        position={[4.5, 7, -10]}
        rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 4]}
        scale={[30, 30, 30]}
      />

      <primitive
        ref={butterfly2Ref}
        object={butterfly2Nodes.root}
        receiveShadow
        castShadow
        material={butterfly2Materials.default}
        position={[-3.5, 0, -2]}
        rotation={[-Math.PI / 4, -Math.PI / 4, -Math.PI / 4]}
        scale={[30, 30, 30]}
      />
    </group>
  );
};

export default ButterflyModel;
