import React, { useState, useContext, useEffect, useCallback, Fragment } from "react";
import { useParams, useHistory } from 'react-router-dom';

import ColoredInImage from "./images/coloredInImage";
import ColorPalette from '../components/colorPalette'
import UserContext from "../context/UserContext";
import axios from 'axios';
import swal from 'sweetalert';
import PopoverPicker from "../components/PopoverPicker";

export default function ColoringPage() {

    // object id of the user image (different for each copy of the smae image)
    let { id } = useParams();
    const [userImage, setUserImage] = useState({});
    const [color, setColor] = useState('#C53151');
    const [fetched, setFetched] = useState(false);
    const history = useHistory();

    const { userData } = useContext(UserContext);

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
                console.log(response.data)
                setFetched(true)
            }
        }
        fetchItems();
    })

    const onFillColor = async (i) => {
        let newFillColors = userImage.fill_colors.slice(0)
        newFillColors[i] = color
        userImage.fill_colors = newFillColors

        setUserImage({
            ...userImage
        })

        console.log(userImage)
        try {
            const response = await axios.post(

                `http://localhost:5000/user_images/${id}`,

                userImage,
                { headers: { "x-auth-token": userData.token } },
            );
            console.log(response);
        } catch (err) {
            console.log("Unable to save");
        }
    }

    const deleteImage = (id) => {
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
                    )
                        .then(history.push("/imageGallery"))
                }
            })
    }

    const showcaseImage = async (id) => {
        userImage.public = userImage.public === true ? userImage.public = false : userImage.public = true

        setUserImage({
            ...userImage
        })
        try {
            const response = await axios.post(

                `http://localhost:5000/user_images/add/${id}`,

                userImage,
                { headers: { "x-auth-token": userData.token } },
            );
            console.log(response);
        } catch (err) {
            console.log("Unable to save");
        }
    }

    const resetColors = async (id) => {
        let newFillColors = ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"]
        userImage.fill_colors = newFillColors
        setUserImage({
            ...userImage
        })

        try {
            const response = await axios.post(

                `http://localhost:5000/user_images/${id}`,

                userImage,
                { headers: { "x-auth-token": userData.token } },
            );
            console.log(response);
        } catch (err) {
            console.log("Unable to save");
        }
    }

    return (
              <Fragment >
            <div id="cursor">
            <div class="row" id="coloring-card">
                <div class="col-md-9 mb-3 mb-md-0">
                {/* <div class="coloring-card"> */}
                    <ColoredInImage size="large" key={userImage._id} component={userImage.component} onFill={onFillColor} fillColors={userImage.fill_colors} />
                </div>
                
                <div class="col-md-3 mb-3 mb-md-0">
                {/* <div className="coloring-area"> */}
                    <ColorPalette currentColor={color} changeColor={setColor} />
                    <PopoverPicker currentColor={color} changeColor={setColor} />
                </div>
            </div>
            <div class="btn-group flex-wrap" id="coloring">
                <button class="delete" onClick={() => deleteImage(userImage._id)}>Delete</button>
                <button class="reset" onClick={() => resetColors(userImage._id)}>Reset</button>
                <button onClick={() => showcaseImage(userImage._id)} class={userImage.public ? "showcasing" : "unpublished"}>{userImage.public ? "Showcasing" : "Unpublished"}</button>
                <button class="done" onClick={() => { history.push("/userGallery") }}>Done</button>
            </div>
            </div>
        </Fragment>
    )
}
