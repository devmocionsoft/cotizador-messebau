import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
import { MTLLoader } from "three-stdlib";
import CheckboxList from "./components/CheckboxList";
import RadioList from "./components/RadioList";

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

  useEffect(() => {
    if (ref) {
      setter(ref.current.children);
      // ref.current.position.y = -4;
    }
  }, [ref]);

  const materials = useLoader(MTLLoader, "src/textures/Silla_Kansas.mtl");
  const object = useLoader(OBJLoader, "src/Silla.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive ref={ref} object={object} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Test3D() {
  const [layers, setLayers] = useState([]);
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
      {layers.length > 0 ? <CheckboxList list={layers} /> : null}
      {layers.length > 0 ? <RadioList list={layers} /> : null}
    </div>
  );
}

export default Test3D;
