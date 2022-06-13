import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
import { MTLLoader } from "three-stdlib";
import mt from "../../material.json";
import * as THREE from "three";

import CheckboxList from "../components/CheckboxList";
import RadioList from "../components/RadioList";

const CameraController = () => {
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

function Scene({ setter }) {
  const ref = useRef();
  const materials = useLoader(MTLLoader, "src/textures/Silla_Channel.mtl");
  const object = useLoader(OBJLoader, "src/Silla.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useEffect(() => ref && setter(ref.current.children), [ref]);
  // ref.current.position.y = -4;
  return <primitive ref={ref} object={object} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Test3D() {
  const [layers, setLayers] = useState([]);
  const material = new THREE.MeshPhongMaterial(mt);
  useEffect(() => layers[0] && console.log(layers), [layers]);
  useEffect(() => {
    layers[0] &&
      setTimeout(() => {
        console.log(material);
        // layers[0].material = material;
      }, 3000);
  }, [layers]);

  return (
    <div className="test3d_container">
      <div className="canvas_container">
        <Canvas camera={{ fov: 30, position: [0, 0, 5] }}>
          <Suspense fallback={<Loader />}>
            <CameraController />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Scene setter={setLayers} />
          </Suspense>
        </Canvas>
      </div>
      {layers.length > 0 ? (
        <>
          <CheckboxList list={layers} />
          <RadioList list={layers} />
        </>
      ) : null}
    </div>
  );
}

export default Test3D;
