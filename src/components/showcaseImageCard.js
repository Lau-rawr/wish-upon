import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Stitch from "../components/images/stitch.js";
import Minnie from "../components/images/minnie.js";
export default function ShowcaseImageCard(props) {
  const [image, setImage] = useState({});
  const history = useHistory();

  useEffect(() => {
    setImage(props.userImage)
  }, [props])

  return (
    <div className="image-card">
      {image.component === "stitch" ?
        <div>
          <Stitch component={image.component} onFill={()=>{}} fillColors={image.fill_colors} />
        </div> :
        <>Start coloring so your works can be here!</>
      }
    </div>
  )
}