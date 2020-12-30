import React, { useState, useEffect, useContext, useRef } from "react";
import axios from 'axios';
import ShowcaseImageCard from '../components/showcaseImageCard';
import { useHistory } from "react-router-dom";
export default function UserGallery() {
    //const images = useRef([{}]);
    const [allImages, addAllImages] = useState([{}]);
    const history = useHistory();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(
                "/user_images/"
            );
            addAllImages(response.data);
            // console.log(allImages);
        }
        fetchItems();
    })

    return (
        <>
            <h1>Artworks Showcase</h1>
            <div class="image-gallery">
                {allImages.length === 0 ?
                    <div class="btn-group" id="coloring">
                        <button class="color-me" onClick={() => history.push('/imageGallery')}>Start coloring now!</button>
                    </div>
                    :
                    <>
                        {allImages.map((image, i) => {
                            return (
                                <ShowcaseImageCard size="small" id="my-image-card" key={image._id} userImage={image} />
                            )
                        })}
                    </>
                }
            </div>
        </>
    );
}
