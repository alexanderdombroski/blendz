import React from "react";
import "./styles/header.css"

function Header() {
    return (
        <header>
            <img className="logo" src="" alt="Blendz Logo"/>
            <Nav/>
        </header>
    );
}

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="index.html"></a>Home</li>
                <li><a href="#"></a>Contact Us</li>
                <li><a href="#"></a>About Us</li>
                <li><a href="site-plan.html"></a>Site Plan</li>
            </ul>
        </nav>
    );
}

export { Header }