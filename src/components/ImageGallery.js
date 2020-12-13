import React, { useState, useEffect, useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';


export default function ImageGallery() {
    const [allImages, addImage] = useState([{}]);
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(
                "http://localhost:5000/image/all",
            );
            addImage(response.data);
            console.log(allImages);
        }
        fetchItems();
    })

    const colorImage = async (image) => {
        if (!userData.token) {
            history.push("/signIn")
            return
        }

        let newImage = { imageId: image._id, component: image.component };

        const response = await axios.post(
            "http://localhost:5000/user_images/add",
            newImage,
            { headers: { "x-auth-token": userData.token } },
        );
        console.log(response.data._id)
        history.push(`/coloringpage/${response.data._id}`)
    }

    return (
        <>
            <h1>Choose an image to color!</h1>
            <div class="image-gallery">
                {allImages.map((image, i) => {
                    return (
                        <>
                            <div class="image-card" id="gallery" onClick={() => colorImage(image)}>
                                <h4>{image.title}</h4>
                                {image.component !== undefined ?
                                    <>
                                        <img alt="disney" className="new-image" src={image.svg_url} />
                                       
                                    </>
                                    : <>Loading</>}
                            </div>
                        </>
                    )
                }
                )
                }
            </div>
        </>
    )
}
