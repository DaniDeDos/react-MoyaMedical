import React from "react";
import { Link } from "react-router-dom";

const NavMenuItem = ({ name, path }) => {
  return (
    <li className="nav-menu-item">
      <Link to={path} className="nav-menu-link nav-link">
        {name}
      </Link>
    </li>
  );
};

export default NavMenuItem;
