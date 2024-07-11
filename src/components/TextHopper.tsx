import React from "react";
import "../styles/TextHopper.css";


interface TextHopperArgs {
    phrases: string[]
}

function TextHopper({phrases}: TextHopperArgs) {
    
    let currentIndex = 0
    
    return (
        <div>
            <p>{phrases[currentIndex]}</p>
        </div>
    );
}


export default TextHopper