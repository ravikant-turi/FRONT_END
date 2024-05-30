import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Authenticate from "../athentication/Authenticate";
import { useAuth } from "../security/AuthContext";
export default function Login() {
  const [userName, setUserName] = useState("name");
  const [password, setPassword] = useState("");
  const [showSuccesMassage,setShowSuccesMassage]=useState(false);
  const [showErrorMassage,setShowErrorMassage]=useState(false);

 const navigate=useNavigate();

 const authContext=useAuth();
  function handleSubmit(){
    //   console.log(userName)
    //   console.log(password)

    if(authContext.login(userName,password)){
      // authContext.setAuthenticated(true)
      //  console.log("Succes!")
      //  setShowSuccesMassage(true)
      //  setShowErrorMassage(false)
      //  console.log("showSuccesMassage :" + showSuccesMassage)
       navigate(`/welcome/${userName}`)
    }
    else{
      authContext.setAuthenticated(false)
        // console.log("failed!")
        // setShowSuccesMassage(false)
        // setShowErrorMassage(true)
        // console.log("showErrorMassage :" + showErrorMassage)
    }
  }
  
  return (
    <div className="Login">
        
        <h1>Time to Login</h1>
        <Authenticate message1={showErrorMassage}
        message2={showSuccesMassage}></Authenticate>
        
      <div className="Loginform">
        <div>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={(event) => {
            //   console.log(event.target.value);
              setUserName(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
            //   console.log(event.target.value);
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <button type="button" name="login"
          onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

