import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import RadioList from "../components/RadioList";
import { Scene, CameraController } from "../components/Scene";
import Instructions from "../components/Instructions";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Model3D() {
  const [layers, setLayers] = useState();

  return (
    <div className="model3d_container">
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
        <Instructions />
      </div>
      <div className="selector">
        {layers
          ? Object.keys(layers).map((label, key) => (
              <div key={key} className="item_container">
                <h4>{label}</h4>
                <RadioList list={layers[label]} label={label} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Model3D;
