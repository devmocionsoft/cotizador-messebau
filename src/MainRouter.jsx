import { Routes, Route } from "react-router-dom";
import Test3D from "./screens/Test3D";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Test3D />} />
    </Routes>
  );
}
