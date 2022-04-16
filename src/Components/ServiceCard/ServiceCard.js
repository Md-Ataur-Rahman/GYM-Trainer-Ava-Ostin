import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { name, price, image, text } = service;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text">{price}</Card.Text>
        <Card.Text className="card-text">{text}</Card.Text>
        <Button variant="success">CheckOut</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
