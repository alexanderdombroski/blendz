import React from "react";
import TextHopper from "./TextHopper";

interface PageSummaryArgs {
    pageName: string
    href: string
    hopPhrases: string[]
}

function PageSummary({pageName, href, hopPhrases}: PageSummaryArgs) {
    return (
        <div>
            <a href={href}>{pageName}</a>
            <TextHopper phrases={hopPhrases}/>
        </div>
    );
}



export { PageSummary }