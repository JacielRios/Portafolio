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

  const [ toggle, setToggle ] = useState("inactive");

  const [isToggled, setIsToggled] = useState("");

  const [bodyClass, setBodyClass] = useState("dark-mode");

  const [translateWhiteClass, setTranslateWhiteClass] = useState("active");

  const [translateBlackClass, setTranslateBlackClass] = useState("inactive");

  const handleToggle = () => {
    setToggle(toggle === "inactive" ? "active" : "inactive");
  };

  const handleClick = () => {
    setIsToggled(!isToggled);
    setBodyClass(bodyClass === "dark-mode" ? "light-mode" : "dark-mode");
    setTranslateWhiteClass(
      translateWhiteClass === "active" ? "inactive" : "active"
    );
    setTranslateBlackClass(
      translateBlackClass === "inactive" ? "active" : "inactive"
    );
  };

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  function Alert(){
    alert("hello");
  }
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
          <button className="translate" onClick={handleToggle}>
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
              <p>
                <a onClick={() => i18n.changeLanguage('es')}>Español</a>
              </p>
              <p>
                <a onClick={() => i18n.changeLanguage('en')}>English</a>
              </p>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
