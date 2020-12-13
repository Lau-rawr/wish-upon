import React, { useState, useEffect } from "react";
import ColoredInImage from "./images/coloredInImage";
export default function ShowcaseImageCard(props) {
  const [image, setImage] = useState({});

  useEffect(() => {
    setImage(props.userImage)
  }, [props])

  return (
    <div className="image-card">
      {image.component !== undefined ?
        <ColoredInImage component={image.component} size={props.size} onFill={() => { }} fillColors={image.fill_colors} />
        : <>Loading</>
      }
    </div>
  )
}
