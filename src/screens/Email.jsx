import { useRef } from "react";
import emailjs from "@emailjs/browser"

export default function Email() {

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_uwbq4vo', 'template_dy9nfio', e.target, 'oDjYzEOUrXRQG9Rxi')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="vertical">
      <h1>Contact form</h1>
      <form className="vertical" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Correo" />
        <textarea name="message" rows="4"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
