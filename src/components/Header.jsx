import React, { useState, useEffect } from "react";

// import menu from '@icons/menu-mobile.png';
import logo from "@logos/JR-mobile.png";
import lightMode from "@icons/light-mode.png";
import nightMode from "@icons/night-mode.png";
import translateWhite from "@icons/translate-white.png";
import translateBlack from "@icons/translate-black.png";
import { useTranslation, Trans } from "react-i18next";

import "@styles/Header.css";

const lngs = {
  es: { nativeName: "Español" },
  en: { nativeName: "English" },
};

const Header = () => {
  const { t, i18n } = useTranslation();

  const [bodyClass, setBodyClass] = useState(`${localStorage.getItem("mode")}`);

  if (bodyClass == "null") {
    setBodyClass("dark-mode");
  }
  localStorage.setItem("mode", bodyClass);

  const [translateWhiteClass, setTranslateWhiteClass] = useState(
    bodyClass === "dark-mode" || bodyClass == "null" ? "active" : "inactive"
  );

  const [translateBlackClass, setTranslateBlackClass] = useState(
    bodyClass === "dark-mode" || bodyClass == "null" ? "inactive" : "active"
  );

  const [toggle, setToggle] = useState("inactive");

  const [isToggled, setIsToggled] = useState(
    bodyClass === "dark-mode" || bodyClass == "null" ? false : true
  );

  const handleToggle = () => {
    setToggle(toggle === "inactive" ? "active" : "inactive");
  };

  const handleClick = () => {
    setIsToggled(!isToggled);
    setBodyClass(bodyClass === "dark-mode" ? "light-mode" : "dark-mode");
    localStorage.setItem("mode", bodyClass);
    setTranslateWhiteClass(
      translateWhiteClass === "active" ? "inactive" : "active"
    );
    setTranslateBlackClass(
      translateBlackClass === "inactive" ? "active" : "inactive"
    );
  };

  useEffect(() => {
    document.body.className = localStorage.getItem("mode");
  }, [localStorage.getItem("mode")]);

  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="buttons-container">
          <button className="mode" onClick={handleClick}>
            {!isToggled && <img src={lightMode} alt="Modo brillante" />}
            {isToggled && <img src={nightMode} alt="Modo oscuro" />}
          </button>
          <div className="translate" onClick={handleToggle}>
            <img
              src={translateWhite}
              alt="Cambiar el idioma"
              className={translateWhiteClass}
            />
            <img
              src={translateBlack}
              alt="Cambiar el idioma"
              className={translateBlackClass}
            />
            <div className="translate-options" id={toggle}>
              <div>
                <button onClick={() => i18n.changeLanguage("es")}>
                  Español
                </button>
              </div>
              <div>
                <button onClick={() => i18n.changeLanguage("en")}>
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
