/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./Nav.css";
import { Nav, Navbar, Container, Button, Modal } from "react-bootstrap";
import "bootstrap/js/src/collapse.js";
import github from "../../images/icons/GitHub-Mark.png";
import linkedin from "../../images/icons/LI-In-Bug.png";
import instagram from "../../images/icons/instagram.png";
import twitter from "../../images/icons/logo-round-twitter.png";
import gmail from "../../images/icons/gmail.png";
import phone from "../../images/icons/phone.png";
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg">
      <Container
        style={{ backgroundColor: "black", borderRadius: "10px", width: "90%" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className="toggle-container">
            <span className="navbar-toggle-icon">|||</span>
            <span className="toggle-title">Daniel Burford</span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              <span className="nav-links">Home</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <span className="nav-links">About Me</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              <span className="nav-links">Projects</span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/certifications">
              <span className="nav-links">Certifications</span>
            </Nav.Link>
            <h1><a className="resumelink"href="https://daniel-burford.com/Daniel_Burford.pdf">Resume</a></h1>
            <Nav.Link variant="primary" onClick={handleShow}>
              <span className="nav-links">Contact Me</span>
            </Nav.Link>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body className="modal-body">
                <Modal.Title className="modal-title">
                  Contact Information
                </Modal.Title>
                <ul className="modal-links">
                  <li className="links-list">
                    <a
                      className="links"
                      href="https://github.com/dannfirefight322"
                    >
                      <img className="icon" src={github} alt="..." />
                      -Github
                    </a>
                  </li>
                  <li className="links-list">
                    <a
                      className="links"
                      href="https://www.linkedin.com/in/daniel-burford-209b5b20a/"
                    >
                      <img className="icon" src={linkedin} alt="..." />
                      -Linkedin
                    </a>
                  </li>
                  <li className="links-list">
                    <a
                      className="links"
                      href="https://www.instagram.com/texas.photography94/"
                    >
                      <img className="icon" src={instagram} alt="..." />
                      -Instagram
                    </a>
                  </li>
                  <li className="links-list">
                    <a
                      className="links"
                      href="https://twitter.com/texasphotograp7"
                    >
                      <img className="icon" src={twitter} alt="..." />
                      -Twitter
                    </a>
                  </li>
                  <li className="links-list">
                    <a className="links" href="#">
                      <img className="icon" src={gmail} alt="..." />
                      -amery.bur410@gmail
                    </a>
                  </li>
                  <li className="links-list">
                    <a className="links" href="#">
                      <img className="icon" src={phone} alt="..." />
                      -210-823-3196
                    </a>
                  </li>
                </ul>
              </Modal.Body>
              <Button
                className="modal-button"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
