import React from 'react';

const NavMenuItem = ({ name }) => {
  return (
    <li className="nav-menu-item">
      <a href="#" className="nav-menu-link nav-link">
        {name}
      </a>
    </li>
  );
};

export default NavMenuItem;
