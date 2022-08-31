export default function ModalContactUs({ setModal }) {
  const onDismiss = () => setModal(false);
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal_container" onClick={onDismiss}>
      <div className="modal_div" onClick={stopPropagation}>
        <div className="modal_form">
          <span>CUENTANOS TU REQUERIMIENTO</span>
          <input type="text" placeholder="NOMBRE" />
          <input type="text" placeholder="CORREO" />
          <span style={{ width: "100%", marginBottom: "-10px" }}>
            DESCRIPCIÓN
          </span>
          <textarea rows={8} />
          <button>
            <b>ENVIAR</b>
          </button>
        </div>
        <div className="modal_logo">
          <img src="/contactUs/logo.png" alt="Messebau" />
        </div>
      </div>
    </div>
  );
}
