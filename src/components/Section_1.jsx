const titulo =
  "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fparte2(tittle).png?alt=media";
const images =
  "https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fparte3(photos).png?alt=media";

export default function Section_1() {
  return (
    <div className="section_1_container">
      <img className="stand_custom" src={titulo} alt="Stand custom" />
      <img className="stand_custom-images" src={images} alt="Imagenes stands" />
    </div>
  );
}
