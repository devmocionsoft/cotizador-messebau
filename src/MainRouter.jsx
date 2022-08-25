import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Model3D from "./screens/Model3D";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cotizador" element={<Model3D />} />
    </Routes>
  );
}
