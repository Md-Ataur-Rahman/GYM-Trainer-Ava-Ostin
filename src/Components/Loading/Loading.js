import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Spinner animation="grow" variant="dark" />;
    </div>
  );
};

export default Loading;
