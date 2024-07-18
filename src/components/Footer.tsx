import React, { useState } from "react";
import {ReactComponent as ShareIcon } from "./share_nodes.svg"

function Socials() {
    const [color, setColor] = useState<string>('white');
    
    return (
        <div className="socials">
            <div className="social-popup" hidden={true}>
                <a href="https://www.facebook.com/" target="blank"><img src={`${process.env.PUBLIC_URL}/images/social/facebook.png`} alt="facebook blendz social media site" /></a>
                <a href="https://x.com/home" target="blank"><img src={`${process.env.PUBLIC_URL}/images/social/x.png`} alt="x blendz social media" /></a>
                <a href="https://www.instagram.com/" target="blank"><img src={`${process.env.PUBLIC_URL}/images/social/instagram.png`} alt="instagram blendz social media" /></a>
                <a href="https://www.linkedin.com/" target="blank"><img src={`${process.env.PUBLIC_URL}/images/social/linkedin.png`} alt="blendz linkedin page" /></a>
            </div>
            <ShareIcon
                className="social-btn"
                onMouseOver={() => setColor('#FF9933')}
                onMouseLeave={() => setColor('white')}
                onClick={() => ToggleSocials()}
                style={{ fill: color }} // Apply the fill color dynamically
            /> 
        
        </div>
    )
     
}
function Footer() {
    
    return (
        <footer>
            <p>Blendz &copy; {(new Date()).getFullYear()} Alex Dombroski</p>
            <a href={`${process.env.PUBLIC_URL}/attributions.html`}>Attributions</a>
            <Socials/>
        </footer>
    );
}

function ToggleSocials() {
    const socials: HTMLDivElement | null = document.querySelector('.social-popup');
    if (socials === null) {
        console.error("Footer not loaded correcty, couldn't find social button")
    } else {
        socials.style.display = socials.style.display === "none" ? "flex" : "none"
    }
}

export default Footer;