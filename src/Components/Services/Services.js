import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="services-section">
      <h1 className="section-title">Services</h1>
      <Container>
        <div className="inner-services-section">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
