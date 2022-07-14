import React from "react"
import navButton from "../icons/list.svg"

export default function Navbar() {
    const toggle = document.getElementById("nav--items");
    function toggleButton() {
        if (toggle.style.left === "-100%") {
            toggle.style.left = "0%"
        } else {
            toggle.style.left = "-100%"
        }
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