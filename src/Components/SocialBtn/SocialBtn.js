import React from "react";
import "./SocialBtn.css";

const SocialBtn = () => {
  return (
    <div className="social-btn-container">
      <div className="or-container">
        <div className="border"></div>
        <div className="or-text">Or</div>
        <div className="border"></div>
      </div>
      <button className="social-btn">Google</button>
    </div>
  );
};

export default SocialBtn;
