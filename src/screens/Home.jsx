import React from "react";
import Section_09 from "../components/Section_0.9";
import Section_10 from "../components/Section_10";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="Section_1" id="Section_1">
        <Section_1 />
      </section>
      <section className="Section_2" id="Section_2">
        <Section_09 />
        <Section_10 />
      </section>
      <section className="section_3" id="Section_3">
        <Section_2 />
        <Section_3 />
      </section>
      <Footer />
    </div>
  );
}
