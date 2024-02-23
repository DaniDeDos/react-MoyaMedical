import NavMenuItem from "../banner/NavMenuItem.jsx";
import { SiImmich } from "react-icons/si";

const Footer = () => {
  const derechoEs = "© 2024 Moya Medical. Todos los derechos reservados.";

  return (
    <>
      <footer className="footer">
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
    </>
  );
};

export default Footer;
