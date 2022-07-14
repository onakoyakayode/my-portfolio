import React from "react";
import whatsapp from "../icons/whatsapp.svg"
import github from "../icons/github.svg"
import discord from "../icons/discord.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedins.svg"

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
                <li className="footer--list">Home</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>
                <img src={whatsapp} className="social-icon-whatsapp" alt="whatsapp"/>
            </div>
        </footer>
    )
}