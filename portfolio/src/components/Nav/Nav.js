import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css";
import "./Nav.css";

function NavBar() {
  return (
    <div className="nav-container">
      <ul className="nav-bar">
        <li className="navbar-links">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li className="navbar-links">
          <Link to="/about" style={{ textDecoration: "none" }}>
            About Me
          </Link>
        </li>
        <li className="navbar-links">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
        <li className="navbar-links">
          <Link to="/certifications" style={{ textDecoration: "none" }}>
            Certifications
          </Link>
        </li>
        <li className="navbar-links">
          <Link to="/resume" style={{ textDecoration: "none" }}>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
