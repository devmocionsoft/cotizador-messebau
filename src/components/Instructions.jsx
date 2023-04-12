export default function Instructions() {
  return (
    <div className="instructions_container">
      <b className="tittle_instruction">INSTRUCCIONES</b>
      <div className="instructions">
        <div className="instructions__line_uno">
          <div className="instructions__line_img">
            <img src="https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fraton%201.png?alt=media&token=f1e5b4f4-ceef-451b-8fda-2818c8444bbb" alt="" />
          </div>
          <div className="instructions__line_uno_text">
            <b>CLICK IZQUIERDO</b>
            <p>MOVER CAMARA</p>
          </div>
          <br />
        </div>
        <div className="instructions__line_dos">
          <div className="instructions__line_img">
            <img src="https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Fraton%202.png?alt=media&token=1f7aed7d-6a24-4a8b-a804-028d08caaa5c" alt="" />
          </div>
          <div className="instructions__line_uno_text">
            <b>CLICK DERECHO</b>
            <p>MOVER MODELO</p>
          </div>
          <br />
        </div>
        <div className="instructions__line_tres">
          <div className="instructions__line_img">
            <img src="https://firebasestorage.googleapis.com/v0/b/vassar-4f811.appspot.com/o/mesebau%2Frato%203.png?alt=media&token=abc94c0c-7fd9-434f-bc94-a6f951c1b8f4" alt="" />
          </div>
          <div className="instructions__line_uno_text">
            <b>RUEDA DEL MOUSE</b>
            <p>AMPLIAR O REDUCIR<br />EL TAMAÑO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
