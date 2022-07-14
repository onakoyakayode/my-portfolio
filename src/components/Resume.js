import React from "react";
import Specialize from "./Specialize";


export default function Resume() {
    return (
        <div className="section resume" id="resume">
            <h3 className="resume-title">What I Do</h3>
            <h2 className="resume-specialize">Specializing in</h2>
            <Specialize />
            
        </div>
    )
}