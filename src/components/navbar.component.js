import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import AuthOptions from './AuthOptions';


function Navbar(props) {
    return (
        <header id="navbar">
            <Link to="/home"><h1 className= "title">Wish-Upon</h1></Link> 
            <AuthOptions />
        </header>
      );
  
}

export default withRouter(Navbar);