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
              Keeping fit will benefit your body and mind. And that's the
              <br />
              benefit of gym . I am usually provide this global service.
              <br />
              And To receive this service you must be part of my service.
              <br />
              So Are you ready
            </p>
            <button className="banner-button">I'm Ready</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
