import React from "react";

//importaciones de terceros
import { GoHome } from "react-icons/go";

//Importaciones propias
import "../../../styles/headrute.css";

const HeadRute = () => {
  return (
    <div className="rute-container">
      <div className="rute-link">
        <GoHome />
        <p>{"Home > Nuestros Servicios"}</p>
      </div>
      <h1 className="title-rute">Nuestros Servicios</h1>
    </div>
  );
};

export default HeadRute;
