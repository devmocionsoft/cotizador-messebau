import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import Model3D from "./screens/Model3D";
import ReactGA from "react-ga";
import { useEffect } from "react";

export default function MainRouter() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-238850559-1");
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname + location.search)
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cotizador" element={<Model3D />} />
    </Routes>
  );
}
