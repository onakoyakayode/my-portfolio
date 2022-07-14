import React from "react"
import navButton from "../icons/list.svg"

export default function Navbar() {

    
    function toggleButton() {
        const toggle = document.getElementById("nav--items");
        if (toggle.style.display === "none") {
            toggle.style.display = "block"
        } else {
            toggle.style.display = "none"
        }
        console.log(toggle)
    }
   

    return (
        <nav  className="nav section">
            <h1 className="nav-title">April<span className="nav-26">26</span></h1>
            <ul className="nav-items" id="nav--items">
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