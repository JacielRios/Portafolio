import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import { useTranslation } from 'react-i18next';

import "@styles/Form.css";

const Form = () => {
  const { t } = useTranslation();
  const contactForm = useRef();

  const { enqueueSnackbar } = useSnackbar();

  const handleAlertSuccess = (variant) => () => {
    enqueueSnackbar("¡Gracias!, el mensaje se envio corretamente", { variant });
  };
  const handleAlertError = (variant) => () => {
    enqueueSnackbar(
      "Lo siento hubo un error, por favor considera contactarme por alguna red social.",
      { variant }
    );
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_00695hc",
        "template_2k5yncu",
        contactForm.current,
        "5AK9NVWALWQOssHvB"
      )
      .then(handleAlertSuccess("success"), handleAlertError("error"));
  };

  const [formState, setFormState] = useState({
    from_name: "",
    from_email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!formState.from_name) {
      nameError = `${t('nameError')}`;
    }
    if (!formState.from_email.includes("@")) {
      emailError = `${t('emailError')}`;
    }
    if (!formState.message) {
      messageError = `${t('messageError')}`;
    }

    if (nameError || emailError || messageError) {
      setFormState({ ...formState, nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      sendEmail();
      setFormState({
        from_name: "",
        from_email: "",
        message: "",
        nameError: "",
        emailError: "",
        messageError: "",
      });
    }
  };

  return (
    <>
      <h2 className="title">{t('contact')}</h2>
      <form
        ref={contactForm}
        onSubmit={handleSubmit}
        className="form-container"
      >
        <div className="form-group">
          <input
            name="from_name"
            className="form-input"
            type="text"
            id="name"
            placeholder=" "
            value={formState.from_name}
            onChange={handleChange}
          />
          <label htmlFor="name" className="form-label">
            {t('contactName')}:
          </label>
          <input
            name="from_email"
            className="form-input"
            type="email"
            id="email"
            placeholder=" "
            value={formState.from_email}
            onChange={handleChange}
          />
          <label htmlFor="email" className="form-label">
            {t('email')}:
          </label>
          <textarea
            name="message"
            className="form-input"
            id="message"
            placeholder=" "
            value={formState.message}
            onChange={handleChange}
          />
          <label className="form-label" id="label-area" htmlFor="message">
            {t('message')}:
          </label>
        </div>
        <div style={{ color: "red" }}>{formState.nameError}</div>
        <div style={{ color: "red" }}>{formState.emailError}</div>
        <div style={{ color: "red" }}>{formState.messageError}</div>
        <div className="button-container">
          <Button className="form-button" type="submit">
            {t('submit')}
          </Button>
        </div>
        
      </form>
    </>
  );
};

export default Form;
