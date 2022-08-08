import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { listFromGltf } from "../utils/list";

export function Scene({ setter }) {
  const ref = useRef();
  const object2 = useLoader(GLTFLoader, "src/models/medium/StandsGeneral.gltf");

  useEffect(() => {
    if (ref) {
      ref.current.position.y = -2;
      const list = listFromGltf(ref.current.children)
      setter(list);
      console.log(list);
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
