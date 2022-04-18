import React from "react";
import { Spinner } from "react-bootstrap";
const spinnerContainer = {
  display: "block",
  textAlign: "center",
  padding: "100px 0",
};
const Loading = () => {
  return (
    <div style={spinnerContainer}>
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loading;
