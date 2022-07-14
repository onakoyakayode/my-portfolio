import React from 'react';
import designImage from "../images/design.png"

export function DesignResume(props) {
    return (
        <div className="design-resume">
            <img src={designImage} className="design-image" alt="design" />
            <div className="design-resume-details">
                <h3 className="design-specialize">{props.title}</h3>
                <p className="desing-text">{props.text}</p>
            </div>
        </div>
    )
}