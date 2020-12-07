import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from 'react-router-dom';
import ColoredInImage from "./images/coloredInImage";
import UserContext from "../context/UserContext";
import axios from 'axios';
import { saveSvgAsPng } from 'save-svg-as-png';
import swal from 'sweetalert';

export default function ImageDownload(props) {
  let { id } = useParams();
  const [userImage, setUserImage] = useState({});
  const { userData } = useContext(UserContext);
  const [fetched, setFetched] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // getting user image object from database using the object id
    const fetchItems = async () => {
      if (!fetched) {
        const response = await axios.get(
          `http://localhost:5000/user_images/${id}`,
          { headers: { "x-auth-token": userData.token } },
        );
        // set the user image 
        setUserImage(response.data)
        setFetched(true)
      }
    }
    fetchItems();
  })

  const saveImage = () => {
    swal({
      title: "Download image as PNG?",
      buttons: true
    })
      .then((toDownload) => {
        if (toDownload) {
          saveSvgAsPng(document.getElementById("colored-image"), "colored-image.png");
        }
        history.push("/userGallery")
      });
  }

  return (
    <div className="image-card">
      <ColoredInImage size="large" key={userImage._id} component={userImage.component} fillColors={userImage.fill_colors} />
      {saveImage()}
    </div>
  )
}