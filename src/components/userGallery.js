import React, { useState, useEffect, useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import UserImageCard from '../components/userImageCard';


export default function UserGallery() {
    const [allImages, addImage] = useState([{}]);
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(
                "/user_images/all",
                { headers: { "x-auth-token": userData.token } },
            );
            addImage(response.data);
            // console.log(allImages);
        }
        fetchItems();
    })

    return (
        <>
            {userData.user !== undefined ?
                <>
                    <h1>{userData.user.username}'s Gallery</h1>
                    <div class="image-gallery">
                        {allImages.length === 0 ?
                            <div class="btn-group" id="coloring">
                                <button class="color-me" onClick={() => history.push('/imageGallery')}>Start coloring now!</button>
                            </div>
                            :
                            <>
                                {allImages.map((image, i) => {
                                    return (
                                        <UserImageCard size="small" userImage={image} />
                                    )
                                })}
                            </>
                        }
                    </div>
                </>
                : "loading"}

        </>
    );
}
