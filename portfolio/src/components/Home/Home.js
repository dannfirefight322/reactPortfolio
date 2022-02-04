import React from "react";
import "../../App.css";
import "./Home.css";
import danielburford from '../../images/danielburford2.gif';
function Home(){
    return(
        <div>
            <div className="landing-image-container">
            <img className="landing-image" src={danielburford} alt="" />
            </div>
        </div>
    )
}

export default Home;