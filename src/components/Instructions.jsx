export default function Instructions({ children }) {
  return (
    <div>
      <b className="tittle_instruction">INSTRUCCIONES</b>
      <div className="instructions">
        <div  className="instructions__line_uno">
          <b>click izquierdo</b>
          <p>mover la camara</p>
          <br />
        </div>
        <div className="instructions__line_dos">
        <b>click derecho</b>
        <p>mover modelo</p>
        <br />
        </div>
        <div className="instructions__line_tres">
          <b>rueda del mouse</b>
          <p>ampliar o reducir el tamaño</p>
        </div>
        {children}
      </div>
    </div>
  );
}
