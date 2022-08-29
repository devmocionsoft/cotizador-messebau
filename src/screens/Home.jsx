import React from "react";
import Header from "../components/Header";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text">
      <Header />
      <Section_1 />
      <Section_2 className="section_2" id="section_2" />
      <Section_3 className="section_3" id="section_3" />
      <Footer />
    </div>
  );
}
