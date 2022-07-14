import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="header">
            <Navbar />
            <div className="header-container">
                <h1 className="header-title">Hello, I'm <span className="header-title-name">Onakoya Kayode</span></h1>
                <p className="header-description">Frontend Developer</p>
                <button class="button-82-pushable">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        View Portfolio
                    </span>
                </button>
            </div>
        </header>
    )
}