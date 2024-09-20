import React from "react";

function Header() {
    return (
        <header>
            <a className="logo" href={`${process.env.PUBLIC_URL}/index.html`}><img width={150} height={150} src={`${process.env.PUBLIC_URL}/images/logo-transparent.webp`} alt="Blendz Logo"/></a>
            <Nav/>
        </header>
    );
}

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href={`${process.env.PUBLIC_URL}/`}>Home</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/menu`}>Menu</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/about`}>About Us</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/contact`}>Contact</a></li>
                <li><a href={`${process.env.PUBLIC_URL}/site-plan.html`}>Site Plan</a></li>
            </ul>
        </nav>
    );
}

export default Header;