import React, { useState } from "react";
import "../../../Style.css";
import "../../../styles/navbar.css";
import list_ico from "../../../assets/icons/list.svg";
import HeadRute from "./HeadRute";
import Background from "./Background";
import NavMenuItem from "./NavMenuItem";
import { SiImmich } from "react-icons/si";

const Header = () => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  return (
    <>
      <Background />
      <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <div className="nav-logo">
              <SiImmich />
            </div>

            <a href="#" className="logo nav-link">
              <span className="span">Moya</span>
              Medical
            </a>
          </div>

          <button
            className="toggle nav-toggle"
            aria-label={navMenuVisible ? "Cerrar Menu" : "Abrir Menu"}
            onClick={toggleNavMenu}
          >
            <img src={list_ico} alt="Menu" />
          </button>
          <ul
            className={`nav-menu ${navMenuVisible ? "nav-menu-visible" : ""}`}
          >
            <NavMenuItem name="Nuestra Compañía" />
            <NavMenuItem name="Nuestros Servicios" />
            <NavMenuItem name="Recursos" />
            <NavMenuItem name="ES" />
            <NavMenuItem name="Contáctanos" />
          </ul>
        </nav>
        <HeadRute />
      </header>
    </>
  );
};

export default Header;
