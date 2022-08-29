import "../styles/Header.css";

let background =
  "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fhome(fondo).png?alt=media";
let logo =
  "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fhome(logo).png?alt=media";

export default function Header() {
  return (
    <section className="header" id="about_us">
      <nav>
        <a href="#about_us">NOSOTROS</a>
        <a href="#stand_custom" id="back">STAND CUSTOM</a>
        <a href="#stand_prediseñados">STAND PREDISEÑADOS</a>
        <a href="#ledup">LEDUP</a>
      </nav>
      <img className="header_bg" src={background} alt="Background" />
      <img className="header_logo" src={logo} alt="Logo Mesebau" />
      <p className="header_descripcion">
        <b>Messebau® Latam</b> es una empresa especializada en diseño
        industrial, enfocado en proyectos de exhibición de alta complejidad.{" "}
        <br />
        <br />
        Nuestro equipo está integrado por arquitectos, ingenieros, diseñadores
        Industriales y estrategas con más de 20 años de experiencia creando y
        consolidando la identidad de marcas de empresas nacionales e
        internacionales.
        <br />
        <br /> Contamos con experiencia regional e internacional en los recintos
        y países con mayor alcance tecnológico en cuanto a eventos y ferias se
        refiere: Messe Frankfurt, Messe Düsseldorf, Messe Berlín, Hannover
        Messe, Feria Bilbao, Fira Barcelona, Ifema Madrid, Fibes Sevilla, Fiera
        Milano, Milano Convention Center, Paris Expo Porte de Versailles, Miami
        Convention Center, Javits Center NY, WTC Sao Paulo, Rural de Buenos
        Aires, Casa Piedra SCL , Espacio Riesco SCL.
      </p>
    </section>
  );
}
