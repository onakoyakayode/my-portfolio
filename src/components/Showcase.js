import React from "react";
import latestProject from "../images/ErrandHQ.png"

export default function Showcase() {
    return (
        <div className="latest-project">
            <div className="project">
                <h4 className="port">Portfolios</h4>
                <h2 className="latest-project">Latest Projects</h2>
                <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    View Portfolio
                </span>
                </button>
            </div>
            <div className="make-img">
                <img src={latestProject} className="latest-project-image" alt="Project" />
            </div>
        </div>
    ) 
        
}