import React from "react";

//importaciones de terceros
import { Link } from "react-router-dom";

const NavMenuItem = ({ name, path, active }) => {
  return (
    <li className={`nav-menu-item ${active ? "active" : ""}`}>
      <Link to={path} className="nav-menu-link nav-link">
        {name}
      </Link>
    </li>
  );
};

export default NavMenuItem;
