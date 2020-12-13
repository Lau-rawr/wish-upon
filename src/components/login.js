import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import ErrorNotice from "./misc/ErrorNotice";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  
  const {setUserData} = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    try{
      e.preventDefault();
      const loginUser = {username, password};
      const loginRes = await axios.post("http://localhost:5000/users/login", loginUser);
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
              <h2>Sign In</h2>
              {error && (
                  <ErrorNotice message={error} clearError={() => setError(undefined)} />
              )}
              <input type="text" 
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username" />

              <input type="password" 
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />

              <input type= "submit" value="Log In" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 


//   <ModalProvider>

// {/*  
//   <form onSubmit={submit} > */}
//       <button id="button1" type="button" style={{height:'25px'}} onClick={() => setIsModalOpen(true)}>
//    Login
//       </button>
//       <SignUp/>
     
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)}>
           
//   <form onSubmit={submit} >
//         <h2>Login</h2>
//               {error && (
//       <ErrorNotice message={error} clearError={() => setError(undefined)} />
//     )}
//               <input type="text" 
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               style={{margin:"5px"}}
//               placeholder="Username" />

//               <input type="password" 
//               required
//               style={{margin:"5px"}}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password" />
//               <br></br>
//               <input style={{padding:'5px', margin:'5px',background:"lightblue"}} type= "submit" value="Log In" />
//               <br></br>
//           </form>
//         </Modal>
//       )}
  
  
//   </ModalProvider>

//   </>
// );
// }
