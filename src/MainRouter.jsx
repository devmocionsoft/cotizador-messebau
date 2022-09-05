import { Routes, Route } from "react-router-dom";
// import Home from "./screens/Home";
import Model3D from "./screens/Model3D";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Model3D />} />
      {/* <Route path="/cotizador" element={<Home />} /> */}
    </Routes>
  );
}
