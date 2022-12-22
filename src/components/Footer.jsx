import React from "react";
import { useTranslation } from 'react-i18next';


import "@styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <ul>
        <li>
          <a href="https://twitter.com/JacielRM" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/JacielRios" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jaciel-benito-rios-mart%C3%ADnez-b8b229225/" target="_blank">Linkedin</a>
        </li>
      </ul>
      <div>
        <p>{t('goodbye')}</p>
        <p>{t('madeBy')} ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
