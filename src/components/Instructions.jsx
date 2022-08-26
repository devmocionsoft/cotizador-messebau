export default function Instructions({ children }) {
  return (
    <div className="instructions">
      <b>click izquierdo:</b>
      <br />
      <li>mover la camara</li>
      <br />
      <b>click derecho:</b>
      <br />
      <li>mover el modelo 3D</li>
      <br />
      <b>rueda del mouse:</b>
      <br />
      <li>ampliar o reducir el tamaño</li>
      {children}
    </div>
  );
}
