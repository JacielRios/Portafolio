import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          technologies: "Tecnologías",
          projects: "Proyectos",
          hello: "Hola, soy",
          myName: " JACIEL RIOS",
          about:
            "Y soy un desarrollador web. Actualmente estoy estudiando Ingeniería en Sistemas Computacionales y tengo un título técnico en programación. Además, me apasiona seguir aprendiendo de forma autodidacta. Estoy siempre buscando nuevos desafíos y oportunidades para desarrollar mis habilidades y crecer en mi carrera.",
          goodbye: "Gracias por visitar mi página",
          madeBy: "Hecho por JacielRM",
          contact: "Contacto",
          contactName: "Nombre",
          email: "Correo",
          message: "Mensaje",
          submit: "Enviar",
          nameError: "El nombre es requerido",
          emailError: "Debe ser un correo valido",
          messageError: "El mensaje es requerido",
          cv: "Descargar CV",
        },
      },
      en: {
        translation: {
          technologies: "Technologies",
          projects: "Projects",
          hello: "Hi I am",
          about:
            "And I am a web developer. Currently, I am studying Computer Systems Engineering and I have a technical degree in programming. Additionally, I am passionate about continuing to learn in a self-taught way. I am always looking for new challenges and opportunities to develop my skills and grow in my career.",
          goodbye: "Thanks for visiting my page",
          madeBy: "Made by JacielRM",
          contact: "Contact",
          contactName: "Name",
          email: "Email",
          message: "Message",
          submit: "Submit",
          nameError: "The name is required",
          emailError: "It must be a valid email",
          messageError: "The message is required",
        },
      },
    },
  });

export default i18n;
