import React, { useState } from "react";
import {ReactComponent as ShareIcon } from "./share_nodes.svg"

function Footer() {
    const [color, setColor] = useState<string>('white');
    
    return (
        <footer>
            <p>Blendz &copy; {(new Date()).getFullYear()} Alex Dombroski</p>
            <a href={`${process.env.PUBLIC_URL}/attributions.html`}>Attributions</a>
            <ShareIcon
                className="social-btn"
                onMouseOver={() => setColor('#FF9933')}
                onMouseLeave={() => setColor('white')}
                style={{ fill: color }} // Apply the fill color dynamically
            />
        </footer>
    );
}





export { Footer }