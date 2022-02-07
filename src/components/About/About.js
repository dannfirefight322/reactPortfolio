/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "../../App.css";
import "./About.css";
import me from "../../images/aboutme/Me.jpeg";
import { Badge } from 'react-bootstrap';
function About() {
  return (
    <div>
      <div className="about-me-container">
        <div className="about-me-image-container">
          <img className="about-me-image" src={me} alt="Daniel Burford" />
        </div>
        <div className="about-me-paragraph">
          <h1 className="about-me-title">About Me</h1>
          <p className="about-me">
            Hello my name is Daniel Burford, a recently engaged web development
            and software engineenering student. I am studying web developing and
            software engineering in UTSA's coding bootcamp. My background is
            predominantly in first responding I've been in the field for almost
            10 years, With my training being focused in firefighting and EMS
            work. Up until starting the bootcamp I was for the most a self
            taught developer focusing my learning in HTML and CSS. With joining
            the bootcamp opened my eyes to more than just making a static
            website, but also intergrating JavaScript to add some functionality
            to that website as well.
          </p>
        </div>
      </div>
      <h1 className="about-me-badges">Languages</h1>
      <div className="badges-container">
        <div className="badge-container">
          <div className="badges-section-1">
            <h1>
              <Badge pill bg="success">
                HTML
              </Badge>
            </h1>
            <h1>
              <Badge pill bg="success">
                CSS
              </Badge>
            </h1>
            <h1>
              <Badge pill bg="success">
                JAVASCRIPT
              </Badge>
            </h1>
            <h1>
              <Badge pill bg="success">
                BOOTSTRAP
              </Badge>
            </h1>
          </div>
        </div>
        <div className="badges-section-2">
          <h1>
            <Badge pill bg="success">
              HTML
            </Badge>
          </h1>
          <h1>
            <Badge pill bg="success">
              CSS
            </Badge>
          </h1>
          <h1>
            <Badge pill bg="success">
              JAVASCRIPT
            </Badge>
          </h1>
          <h1>
            <Badge pill bg="success">
              BOOTSTRAP
            </Badge>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
