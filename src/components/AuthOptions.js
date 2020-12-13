// in order to access user
import React, { Fragment, useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Link } from 'react-router-dom';

export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    const register = () => history.push("/signUp");
    const login = () => history.push("/signIn");

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
        history.push("/");
    };

    return (
        <Fragment>
            {userData.user ? (
                <>
                    <Link to="/userGallery" class="nav-link">My Gallery </Link>
                    <Link to="/imageGallery" class="nav-link">Image Gallery </Link>
                    <Link to="/showcase" class="nav-link">Showcase</Link>
                    <a class="nav-link" href="#" onClick={logout}>Log Out</a>

                </>
            ) : (
                    <>
                        <Link to="/imageGallery" class="nav-link">Image Gallery </Link>
                        <a class="nav-link" href="#" onClick={register}>Sign Up</a>
                        <a class="nav-link" href="#" onClick={login}>Sign In</a>
                    </>
                )}
        </Fragment>
    )
}
