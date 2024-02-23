import React from "react";

//importaciones de terceros
import { useLocation } from "react-router-dom";
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
        <GoHome />
        <p>{`Home ${signo} ${pageName}`}</p>
      </div>
      <h1 className="title-rute">Nuestros Servicios</h1>
    </div>
  );
};

export default HeadRute;
