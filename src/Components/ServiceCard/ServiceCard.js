import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
const customBtn = {
  display: "inline-block",
  color: "#1BFD9C",
  fontSize: "15px",
  padding: "0.7em 2.7em",
  letterSpacing: "0.06em",
  lineHeight: "1.4em",
  border: "2px solid #1BFD9C",
  borderRadius: "0.6em",
  textDecoration: "none",
  fontWeight: "700",
  margin: "1rem 0 0.5rem",
};
const ServiceCard = ({ service }) => {
  const { id, name, price, image, text } = service;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="card-text">{price}</Card.Text>
        <Card.Text className="card-text">{text}</Card.Text>
        <Link style={customBtn} to={`/checkout/${id}`}>
          CheckOut
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
