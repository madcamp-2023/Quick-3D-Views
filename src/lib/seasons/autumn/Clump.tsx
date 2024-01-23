import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

import MapleTree from "../../../assets/glbs/autumn_maple.glb?url";

const rfs = THREE.MathUtils.randFloatSpread;
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0,
  envMapIntensity: 1,
});

const redMaterial = new THREE.MeshStandardMaterial({
  color: "#f17941",
  roughness: 0,
  envMapIntensity: 1,
});
const orangeMaterial = new THREE.MeshStandardMaterial({
  color: "#fa991b",
  roughness: 0,
  envMapIntensity: 1,
});
const yellowMaterial = new THREE.MeshStandardMaterial({
  color: "#ee5b47",
  roughness: 0,
  envMapIntensity: 1,
});

const Clump = ({ mat = new THREE.Matrix4(), vec = new THREE.Vector3() }) => {
  const { nodes: mapleTreeNodes } = useGLTF(MapleTree);

  const orangeObject = mapleTreeNodes.orange_lambert12_0 as THREE.Mesh;

  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  })) as [React.RefObject<THREE.InstancedMesh>, any];

  useFrame(() => {
    if (ref.current) {
      for (let i = 0; i < 20; i++) {
        ref.current.getMatrixAt(i, mat);
        mat.scale(new THREE.Vector3(0.2, 0.2, 0.2));

        let material = redMaterial;
        if (i >= 5 && i < 10) material = orangeMaterial;
        else if (i >= 15) material = yellowMaterial;

        ref.current.setMatrixAt(i, mat);
        ref.current.setColorAt(i, material.color);

        api
          .at(i)
          .applyForce(
            vec
              .setFromMatrixPosition(mat)
              .normalize()
              .multiplyScalar(-40)
              .toArray(),
            [0, 0, 0]
          );
      }
      ref.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[orangeObject.geometry, baubleMaterial, 20]}
    />
  );
};

export default Clump;
