// import React, { Component} from "react";
// import { Link } from 'react-router-dom';
import React, {useState, useEffect, useContext} from "react";
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom";
import axios from 'axios';

export default function HomePage() {

  useEffect(() => {
    const putItems = async () => {


      const newImage = {title : "stitch", component : "stitch", svg_url : "https://res.cloudinary.com/drqctijmr/image/upload/v1606887811/22_Stay_weird_rsqaja.svg"};

      const response = await axios.post(
        "http://localhost:5000/image/add", 
        newImage,
      );
        console.log(response);
      }

    putItems();
  });

  return ( 
    <div className="page">Home</div>



  )
}
