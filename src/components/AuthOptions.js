// in order to access user
import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Link } from 'react-router-dom';

export default function AuthOptions() {
    const {userData, setUserData} = useContext(UserContext);
    const history = useHistory();
    const register = () => history.push("/signUp");
    const login = () => history.push("/");

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
        history.push("/");
    };

    return (
        <nav className="auth-options">
        {userData.user ? (
            <>
            <Link to="/userGallery">Your Gallery </Link>
            <Link to="/imageGallery">Image Gallery </Link>
            <Link to="/showcase">Showcase</Link>
            <button onClick={logout}>Log Out</button>
            </>
        ) : (
            <>
            <Link to="/imageGallery">Image Gallery </Link>
            <button onClick={register}>Sign Up</button>
            <button onClick={login}>Sign In</button>
            </>
        )}
        </nav>
    )
}
