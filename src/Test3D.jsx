import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
import { MTLLoader } from "three-stdlib";

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

function Scene(props) {
  const ref = useRef();
  useEffect(() => {
    if (ref) {
      ref.current.children[1].visible = false;
    }
  }, [ref]);

  const materials = useLoader(MTLLoader, "src/indoor plant_02.mtl");
  const object = useLoader(OBJLoader, "src/indoor plant_02.obj", (loader) => {
    console.log(loader);
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive ref={ref} object={object} {...props} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Test3D() {
  return (
    <div className="canvas_container">
      <Canvas camera={{ position: [0, 30, 180], fov: 40 }}>
        <Suspense fallback={<Loader />}>
          <CameraController />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Test3D;
