import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/banner/Header";
import Footer from "./components/layout/footer/Footer";
import Servicios from "./components/pages/Servicios";
import Recursos from "./components/pages/recursos/Recursos";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Servicios />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
