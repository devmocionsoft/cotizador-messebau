import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Scene, CameraController } from "../components/Scene";
import RadioList from "../components/RadioList";
import Instructions from "../components/Instructions";

const logo =
  "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Flogo.png?alt=media&token=0a564515-f68e-4a86-a207-a03e2bc6afd4";
const selectFake =
  "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fselect_fake.png?alt=media&token=8bf1ef55-465e-4345-b295-5313f9c80a47";

function Model3D() {
  const [layers, setLayers] = useState([]);
  const { progress } = useProgress();
  const [light, setLight] = useState(true);
  // camera position [izq-der, arr-aba, ade-atras]
  const camera = { fov: 70, position: [0, 2, 5] };

  const onClick = () => {
    // filtrar objects visibles
    const li = layers.map((l) => l.items.filter((i) => i.visible));
    // merge array de arrays
    var merged = [].concat.apply([], li);
    console.log("Weee", merged);
  };

  const p = Math.floor(progress);

  return (
    <section>
      <div className="canvas_container">
        <img className="logo_print" src={logo} alt="" />
        <Instructions />
        <Canvas className="canvas" camera={camera}>
          <Suspense fallback={<Html center>{p} % loaded</Html>}>
            <CameraController />
            <ambientLight intensity={0.3} />
            <directionalLight
              intensity={0.5}
              position={[0, 3, 2]}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              castShadow
            />
            <Scene setter={setLayers} />
          </Suspense>
        </Canvas>
        <RadioList layers={layers} onClick={onClick} />
        <img className="select_fake" src={selectFake} alt="" />
      </div>
    </section>
  );
}

export default Model3D;
