import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "@styles/AboutMe.css";

const AboutMe = () => {
  const { t } = useTranslation();

  const [animationColor, setAnimationColor] = useState(
    localStorage.getItem("mode") === "dark-mode" ? "black" : "white"
  );

  return (
    <section className="about-me">
      <section className="top">
        <div className="container-text">
          <h2>{t("hello")}</h2>
          <h1>
            JACIEL<span className={animationColor}>&#160;</span> RIOS{" "}
            <span className={animationColor}>&#160;</span>
          </h1>
        </div>
        <div></div>
      </section>
      <section className="bottom">
        <p>{t("about")}</p>
      </section>
    </section>
  );
};

export default AboutMe;
