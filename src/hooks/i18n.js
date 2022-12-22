import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
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
            about: "Soy desarrollador web. Actualmente estoy estudiando la carrera de ingeniería en sistemas computacionales, además de esto, estudio de forma autodidacta y cuento con un título de técnico en programación.",
            goodbye: "Gracias por visitar mi página",
            madeBy: "Hecho por JacielRM",
            contact: "Contacto",
            contactName: "Nombre",
            email: "Correo",
            message: "Mensaje",
            submit: "Enviar",
            nameError: "El nombre es requerido",
            emailError: "Debe ser un correo valido",
            messageError: "El mensaje es requerido"
        }
      },
      en: {
        translation: {
            technologies: "Technologies",
            projects: "Projects",
            hello: "Hi I am",
            about: "I am a web developer. I am currently studying computer systems engineering, in addition to this, I study self-taught and I have a programming technician degree.",
            goodbye: "Thanks for visiting my page",
            madeBy: "Made by JacielRM",
            contact: "Contact",
            contactName: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit",
            nameError: "The name is required",
            emailError: "It must be a valid email",
            messageError: "The message is required"
        }
      }
    }
  });

export default i18n;