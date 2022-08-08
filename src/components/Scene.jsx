import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function Scene({ setter }) {
  const ref = useRef();
  const object2 = useLoader(GLTFLoader, "src/models/medium/StandsGeneral.gltf");
  // const object2 = useLoader(GLTFLoader, "src/models/medium/modified.gltf");

  useEffect(() => {
    if (ref) {
      let meshList = {};
      ref.current.position.y = -2;
      ref.current.children.forEach((item) => {
        const label = item.name;
        meshList[label] = item.children;
        setter(meshList);
      });
      console.log(meshList);
    }
  }, []);
  return <primitive ref={ref} object={object2.scene} />;
}

export const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
