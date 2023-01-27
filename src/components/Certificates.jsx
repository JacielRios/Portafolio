import React from "react";

import '../styles/Certificates.css';

const Card = ({ id, name, date, link  }) => {
    return (
    <a href={`https://platzi.com${link}`} key={id} target="_blank">
      <h4>{name}</h4>
      <p><span>Obtenido el: </span>{new Date(date).toLocaleDateString()}</p>
      <p><span>Por: </span> Platzi</p>
    </a>
  );
};

const data = [
    {
        id: 1,
      name: "Curso Definitivo de HTML y CSS",
      date: "2021-03-20T16:46:57.062904+00:00",
      link: "/p/JacielRios/curso/2008-html-css/diploma/detalle/",
    },
    {
        id: 2,
      name: "Curso Práctico de JavaScript",
      date: "2022-08-18T16:09:33.597501+00:00",
      link: "/p/JacielRios/curso/3271-javascript-practico/diploma/detalle/",
    },
    {
        id: 3,
      name: "Curso de ECMAScript: Historia y Versiones de JavaScript",
      date: "2022-08-23T18:40:47.003736+00:00",
      link: "/p/JacielRios/curso/3504-ecmascript-6/diploma/detalle/",
    },
    {
        id: 4,
      name: "Curso de Manipulación de Arrays en JavaScript",
      date: "2022-06-30T02:02:29.697747+00:00",
      link: "/p/JacielRios/curso/2461-arrays/diploma/detalle/",
    },
    {
        id: 5,
      name: "Curso de Asincronismo con JavaScript",
      date: "2022-07-05T04:06:53.395952+00:00",
      link: "/p/JacielRios/curso/3175-asincronismo-js/diploma/detalle/",
    },
    {
        id: 6,
      name: "Curso Profesional de Consumo de API REST con JavaScript",
      date: "2022-08-06T23:05:21.818195+00:00",
      link: "/p/JacielRios/curso/2942-api-profesional/diploma/detalle/",
    },
    {
        id: 7,
      name: "Curso de Manipulación del DOM",
      date: "2023-01-14T03:49:09.657272+00:00",
      link: "/p/JacielRios/curso/2193-dom/diploma/detalle/",
    },
    {
        id: 8,
      name: "Curso de Programación Orientada a Objetos: POO",
      date: "2022-06-05T16:24:24.589353+00:00",
      link: "/p/JacielRios/curso/1474-oop/diploma/detalle/",
    },
    {
        id: 9,
      name: "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
      date: "2022-08-26T17:46:33.864742+00:00",
      link: "/p/JacielRios/curso/3578-npm/diploma/detalle/",
    },
    {
        id: 10,
      name: "Curso Práctico de React.js",
      date: "2022-10-23T19:34:17.329306+00:00",
      link: "/p/JacielRios/curso/2484-react-practico/diploma/detalle/",
    },
  ];
  

const Certificates = () => {
  return (
    <>
      <h2 className="title">Certificados</h2>
      <section className="container-certificates">
      {data.map((item) => (
            <Card id={item.id} name={item.name} date={item.date} link={item.link}/>
        ))}
      </section>
    </>
  );
};

export default Certificates;
