import React, { useState, useEffect, useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import axios from 'axios';
//import ImageCard from '../components/imageCard';
import UserImageCard from '../components/userImageCard';
// import { all } from "../../backend/routes/image";

export default function UserGallery() {
    //const images = useRef([{}]);
    const [allImages, addImage] = useState([{}]);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(
                "http://localhost:5000/user_images/all",
                { headers: { "x-auth-token": userData.token } },
            );
            addImage(response.data);
            // console.log(allImages);
        }
        fetchItems();
    })

    return (
        <div id="my-gallery">
            {allImages.map((image, i) => {
                // console.log(image)
                return (
                    <UserImageCard id="my-image-card" key={image._id} userImage={image} />
                )
            })}
        </div>
    );
}