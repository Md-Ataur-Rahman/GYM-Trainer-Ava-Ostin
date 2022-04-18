import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <Container>
        <div className="inner-footer">
          <div className="inner-footer-1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="footer-text text-white">
                <span>Ava Ostin</span>
                <h3>GYM Trainer</h3>
              </div>
            </Link>
            <p className="footer-text text-white">
              Going to the gym every day can help improve your cardiovascular
              system, strengthen your muscles, help you maintain your weight,
              boost your mental health and decrease the odds that you'll develop
              other health conditions.
            </p>
            <div className="footer-links">
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
          </div>
          <div className="inner-footer-2">
            <div className="footer-logo-container">
              <BsGithub className="footer-logo" />
              <BsLinkedin className="footer-logo" />
              <BsTwitter className="footer-logo" />
            </div>
            <h5 className="footer-text">
              All Copyrights reserved &copy; {year}
            </h5>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
