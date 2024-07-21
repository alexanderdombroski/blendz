import { useEffect } from "react";

function PreloadImages(imagePaths: string[]) {
    useEffect(() => imagePaths.forEach(path => (new Image()).src = path), [imagePaths]);
}


export { PreloadImages }