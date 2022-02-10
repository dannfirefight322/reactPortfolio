import React from "react";
import "../../App.css";
import "./Projects.css";
import { Carousel  } from 'react-bootstrap';
import emswift from "../../images/projects/emswift.png";
import hand from "../../images/projects/hand.jfif";
import dayPlanner from "../../images/projects/dayPlanner.png"
function Projects() {
  return (
    <Carousel fade variant="dark">
  <Carousel.Item>
    <img
      className="d-block"
      src={emswift}
      alt="First slide"
      style={{"display": "flex", "justifyContent": "center"}}
    />
    <Carousel.Caption style={{"backgroundColor": "var(--mainColor)", "borderRadius": "5px", "opacity": ".9"}}>
      <h3 className="carousel-title">EMSwift</h3>
      <p className="carousel-description">This is a concept for an easy to use PCR(Patient Care Report) that myself and my group came up with. It utilizes a mix of HTML, CSS and CSS frameworks, and JS and Third party API's.</p>
      <div className="links">
      <a className="links" href="https://emswift.com/">Deployed</a>
      <a className="links" href="https://github.com/spaceboundbear/Project1-UTSA-MF-DB-BT">Repository</a>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={hand}
      alt="Second slide"
    />

    <Carousel.Caption style={{"backgroundColor": "var(--mainColor)", "borderRadius": "5px", "opacity": ".9"}}>
      <h3 className="carousel-title">Daniel's Photography</h3>
      <p className="carousel-description">Photography is one of my many passions, I saw fit to build a mobile website as a portfolio to showcase some of my favorite photos that I've taken from various places around the U.S.</p>
      <div className="links">
      <a className="links" href="https://danielsphotography.me/">Deployed</a>
      <a className="links" href="https://github.com/dannfirefight322/Mobile">Repository</a>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={dayPlanner}
      alt="Second slide"
    />

    <Carousel.Caption style={{"backgroundColor": "var(--mainColor)", "borderRadius": "5px", "opacity": ".9"}}>
      <h3 className="carousel-title">Work Day Planner</h3>
      <p className="carousel-description">This is a simple day planner untilizing HTML, CSS and JavaScript. To track a busy work day by using moment.js and local storage to color code a schedule to help manage a stressful day.</p>
      <div className="links">
      <a className="links" href="https://dannfirefight322.github.io/DayPlanner/">Deployed</a>
      <a className="links" href="https://github.com/dannfirefight322/DayPlanner">Repository</a>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    
  );
}

export default Projects;
