import React from "react"
import Experience from "./components/Experience";
import Header from "./components/Header";
import Portfolio from "./components/Portofolio";
import Resume from "./components/Resume";
import Showcase from "./components/Showcase";
import Response from "./components/Response";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Header />
            <Portfolio />
            <Resume />
            <Showcase />
            <Experience />
            <Response />
            <Contact />
            <Footer />
        </div>
    )
}
