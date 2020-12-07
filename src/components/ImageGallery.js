import React, { useState, useEffect, useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import ImageCard from '../components/imageCard';
import { ReactSVG } from 'react-svg';

export default function ImageGallery() {
    const [allImages, addImage] = useState([{}]);
    // const images = useRef([{}]);
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(
                "http://localhost:5000/image/all",
            );
            // images.current = response.data;
            addImage(response.data);
            console.log(allImages);
        }
        fetchItems();
    })

    const colorImage = async (image) => {
        if (!userData.token) {
            history.push("/")
            return
        }

        let newImage = { imageId: image._id, component: image.component };
        //console.log(newImage);

        const response = await axios.post(
            "http://localhost:5000/user_images/add",
            newImage,
            { headers: { "x-auth-token": userData.token } },
        );
        console.log(response.data._id)
        history.push(`/coloringpage/${response.data._id}`)
    }

    return (
        <div>
            <h1>Choose an image to color!</h1>
            {allImages.map((image, i) => {
                console.log(image)
                return (
                    <div className="image-card" key={i}>
                        <h4>{image.title}</h4>
                        <ReactSVG src={image.svg_url} />
                        <button onClick={() => colorImage(image)}>Color Me!</button>
                    </div>
                )
            })}
            {/* <ReactSVG src="https://res.cloudinary.com/drqctijmr/image/upload/v1606887811/22_Stay_weird_rsqaja.svg" /> */}
            {/* </div>  */}
        </div>
    )
}