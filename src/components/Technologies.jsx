import React from "react";

import '@styles/Technologies.css';
import html from '@logos/html5.png';
import css from '@logos/css3.png';
import js from '@logos/js.png';
import react from '@logos/react.png';
import bootstrap from '@logos/bootstrap.png';
import laravel from '@logos/laravel.png';
import git from '@logos/git.png';


const Technologies = () => {
    return(
        <>
            <h2 className="title">Tecnologías</h2>
            <section className="container-cards">
                <div className="card">
                    <img src={html} alt="Logo html" />
                </div>
                <div className="card">
                    <img src={css} alt="Logo css" />
                </div>
                <div className="card">
                    <img src={js} alt="Logo javascript" />
                </div>
                <div className="card">
                    <img src={react} alt="Logo react" />
                </div>
                <div className="card">
                    <img src={bootstrap} alt="Logo bootstrap" />
                </div>
                <div className="card">
                    <img src={laravel} alt="Logo laravel" />
                </div>
                <div className="card">
                    <img src={git} alt="Logo git" />
                </div>
            </section>
        </>
    );
};

export default Technologies;