import React from "react";
import whatsapp from "../icons/whatsapp.svg"
import github from "../icons/github.svg"
import discord from "../icons/discord.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedins.svg"
import Nav from 'react-bootstrap/Nav';

export default function Footer() {


    function githubClick() {
        return window.open('https://github.com/onakoyakayode')
    }

    function twitterClick() {
        return window.open('https://twitter.com/kayodeonakoya26')
    }

    function linkedinClick() {
        return window.open('https://www.linkedin.com/in/onakoya-oluwakayode-a525b619a/')
    }

    function discordClick() {
        return window.open('https://support.discord.com/hc/en-us/profiles/7722204556183')
    }

    function whatsappClick() {
        return window.open('https://wa.me/message/HFG2OHGUQ3HNE1')
    }

    return (
        <footer className="footer section" id="contact">
            <div className="social-icons">
                <img src={github} onClick={githubClick} rel="noreferrer" className="social-icon-github" alt="github"/>
                <img src={discord} onClick={discordClick} rel="noreferrer" className="social-icon-discord" alt="discord"/>
                <img src={twitter} onClick={twitterClick} rel="noreferrer" className="social-icon-twitter" alt="twitter"/>
                <img src={linkedin} onClick={linkedinClick} rel="noreferrer" className="social-icon-linkedlinkedin" alt="linkedin"/>
                
            </div>
            <ul className="footer-items">
                <Nav.Link href="#home" className="footer--list">Home</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </ul>
            <div>
                <img src={whatsapp} onClick={whatsappClick} rel="noreferrer" className="social-icon-whatsapp" alt="whatsapp"/>
            </div>
        </footer>
    )
}