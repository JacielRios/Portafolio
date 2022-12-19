import React from "react";

import "@styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <section className="top">
        <div className="container-text">
          <h2>Hola, soy</h2>
          <h1>
            JACIEL<span>&#160;</span> RIOS <span>&#160;</span>
          </h1>
        </div>
        <div></div>
      </section>
      <section className="bottom">
        <p>
          Tengo 18 años, vivo en Monterrey, México y soy desarrollador web.
          Actualmente estoy estudiando la carrera de ingeniería en sistemas
          computacionales, además de esto, estudio de forma autodidacta y cuento
          con un título de técnico en programación.
        </p>
      </section>
    </section>
  );
};

export default AboutMe;
