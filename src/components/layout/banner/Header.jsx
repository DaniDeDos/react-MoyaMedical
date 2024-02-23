import React, { useState } from "react";

//importaciones de terceros
import { SiImmich } from "react-icons/si";
import { useLocation } from "react-router-dom";

//importaciones propias
import "../../../Style.css";
import "../../../styles/navbar.css";
import list_ico from "../../../assets/icons/list.svg";
import HeadRute from "./HeadRute";
import Background from "./Background";
import NavMenuItem from "./NavMenuItem";

const Header = () => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const location = useLocation();

  const toggleNavMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  const isActive = (path) => location.pathname === path;

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
            <NavMenuItem
              name="Nuestros Servicios"
              path="/servicios"
              active={isActive("/servicios")}
            />
            <NavMenuItem
              name="Recursos"
              path="/recursos"
              active={isActive("/recursos")}
            />
            <NavMenuItem name="🇪🇦ES" />
            <NavMenuItem name="Contáctanos" />
          </ul>
        </nav>
        <HeadRute />
      </header>
    </>
  );
};

export default Header;
