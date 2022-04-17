import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className=".container">
        <div className="inner-banner-section">
          <div>
            <h1 className="banner-title">
              Hello, My Name Is <br /> Ava Ostin
            </h1>
            <h4 className="banner-sub-title">I'm A Gym Trainer</h4>
            <p className="banner-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sit
              <br />
              obcaecati. Fugiat, quasi, voluptate error iste quam fugit impedit
              <br />
              rerum quia dolorum harum repellat doloribus eum magni quaerat illo
              quo.
            </p>
            <button className="banner-button">I'm Ready</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
