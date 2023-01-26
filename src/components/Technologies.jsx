import React from "react";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useTranslation } from "react-i18next";

import "@styles/Technologies.css";
import html from "@logos/html5.png";
import css from "@logos/css3.png";
import js from "@logos/js.png";
import react from "@logos/react.png";
import bootstrap from "@logos/bootstrap.png";
import laravel from "@logos/laravel.png";
import git from "@logos/git.png";

const TechTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      color: '#fff',
      fontSize: 16,
      fontWeight: '600'
    },
  }));

const Technologies = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="title">{t("technologies")}</h2>
      <section className="container-cards">
        <div className="card">
          <TechTooltip  title="HTML" placement="right" arrow>
            <img src={html} alt="Logo html" loading="lazy" />
          </TechTooltip >
        </div>
        <div className="card">
          <TechTooltip  title="CSS" placement="right" arrow>
            <img src={css} alt="Logo css" loading="lazy" />
          </TechTooltip >
        </div>
        <div className="card">
          <TechTooltip  title="JAVASCRIPT" placement="right" arrow>
            <img src={js} alt="Logo javascript" loading="lazy" />
          </TechTooltip >
        </div>
        <div className="card">
          <TechTooltip  title="REACT" placement="right" arrow>
            <img src={react} alt="Logo react" loading="lazy" />
          </TechTooltip >
        </div>
        <div className="card">
          <TechTooltip  title="BOOTSTRAP" placement="right" arrow>
            <img src={bootstrap} alt="Logo bootstrap" loading="lazy" />
          </TechTooltip >
        </div>
        <div className="card">
          <TechTooltip  title="LARAVEL" placement="right" arrow>
            <img src={laravel} alt="Logo laravel" loading="lazy" />
          </TechTooltip >
        </div>
        <div className="card">
          <TechTooltip  title="GIT" placement="right" arrow>
            <img src={git} alt="Logo git" loading="lazy" />
          </TechTooltip >
        </div>
      </section>
    </>
  );
};

export default Technologies;
