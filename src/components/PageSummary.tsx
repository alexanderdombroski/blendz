import React, { useRef } from "react";
import WordCycler from "./WordHopper";

interface PageSummaryArgs {
    pageName: string
    href: string
    hopPhrases: string[]
}

function PageSummary({pageName, href, hopPhrases}: PageSummaryArgs) {
    const wordCyclerRef = useRef<WordCycler>(null)
    
    const triggerNextWord = () => {
        if (wordCyclerRef.current) {
            wordCyclerRef.current.nextWord();
        }
    };

    return (
        <div className="page-summary" onMouseEnter={triggerNextWord}>
            <WordCycler ref={wordCyclerRef} phrases={hopPhrases}/>
            <a href={href}>{pageName}</a>
        </div>
    );
}




export { PageSummary }