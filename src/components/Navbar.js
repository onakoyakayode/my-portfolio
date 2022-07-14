import React from "react"
import navButton from "../icons/list.svg"

export default function Navbar() { 

    const button = document.querySelector(".nav-items-list");
    function toggleButton() {
        if (button.style.left === "-100%") {
            button.style.left = "0%";
        } else {
            button.style.left = "-100%"
        }
    
    }
    console.log(button)
    

    return (
        <nav  className="nav section">
            <h1 className="nav-title">April<span className="nav-26">26</span></h1>
            <ul className="nav-items-list" id="nav--items">
                <li className="nav--list">Home</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <img src={navButton} onClick={toggleButton} className="nav--toggleButton" alt="button"/>
        </nav>
    )
}