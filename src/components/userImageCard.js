import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from 'axios';
import swal from 'sweetalert';
import ColoredInImage from "./images/coloredInImage";

export default function UserImageCard(props) {
    const [image, setImage] = useState({});
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        setImage(props.userImage)
    }, [props])

    const downloadImage = () => {
        history.push(`/imageDownload/${image._id}`)
    }

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
            .then(async (toDelete) => {
                if (toDelete) {
                    await axios.delete(
                        `http://localhost:5000/user_images/${id}`,
                        { headers: { "x-auth-token": userData.token } },
                    );
                }
            });
    }

    const editImage = () => {
        history.push(`/coloringpage/${image._id}`)
    }

    const showcaseImage = async (id) => {
        image.public = image.public === true ? image.public = false : image.public = true

        setImage({
            ...image
        })
        try {
            const response = await axios.post(
                `http://localhost:5000/user_images/add/${id}`,
                image,
                { headers: { "x-auth-token": userData.token } },
            );
            console.log(response);
        } catch (err) {
            console.log("Unable to save");
        }
    }

    return (
        <div className="image-card">
            {image.component !== undefined ?
                <>
                    <ColoredInImage component={image.component} size={props.size} onFill={() => { }} fillColors={image.fill_colors} />
                    <div class="btn-group flex-wrap" id="user">
                        <button class="download" onClick={() => downloadImage()}>Download</button>
                        <button class="delete" onClick={() => deleteImage(image._id)}>Delete</button>
                        <button class="color-me" onClick={() => editImage()}>Edit</button>
                        <button onClick={() => showcaseImage(image._id)} class={image.public ? "showcasing" : "unpublished"}>{image.public ? "Showcasing" : "Unpublished"}</button>
                    </div>
                </>
                : <>Loading</>
            }
        </div>
    )
}
