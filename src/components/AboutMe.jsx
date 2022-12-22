import React from "react";
import { useTranslation } from 'react-i18next';

import "@styles/AboutMe.css";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="about-me">
      <section className="top">
        <div className="container-text">
          <h2>{t('hello')}</h2>
          <h1>
            JACIEL<span>&#160;</span> RIOS <span>&#160;</span>
          </h1>
        </div>
        <div></div>
      </section>
      <section className="bottom">
        <p>{t('about')}</p>
      </section>
    </section>
  );
};

export default AboutMe;
