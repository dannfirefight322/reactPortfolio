/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../App.css";
import "./Projects.css";
import { Carousel, Card  } from 'react-bootstrap';
import emswift from "../../images/projects/emswift.png";
import hand from "../../images/projects/hand.jfif";
import dayPlanner from "../../images/projects/dayPlanner.png"
import passwordGeneratorDesktop from "../../images/projects/passwordGeneratorDesktop.png";
import cssSnippetDesktop from "../../images/projects/cssSnippetDesktop.png";
function Projects() {
  return (
    <div>
      <div className="desktop">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img
              className="d-block"
              src={emswift}
              alt="First slide"
              style={{ display: "flex", justifyContent: "center" }}
            />
            <Carousel.Caption
              style={{
                backgroundColor: "var(--mainColor)",
                borderRadius: "5px",
                opacity: ".9",
              }}
            >
              <h3 className="carousel-title">EMSwift</h3>
              <p className="carousel-description">
                This is a concept for an easy to use PCR(Patient Care Report)
                that myself and my group came up with. It utilizes a mix of
                HTML, CSS and CSS frameworks, and JS and Third party API's.
              </p>
              <div className="links">
                <a
                  className="links"
                  href="https://emswift.com/"
                  target="_blank"
                >
                  Deployed
                </a>
                <a
                  className="links"
                  href="https://github.com/spaceboundbear/Project1-UTSA-MF-DB-BT"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={hand} alt="Second slide" />

            <Carousel.Caption
              style={{
                backgroundColor: "var(--mainColor)",
                borderRadius: "5px",
                opacity: ".9",
              }}
            >
              <h3 className="carousel-title">Daniel's Photography</h3>
              <p className="carousel-description">
                Photography is one of my many passions, I saw fit to build a
                mobile website as a portfolio to showcase some of my favorite
                photos that I've taken from various places around the U.S.
              </p>
              <div className="links">
                <a
                  className="links"
                  href="https://danielsphotography.me/"
                  target="_blank"
                >
                  Deployed
                </a>
                <a
                  className="links"
                  href="https://github.com/dannfirefight322/Mobile"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block" src={dayPlanner} alt="Second slide" />

            <Carousel.Caption
              style={{
                backgroundColor: "var(--mainColor)",
                borderRadius: "5px",
                opacity: ".9",
              }}
            >
              <h3 className="carousel-title">Work Day Planner</h3>
              <p className="carousel-description">
                This is a simple day planner untilizing HTML, CSS and
                JavaScript. To track a busy work day by using moment.js and
                local storage to color code a schedule to help manage a
                stressful day.
              </p>
              <div className="links">
                <a
                  className="links"
                  href="https://dannfirefight322.github.io/DayPlanner/"
                  target="_blank"
                >
                  Deployed
                </a>
                <a
                  className="links"
                  href="https://github.com/dannfirefight322/DayPlanner"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block"
              src={passwordGeneratorDesktop}
              alt="Second slide"
            />

            <Carousel.Caption
              style={{
                backgroundColor: "var(--mainColor)",
                borderRadius: "5px",
                opacity: ".9",
              }}
            >
              <h3 className="carousel-title">Password Generator</h3>
              <p className="carousel-description">
                This is a simple random password generator. It uses vanilla
                JavaScript help a generate a password for anyone to use. It uses
                alerts and math.random to help define tha password.
              </p>
              <div className="links">
                <a
                  className="links"
                  href="https://dannfirefight322.github.io/password-generator/"
                  target="_blank"
                >
                  Deployed
                </a>
                <a
                  className="links"
                  href="https://github.com/dannfirefight322/password-generator"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block"
              src={cssSnippetDesktop}
              alt="Second slide"
            />

            <Carousel.Caption
              style={{
                backgroundColor: "var(--mainColor)",
                borderRadius: "5px",
                opacity: ".9",
              }}
            >
              <h3 className="carousel-title">CSS Snippet Cheatsheet</h3>
              <p className="carousel-description">
                This is a basic webpage using HTML and CSS with flexbox
                properties, Snippets of CSS code are shown to help remember
                generic lines of code you might use to impliment flexbox.
              </p>
              <div className="links">
                <a
                  className="links"
                  href="https://dannfirefight322.github.io/CSS-code-snippet/"
                  target="_blank"
                >
                  Deployed
                </a>
                <a
                  className="links"
                  href="https://github.com/dannfirefight322/CSS-code-snippet"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mobile-only">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={emswift} />
          <Card.Body>
            <Card.Title>EMSwift</Card.Title>
            <Card.Text>
              This is a concept for an easy to use PCR(Patient Care Report) that
              myself and my group came up with. It utilizes a mix of HTML, CSS
              and CSS frameworks, and JS and Third party API's.
            </Card.Text>
            <div className="links">
              <a className="links" href="https://emswift.com/" target="_blank">
                Deployed
              </a>
              <a
                className="links"
                href="https://github.com/spaceboundbear/Project1-UTSA-MF-DB-BT"
                target="_blank"
              >
                Repository
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
