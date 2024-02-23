import NavMenuItem from "../banner/NavMenuItem.jsx";

const Footer = () => {
  const derechoEs = "© 2024 Moya Medical. Todos los derechos reservados.";

  return (
    <footer className="footer">
      <nav className="nav">
        <a href="#" className="logo nav-link">
          <span className="span">Moya</span>
          Medical
        </a>
        <ul className={`nav-menu `}>
          <NavMenuItem name="Nuestra Compañía" />
          <NavMenuItem name="Nuestros Servicios" />
          <NavMenuItem name="Recursos" />
          <NavMenuItem name="ES" />
          <NavMenuItem name="Contáctanos" />
        </ul>
      </nav>
      <p className="derechos">{derechoEs}</p>
    </footer>
  );
};

export default Footer;
