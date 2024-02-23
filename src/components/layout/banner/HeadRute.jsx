import React from "react";

//importaciones de terceros
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";

//Importaciones propias
import "../../../styles/headrute.css";

const HeadRute = () => {
  const location = useLocation();
  let pageName = "Inicio";
  let signo = ">";

  switch (location.pathname) {
    case "/servicios":
      pageName = "Nuestros Servicios";
      break;
    case "/recursos":
      pageName = "Recursos";
      break;
    default:
      pageName = "";
      signo = "";
  }

  return (
    <div className="rute-container">
      <div className="rute-link">
        <Link to="/">
          <GoHome />
        </Link>
        <Link className="link-dom" to="/">
          <p>{`Home`}</p>
        </Link>

        <p className="signo">{` ${signo} `}</p>
        <Link className="link-dom" to={location.pathname}>
          <p>{`${pageName}`}</p>
        </Link>
      </div>
      <h1 className="title-rute">{pageName}</h1>
    </div>
  );
};

export default HeadRute;
