import React from "react";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="section_1" id="section_1">
        <Section_1 />
      </section>
      <section className="section_2" id="section_2">
        <Section_2 />
      </section>
      <section className="section_3" id="section_3">
        <Section_3 />
      </section>
      <Footer />
    </div>
  );
}
