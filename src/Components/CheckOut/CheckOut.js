import React from "react";
import { useParams } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  let params = useParams();

  return (
    <div className="checkout-container">
      <h2>Service: {params.serviceId}</h2>
      <div className="checkout-container-text">
        <h3>Your Checkout Is Successfull</h3>
      </div>
    </div>
  );
};

export default CheckOut;
