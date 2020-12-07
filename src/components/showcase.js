import React, { useState, useEffect, useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import axios from 'axios';
import ShowcaseImageCard from '../components/showcaseImageCard';
export default function UserGallery() {
    //const images = useRef([{}]);
    const [allImages, addAllImages] = useState([{}]);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(
                "http://localhost:5000/user_images/"
            );
            addAllImages(response.data);
            // console.log(allImages);
        }
        fetchItems();
    })

    return (
        <div id="my-gallery">
            <h1>Image Showcase</h1>
            {allImages.map((image, i) => {
                return (
                    <ShowcaseImageCard id="my-image-card" key={image._id} userImage={image} />
                )
            })}
        </div>
    );
}