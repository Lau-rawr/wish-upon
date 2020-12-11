import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import UserContext from "../context/UserContext";
import axios from 'axios';
import swal from 'sweetalert';
import Stitch from "../components/images/stitch.js";
import Minnie from "../components/images/minnie.js";
export default function UserImageCard(props) {
    const [image, setImage] = useState({});
    var ColorImage = useRef();
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        setImage(props.userImage)
    }, [props])

    const deleteImage = async (id) => {
        if (!userData.token) {
            history.push("/")
            return
        }
        swal({
            title: "Delete image?",
            text: "This cannot be reversed.",
            buttons: true
        })
        .then( async(willDelete) => {
            if (willDelete) {
                await axios.delete(
                    `/user_images/${id}`,
                    { headers: { "x-auth-token": userData.token } },
                );  
            }
        });
    }

    return (
        <div className="image-card">
            {image.component === "stitch" ?
            <div>
                <Stitch component={image.component} onFill={()=>{}} fillColors={image.fill_colors} />
                <Link to={"/coloringpage/"+image._id}>Edit</Link> | 
                <button onClick={() => deleteImage(image._id)}>Delete</button> |
                <Link to={"/imageDownload/"+image._id}>Download</Link>
            </div> :
            <>Hello</>
            }
        </div>
    )
}
