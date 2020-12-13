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
        "http://localhost:5000/users/add", 
        newUser
      );
      const loginRes = await axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
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
                
                <input 
                type = "text" 
                required 
                placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}
                />

                
                <input 
                id="register-password" 
                type = "password" 
                placeholder="Password" 
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


// import React, {useState, useContext} from "react";
// import UserContext from "../context/UserContext";
// import {useHistory} from "react-router-dom";
// import axios from 'axios';
// import ErrorNotice from "./misc/ErrorNotice";
// import { ModalProvider, Modal } from "./modal.js";
// import './login.css';

//   export default function SignUp(){
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();
//     const [passwordCheck, setPasswordCheck] = useState();
//     const [error, setError] = useState();

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const {setUserData} = useContext(UserContext);
//     const history = useHistory();

//     const submit = async (e) => {
//       e.preventDefault();

//       try{
//         const newUser = {username, password, passwordCheck};
//         await axios.post(
//         "http://localhost:5000/users/add", 
//         newUser
//         );
//         const loginRes = await axios.post("http://localhost:5000/users/login", {
//         username,
//         password,
//         });
//       setUserData({
//       token: loginRes.data.token,
//       user: loginRes.data.user,
//       });
//       localStorage.setItem("auth-token", loginRes.data.token);
//       history.push("/home");
//       } catch(err){
//       err.response.data.msg && setError(err.response.data.msg);
//       }
//     };

//     return(
//     <>  
//       <ModalProvider>
//       {/* <div className="button3"> */}
//       <button className="button2" type="button"   onClick={() => setIsModalOpen(true)}>
//        Sign up
//       </button>
// {/*     
//       </div> */}

//     {isModalOpen && (
//     <Modal onClose={() => setIsModalOpen(false)}  >
//     {error && (
//       <ErrorNotice message={error} clearError={() => setError(undefined)} />
//     )}
//     <form style={{ width:'200px', display:'inline-block', alignContent:'center'}} onSubmit={submit} >
//       <h2>Sign up</h2>

//     <input 
//     type = "text" 
//     placeholder=" Username" 
//     required 
//     style={{margin:"5px"}}
//     onChange={(e) => setUsername(e.target.value)}
//     />
//   <br></br>
 
//     <input 
//     id="register-password" 
//     type = "password" 
//     placeholder=" Password" 
//     required
//     style={{margin:"5px"}}
//     onChange={(e) => setPassword(e.target.value)}
//     />
//      <br></br>
    

//       <input type = "password" 
//     placeholder=" Verify password" 
//     required
//     style={{margin:"5px"}}
//     onChange={(e) => setPasswordCheck(e.target.value)}
//     />
//      <br></br>
//       <input style={{padding:'5px', margin:'5px',background:"lightblue"}}type= "submit" value="Register" />
  
      
//     </form>
//     </Modal>
//     )}    
//     </ModalProvider>
//     </>

//     )
//   } 
