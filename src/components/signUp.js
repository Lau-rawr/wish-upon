import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import ErrorNotice from "./misc/ErrorNotice";

export default function Register(){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const {userData, setUserData} = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try{
      const newUser = {username, password, passwordCheck};
      await axios.post(
        "/users/add", 
        newUser
      );
      const loginRes = await axios.post("/users/login", {
        username,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
  } catch(err){
      err.response.data.msg && setError(err.response.data.msg);
    }
  };



    return(
      <section>
        <div className="container">
          <div className="user signinBx" >
            <div className="formBx">
              <form onSubmit={submit} >
                <h2>Register</h2>
                {error && (
                  <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <label>Username</label>
                <input 
                type = "text" 
                required 
                onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>   
                <input 
                id="register-password" 
                type = "password" 
                required
                onChange={(e) => setPassword(e.target.value)}
                />

                <input type = "password" 
                placeholder="Verify password" 
                required
                onChange={(e) => setPasswordCheck(e.target.value)}
                />
  
                <input type= "submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  } 
