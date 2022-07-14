import React from "react"
// import navButton from "../icons/list.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar variant="dark" expand="lg" className="nav" id="navbar">
        <Container>
            <Navbar.Brand href="#home"> <h1 className="nav-title">April<span className="nav-26">26</span></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="nav-items">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default BasicExample;




// export default function Navbar() { 

//     // const button = document.querySelector(".nav-items-list");
//     // function toggleButton() {
//     //     if (button.style.left === "-100%") {
//     //         button.style.left = "0%";
//     //     } else {
//     //         button.style.left = "-100%"
//     //     }
    
//     // }
    

//     // return (
//     //     <nav  className="nav section">
//     //         <h1 className="nav-title">April<span className="nav-26">26</span></h1>
//     //         <ul className="nav-items-list" id="nav--items">
//     //             <li className="nav--list">Home</li>
//     //             <li>Portfolio</li>
//     //             <li>Resume</li>
//     //             <li>About</li>
//     //             <li>Contact</li>
//     //         </ul>
//     //         <img src={navButton} className="nav--toggleButton" alt="button"/>
//     //     </nav>
//     // )
// }