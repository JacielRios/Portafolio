import React, { useState, useEffect } from "react";

// import menu from '@icons/menu-mobile.png';
import logo from "@logos/JR-mobile.png";
import lightMode from "@icons/light-mode.png";
import nightMode from "@icons/night-mode.png";

import "@styles/Header.css";

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    const [bodyClass, setBodyClass] = useState("dark-mode");

    const handleClick = () => {
        setIsToggled(!isToggled);
        setBodyClass(bodyClass === "dark-mode" ? "light-mode" : "dark-mode");
    }

    useEffect(() => {
        document.body.className = bodyClass;
    }, [bodyClass]);

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <button className="mode" onClick={handleClick}>
        {!isToggled && <img
          src={lightMode}
          alt="Modo brillante"
        />}
        {isToggled &&
        <img
          src={nightMode}
          alt="Modo oscuro"
        />}
      </button>
    </nav>
  );
};

export default Header;
