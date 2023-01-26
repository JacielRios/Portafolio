import React from "react";

import '@styles/Technologies.css';
import html from '@logos/html5.png';
import css from '@logos/css3.png';
import js from '@logos/js.png';
import react from '@logos/react.png';
import bootstrap from '@logos/bootstrap.png';
import laravel from '@logos/laravel.png';
import git from '@logos/git.png';
import { useTranslation } from "react-i18next";


const Technologies = () => {
    const { t } = useTranslation();
    return(
        <>
            <h2 className="title">{t('technologies')}</h2>
            <section className="container-cards">
                <div className="card">
                    <img src={html} alt="Logo html" loading="lazy" />
                </div>
                <div className="card">
                    <img src={css} alt="Logo css" loading="lazy" />
                </div>
                <div className="card">
                    <img src={js} alt="Logo javascript" loading="lazy" />
                </div>
                <div className="card">
                    <img src={react} alt="Logo react" loading="lazy" />
                </div>
                <div className="card">
                    <img src={bootstrap} alt="Logo bootstrap" loading="lazy" />
                </div>
                <div className="card">
                    <img src={laravel} alt="Logo laravel" loading="lazy" />
                </div>
                <div className="card">
                    <img src={git} alt="Logo git" loading="lazy" />
                </div>
            </section>
        </>
    );
};

export default Technologies;