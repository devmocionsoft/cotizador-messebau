import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
// import { MTLLoader } from "three-stdlib";
// import CheckboxList from "../components/CheckboxList";
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
  const object2 = useLoader(GLTFLoader, "src/modelo/medium/Completo.gltf");

  useEffect(() => {
    if (ref) {
      console.log("ref > children", ref.current.children);
      setter(ref.current.children);
      ref.current.position.y = -1;
    }
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
        const label = item.name;
        // const label = labels[0];
        meshList[label] = item.children;
        // meshList[label]
        //   ? meshList[label].push(item)
        //   : (meshList[label] = [item]);
      });
      setLayersSorted(meshList);
      console.log(meshList);
    }
  }, [layers]);

  return (
    <div className="test3d_container">
      <div className="canvas_container">
        <Canvas
          style={{ height: "70%" }}
          camera={{ fov: 70, position: [0, 0, 5] }}
        >
          <Suspense fallback={<Loader />}>
            <CameraController />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Scene setter={setLayers} />
          </Suspense>
        </Canvas>
        <div className="instructions">
          <b>click izquierdo:</b>
          <br />
          <li>mover la camara</li>
          <br />
          <b>click derecho:</b>
          <br />
          <li>mover el modelo 3D</li>
          <br />
          <b>rueda del mouse:</b>
          <br />
          <li>ampliar o reducir el tamaño</li>
        </div>
      </div>
      <div className="selector">
        {layersSorted
          ? Object.keys(layersSorted).map((label, key) => (
              <div key={key} className="item_container">
                <h2>{label}</h2>
                <RadioList list={layersSorted[label]} label={label} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Test3D;
