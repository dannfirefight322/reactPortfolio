import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./Nav.css";
import { Nav, Navbar, Container, Button, Modal } from "react-bootstrap";
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <Nav.Link as={NavLink} to="/about">
              <span className="nav-links">Resume</span>
            </Nav.Link>
            <Nav.Link variant="primary" onClick={handleShow}>
              <span className="nav-links">Contact Me</span>
            </Nav.Link>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
