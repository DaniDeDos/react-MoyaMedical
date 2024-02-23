import React from 'react';
import ServiceCard from './ServiceCard'; 
import "../../styles/servicios.css";
import { serviceCardsData } from '../../db/serviceData';

const Servicios = () => {
  return (
    <div className='services-container'>
      {serviceCardsData.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Servicios;
