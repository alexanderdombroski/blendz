import { useEffect } from "react";

function preloadImages(imagePaths: string[]) {
    useEffect(() => imagePaths.forEach(path => (new Image()).src = path), [imagePaths]);
}


export { preloadImages }