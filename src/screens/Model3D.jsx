import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Scene, CameraController } from "../components/Scene";
import RadioList from "../components/RadioList";
import Instructions from "../components/Instructions";

function Model3D() {
  const [layers, setLayers] = useState();
  const { progress } = useProgress();
  const camera = { fov: 70, position: [0, 0, 5] };

  return (
    <section>
      {/* <header></header> */}
      <div className="canvas_container">
        <Instructions />
        <Canvas className="canvas" camera={camera} shadowMap>
          <Suspense
            fallback={<Html center>{Math.floor(progress)} % loaded</Html>}
          >
            <CameraController />
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            <Scene setter={setLayers} />
          </Suspense>
        </Canvas>
        <RadioList layers={layers} />
      </div>
      {/* <div className="relleno"></div> */}
    </section>
  );
}

export default Model3D;
