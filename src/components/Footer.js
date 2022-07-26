import React from "react";
import whatsapp from "../icons/whatsapp.svg"
import github from "../icons/github.svg"
import discord from "../icons/discord.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedins.svg"
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
        <footer className="footer section" id="contact">
            <div className="social-icons">
                <img src={github} className="social-icon-github" alt="github"/>
                <img src={discord} className="social-icon-discord" alt="discord"/>
                <img src={twitter} className="social-icon-twitter" alt="twitter"/>
                <img src={linkedin} className="social-icon-linkedin" alt="linkedin"/>
                
            </div>
            <ul className="footer-items">
                <Nav.Link href="#home" className="footer--list">Home</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </ul>
            <div>
                <img src={whatsapp} className="social-icon-whatsapp" alt="whatsapp"/>
            </div>
        </footer>
    )
}