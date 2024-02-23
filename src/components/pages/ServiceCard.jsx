import React from "react";

const ServiceCard = ({ service }) => {
  const { id, icon: Icon, service_name, descripcion } = service;

  return (
    <div key={id} className="service-card">
      <div className="teste">
        <div className="icon-container">
          <Icon />
        </div>
      </div>
      <h3>{service_name}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default ServiceCard;
