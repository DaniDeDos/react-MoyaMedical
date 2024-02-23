// Importaciones principales
import React from "react";

//importaciones de terceros
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Importaciones propias
import Header from "./components/layout/banner/Header";
import Footer from "./components/layout/footer/Footer";
import Servicios from "./components/pages/servicios/Servicios";
import Recursos from "./components/pages/recursos/Recursos";

const App = () => {
  return (
    <Router>
      <>
        <Header />
          <Routes>
            <Route exact path="/" element={<Servicios />} />
            <Route exact path="/servicios" element={<Servicios />} />
            <Route exact path="/recursos" element={<Recursos />} />
          </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
