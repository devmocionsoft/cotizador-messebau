import { Link } from "react-router-dom";

export default function Section_10() {
  let link =
    "https://www.youtube.com/watch?v=HpH1QwKX7aY&list=PLXwtQuclmBuKC5phmqtL15nrPPZ2LRL6a&utm_source=email_marketing&utm_medium=email&utm_campaign=casos_de_exito_youtube&utm_id=mocion_agencia_interactiva";
  let img1 =
    "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fparte4_context.png?alt=media&token=4a4bf2f4-8c83-4dfa-b275-86db1cbcbcba";
  let img2 =
    "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fparte5(galery).png?alt=media&token=6a483065-7c9d-4397-ab0b-8da89771de3d";
  return (
    <section className="section_2" id="stand_prediseñados">
      <img className="footer" src={img1} alt="" />
      <p className="stand_descripcion">
        <b>
          Puedes personalizar personalmente el diseño y las necesidades del
          proyecto desde nuestra plataforma. Nuestros stands prediseñados
          cumplen el objetivo de optimizar costos y tiempo de producción sin
          perder la calidad y exclusividad que nos caracteriza. Integramos
          detalles de cada marca a estos diseños para sumar y personalizar cada
          proyecto. Este formato nos permite ofrecer un servicio 24/7 con un
          diseño minimalista y eficiente
        </b>
      </p>
      <Link className="btn2PreDi" to="/cotizador">
        <b>COTIZADOR</b>
      </Link>
      <img className="footer" src={img2} alt="" />
    </section>
  );
}
