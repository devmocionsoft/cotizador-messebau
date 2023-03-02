import { useEffect, useRef } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { listFromGltf } from "../utils/list";

export function Scene({ setter }) {
  const ref = useRef();
  const object = useLoader(FBXLoader, "/Stands.fbx");

  useEffect(() => {
    if (ref) {
      const scale = 0.3
      ref.current.scale.set(scale, scale, scale)
      ref.current.position.y = -1;
      const list = listFromGltf(ref.current.children[1].children[0].children[0].children);
      console.log(list);
      setter(list);
    }
  }, []);

  return <primitive ref={ref} object={object} />;
}

export const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    // controls.minDistance = 3;
    // controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
