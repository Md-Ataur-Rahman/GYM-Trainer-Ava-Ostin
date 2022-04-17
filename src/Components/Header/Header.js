import { signOut } from "firebase/auth";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          <div className="logo-container">
            <p>Ava Ostin</p>
            <h3>GYM Trainer</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/aboutme" className="text-white">
              AboutMe
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="text-white">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/checkout" className="text-white">
              CheckOut
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <button
                className="btn btn-link text-white"
                style={{ textDecoration: "none" }}
                onClick={() => signOut(auth)}
              >
                SignOut
              </button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="text-white">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/registration" className="text-white">
                  Registration
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
