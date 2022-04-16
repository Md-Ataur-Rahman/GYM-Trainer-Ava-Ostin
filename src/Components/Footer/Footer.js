import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <Container>
        <div className="inner-footer">
          <div className="footer-links">
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
          <h5 className="footer-text">All Copyrights reserved &copy; {year}</h5>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
