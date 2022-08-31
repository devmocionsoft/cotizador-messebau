import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Scene, CameraController } from "../components/Scene";
import RadioList from "../components/RadioList";
import Instructions from "../components/Instructions";

function Model3D() {
  const [layers, setLayers] = useState([]);
  const { progress } = useProgress();
  const camera = { fov: 70, position: [0, 0, 5] };

  const onClick = () => {
    // filtrar objects visibles
    const li = layers.map((l) => l.items.filter((i) => i.visible));
    // merge array de arrays
    var merged = [].concat.apply([], li);
    console.log("Weee", merged);
  };

  return (
    <section>
      <div className="canvas_container">
        <img className="logo_print" src="https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Flogo.png?alt=media&token=0a564515-f68e-4a86-a207-a03e2bc6afd4" alt="" />
        <Instructions>
          {/* <button onClick={onClick}>Press me!</button> */}
        </Instructions>
        <Canvas className="canvas" camera={camera}>
          <Suspense
            fallback={<Html center>{Math.floor(progress)} % loaded</Html>}
          >
            <CameraController />
            <ambientLight intensity={0.5} />
            {/* <pointLight position={[10, 10, 10]} /> */}
            <Scene setter={setLayers} />
          </Suspense>
        </Canvas>
        <RadioList layers={layers} />
      <img className="select_fake" src="https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fselect_fake.png?alt=media&token=ee3f4e8d-23f5-4265-ba7f-189d03ab8c50" alt="" />
      </div>
      {/* <div className="relleno"></div> */}
    </section>
  );
}

export default Model3D;
