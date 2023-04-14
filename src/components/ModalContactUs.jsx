import { message } from "antd";
import { useState } from "react";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
export default function ModalContactUs({ setModal, data = "" }) {
  const [info, setInfo] = useState(data)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  const onDismiss = () => setModal(false);
  const stopPropagation = (e) => e.stopPropagation();
  const clickModal = () => {
    const c1 = name.length > 8
    const c2 = validEmailRegex.test(email);
    if (c1 && c2) {
      console.log(name, email);
      message.success("Correo enviado")
    } else {
      c1 ? message.warning("Revisa tu correo") : message.warning("Prueba con tu nombre completo")
    }
    // alert("Correo enviado")
    // setModal(false);
  }

  return (
    <div className="modal_container" onClick={onDismiss}>
      <div className="modal_div" onClick={stopPropagation}>
        <div className="modal_form">
          <span>CUENTANOS TU REQUERIMIENTO</span>
          <input type="text" placeholder="NOMBRE" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="CORREO" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span style={{ width: "100%", marginBottom: "-10px" }}>
            DESCRIPCIÓN
          </span>
          <textarea rows={8} value={info} onChange={(e) => setInfo(e.target.value)} />
          <button onClick={clickModal}>
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
