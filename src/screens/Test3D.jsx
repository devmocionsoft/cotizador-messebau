import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
import { MTLLoader } from "three-stdlib";

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
  const object2 = useLoader(GLTFLoader, "src/Sillas2.gltf");

  useEffect(() => {
    ref && setter(ref.current.children);
    ref.current.position.y = -1;
  }, [ref]);
  return <primitive ref={ref} object={object2.scene} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Test3D() {
  const [layers, setLayers] = useState([]);
  const [layersSorted, setLayersSorted] = useState();

  useEffect(() => {
    if (layers[0]) {
      let meshList = {};
      layers.forEach((item) => {
        const labels = item.name.split("_");
        // para explicarle a diseño el funcionamiento
        console.log(labels);
        const label = labels[0];
        meshList[label]
          ? meshList[label].push(item)
          : (meshList[label] = [item]);
      });
      setLayersSorted(meshList);
      console.log(meshList);
    }
  }, [layers]);

  return (
    <div className="test3d_container">
      <div className="canvas_container">
        <Canvas camera={{ fov: 10, position: [0, 0, 5] }}>
          <Suspense fallback={<Loader />}>
            <CameraController />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Scene setter={setLayers} />
          </Suspense>
        </Canvas>
      </div>
      <div className="selector">
        {layersSorted
          ? Object.keys(layersSorted).map((label, key) => (
              <div key={key} style={{ margin: 10 }}>
                <h2>{label}</h2>
                <RadioList list={layersSorted[label]} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Test3D;
