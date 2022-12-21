import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "@styles/Form.css";

const Form = () => {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_00695hc",
        "template_2k5yncu",
        contactForm.current,
        "5AK9NVWALWQOssHvB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="title">Contacto</h2>
      <form ref={contactForm} onSubmit={sendEmail} className="form-container">
        <div className="form-group">
          <input
            name="from_name"
            className="form-input"
            type="text"
            id="name"
            placeholder=" "
          />
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            name="from_email"
            className="form-input"
            type="text"
            id="email"
            placeholder=" "
          />
          <label htmlFor="email" className="form-label">
            Correo:
          </label>
          <textarea
            name="message"
            className="form-input"
            id="message"
            placeholder=" "
          />
          <label className="form-label" id="label-area" htmlFor="message">
            Mensaje:
          </label>
        </div>
        <div className="button-container">
          <button type="submit" className="form-button">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
