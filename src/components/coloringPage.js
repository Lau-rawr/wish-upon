import React, { useState, useContext, useEffect, useCallback } from "react";
import { useParams, useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import ColoredInImage from "./images/coloredInImage";
import ColorPalette from '../components/colorPalette'
import UserContext from "../context/UserContext";
import Stitch from "./images/stitch";
import Minnie from "./images/minnie";
import axios from 'axios';
import swal from 'sweetalert';

// const components = {
//     "stitch": Stitch
// }

export default function ColoringPage() {

    // object id of the user image (different for each copy of the smae image)
    let { id } = useParams();
    console.log({ id })
    const [userImage, setUserImage] = useState({});
    const [color, setColor] = useState("blue");
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
        .then(async(willDelete) => {
            if (willDelete) {
                await axios.delete(
                    `http://localhost:5000/user_images/${id}`,
                    { headers: { "x-auth-token": userData.token } },
                );
            }
        })
        .then(
            history.push("/userGallery")   
        )
    }

    const resetColors = async(id) => {
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
        <div className="coloring-page">
            <div id="coloring-image-container" >
                <ColoredInImage size="large" key={userImage._id} component={userImage.component} onFill={onFillColor} fillColors={userImage.fill_colors} />
            </div>
            <ColorPalette currentColor={color} changeColor={setColor} />
            <button onClick={() => deleteImage(userImage._id)}>Delete</button> |
            <button onClick={() => resetColors(userImage._id)}>Reset</button> |
            <button onClick={() => {history.push("/userGallery")}}>Done</button>
        </div>
    )
}



// import React, {useState, useContext, useEffect, useCallback} from "react";
// import {useParams, useHistory} from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// import ColoredInImage from "./images/coloredInImage";
// import ColorPalette from '../components/colorPalette'
// import UserContext from "../context/UserContext";
// import Stitch from "./images/stitch";
// import Minnie from "./images/minnie";
// import axios from 'axios';

// // const components = {
// //     "stitch": Stitch
// // }

// export default function ColoringPage() {

//     // object id of the user image (different for each copy of the smae image)
//     let {id} = useParams();
//     console.log({id})
//     const [userImage, setUserImage] = useState({});
//     const [color, setColor] = useState("blue");
//     const [fetched, setFetched] = useState(false);
//     // const [ColorImage, setColorImage] = useState();
//     const history = useHistory();

//     const {userData} = useContext(UserContext);

//     useEffect(() => {
//         // getting user image object from database using the object id
//         const fetchItems = async () => {
//             if (!fetched) {
//                 const response = await axios.get(
//                     `http://localhost:5000/user_images/${id}`, 
//                     {headers: {"x-auth-token": userData.token}},
//                 );
//                 // set the user image 
//                 setUserImage(response.data)
//                 // setColorImage(components[userImage.component])
//                 console.log(response.data)
//                 setFetched(true)
//             }
//           }
//         fetchItems();  
//     })

//     const onFillColor = async (i) => {
//         let newFillColors = userImage.fill_colors.slice(0)
//         newFillColors[i] = color 

//         setUserImage({
//             ...userImage,
//             fill_colors: newFillColors
//         })

//         console.log(userImage)
//         try{
//             //var token = JSON.parse(localStorage.getItem("auth-token"));
//             const response = await axios.post(
//             `http://localhost:5000/user_images/${id}`, 
//             userImage,
//               {headers: {"x-auth-token": userData.token}},
//             );
//             console.log(response);
//         } catch(err){
//             console.log("no");
//           }

//         // const response = axios.post(
//         //     `http://localhost:5000/user_images/${id}`, 
//         //     {headers: {"x-auth-token": userData.token}},
//         //     userImage,
//         // );
//         // console.log(response)

//     //     fetch(`https://color-by-nature-api.herokuapp.com/user_images/${id}`,{
//     //         method: 'PATCH',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             'Authorization': `bearer ${token}`},
//     //         body: JSON.stringify({id: userImage.id, fill_colors: newFillColors})
//     //     })
//     //     .then(r => r.json())
//     //     .then(console.log)   
//     }

//     return(
//         <div className="coloring-page">
//             <ColorPalette currentColor={color} changeColor={setColor} />
//             <div id="coloring-image-container" > 
//                 <ColoredInImage size="large" component={userImage.component} onFill={onFillColor} fillColors={userImage.fill_colors}/>
//                 {/* <ColoredInImage size="large" component={userImage.component} onFill={onFillColor} fillColors={userImage.fill_colors}/> */}
//                 {/* <ColorImage id="svg-image" onFillColor={onFillColor} fillColors={userImage.fill_colors} />    */}
//                 {/* <p class="auto-save-text" >* This image will save automatically, so color away! <span role='img' aria-label='thumbs up emoji'>👍</span></p> */}
//             </div>
//             {/* <div className="image-description">
//                 <h2 id="description-heading" >{currentImage.national_park} National Park</h2>
//                 <hr />
//                 <p><b>Established:</b> {currentImage.year}</p>
//                 <p><b>Location:</b> {currentImage.location}</p>
//                 <p>{currentImage.description}</p>    
//             </div>  */}
//         </div>
//      )
// }