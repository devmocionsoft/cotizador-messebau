import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";

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

const objUrl = "";

function Scene() {
  const obj = useLoader(OBJLoader, objUrl);
  return <primitive object={obj} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Test3D() {
  return (
    <div className="canvas_container">
      <Canvas>
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
