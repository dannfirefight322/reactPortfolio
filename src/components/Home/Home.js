import React from "react";
import "../../App.css";
import "./Home.css";
import danielburford from '../../images/danielburford2.gif';
import laptop from "../../images/danielburford_mobile.gif";
function Home(){
    return(
        <div>
            <div className="landing-image-container">
            <img className="landing-image" src={danielburford} alt="" />
            </div>
            <div className="mobile-landing">
                <img className="mobile-landing-image" src={laptop} alt="" />
            </div>
        </div>
    )
}

export default Home;