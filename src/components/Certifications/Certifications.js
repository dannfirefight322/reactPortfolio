import React from "react";
import "../../App.css";
import "./Certifications.css";
import responsive from "../../images/certifications/responsivewebdesign.png";
import Javascript from "../../images/certifications/Javascript.png";
import FrontendLibraries from "../../images/certifications/frontendlibraries.png"
import DataVisualization from "../../images/certifications/datavisualization.png";
import Utsa from "../../images/certifications/utsa.png";
function Certifications() {
  return (
    <div>
      <h1 className="certs-title">Certifications</h1>
      <div className="certs">
      <img
          className="cert-utsa"
          src={Utsa}
          alt="certification for responsive web design."
        />
        <hr className="break" />
        <img
          className="cert"
          src={responsive}
          alt="certification for responsive web design."
        />
        <img
          className="cert"
          src={Javascript}
          alt="certification for Javascript Algorithms and Data Structures."
        />
        <hr className="break" />
        <img
          className="cert"
          src={FrontendLibraries}
          alt="certification for Front End Development Libraries."
        />
        <img
          className="cert"
          src={DataVisualization}
          alt="certification for Data Visualization."
        />
      </div>
    </div>
  );
}

export default Certifications;
