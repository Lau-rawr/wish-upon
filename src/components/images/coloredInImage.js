import React, {useState, useEffect, useRef} from "react";
import { useHistory } from "react-router-dom";
// import ColoredInImage from "./images/coloredInImage";
import Stitch from "../images/stitch.js";

export default function ColoredInImage(props) {
    const[image, setImage] = useState({});
    var ColorImage = useRef();

    const components = {
        "stitch": Stitch
    }

    useEffect(() => {
        setImage(props)
        console.log(image)
        // ColorImage.current = components[image.component]
        // console.log(ColorImage.current)
    }, [props])

    
    return(
        <div className="image-card">
            {image.component === "stitch" ?
                <Stitch id="svg-image" onFill={image.onFill} fillColors={image.fillColors} /> :
                <>Hello</>
}       
        </div>
    )
}
