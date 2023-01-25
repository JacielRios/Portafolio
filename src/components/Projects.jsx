import React, { useState } from "react";

import openProject from "@icons/open.png";
import github from "@icons/github.png";
import { useTranslation } from 'react-i18next';

import "@styles/Projects.css";

const RenderProjects = ({ name, srcImage, srcDeploy, srcRepository}) => {
  const [toggle, setToggle] = useState("image");

  const [inactive, setInactive] = useState("inactive");

  const handleToggle = () => {
    setToggle(toggle === "image" ? "blur" : "image");
  };

  const handleInactive = () => {
    setInactive(inactive === "inactive" ? "show-buttons" : "inactive");
  };

  return (
    <div className="border-card" >
      <div className="container-image" onClick={handleInactive}>
        <img
          src={srcImage}
          alt={name}
          className={toggle}
          onClick={handleToggle}
        />
        <div className={inactive}>
          <a href={srcDeploy} target="_blank" onClick={handleToggle}><img src={openProject} alt="Abrir proyecto" /></a>
          <a href={srcRepository} target="_blank" onClick={handleToggle}><img src={github} alt="Abrir repositorio" /></a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      name: "movies",
      img: require("../assets/images/moviesApp.jpeg"),
      deploy: "https://jacielrios.github.io/Movies-APP-API-REST/",
      repository: "https://github.com/JacielRios/Movies-APP-API-REST",
    },
    {
      id: 2,
      name: "tic-tac-toe",
      img: require("../assets/images/tic-tac-toe.jpeg"),
      deploy: "https://jacielrios.github.io/tic-tac-toe-REACTJS/",
      repository: "https://github.com/JacielRios/tic-tac-toe-REACTJS",
    },
    {
      id: 3,
      name: "weather",
      img: require("../assets/images/weather.jpeg"),
      deploy: "https://jacielrios.github.io/Weather-App/",
      repository: "https://github.com/JacielRios/Weather-App",
    },
    {
      id: 4,
      name: "cral",
      img: require("../assets/images/cral.jpeg"),
      deploy: "https://cral101.com",
      repository: "https://github.com/JacielRios/CRAL101",
    },
    {
      id: 5,
      name: "react-shop",
      img: require("../assets/images/react-shop.jpeg"),
      deploy: "https://jacielrios.github.io/React-Shop/",
      repository: "https://github.com/JacielRios/React-Shop",
    },
  ];
  return (
    <>
      <h2 className="title">{t('projects')}</h2>
      <section className="container-card">
        {data.map((item) => (
          <RenderProjects key={item.id} name={item.name} srcImage={item.img}  srcDeploy={item.deploy} srcRepository={item.repository}/>
        ))}
      </section>
    </>
  );
};

export default Projects;
