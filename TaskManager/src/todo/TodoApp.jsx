import React from "react";

import "./TodoApp.css";
import { useState } from "react";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <Logincomponent />
    </div>
  );
}

function Logincomponent() {
  const [username, setUserName] = useState("ravi");

  const [password, setPassword] = useState("password");
  
  const[shwoSuccessMessage,setShowSuccessMessage]=useState(false);
  const[shwoErrorMessage,setShowErrorMessage]=useState(false);

  function handleUsernameChange(event) {
    // console.log(event.target.value);
    setUserName(event.target.value);
  }
  function handlePasswordChange(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }
  function handleSubmit(){
      if(username=="ravi" && password=="dummy"){
           setShowSuccessMessage(true)
           setShowErrorMessage(false)
      }
      else{
        
        setShowErrorMessage(true)
        setShowSuccessMessage(false)
      }
  }
  function SuccessMessageComponent(){
    if(shwoSuccessMessage){
      return(
         <>
         <div className="successMessage">Authenticated Successful</div>
         </>
      )
    }
    else{
     return null;
    }
 }
 function EroorMessageComponent(){
    if(shwoErrorMessage){
      return(
         <>
        <div className="errorMessage">Authentication Failed. Please check your credntials</div>
    
         </>
      )
    }
    else{
     return null;
    }
 }
  return (
    <div className="Login">

    { shwoSuccessMessage &&  <div className="successMessage">Authenticated Successful</div>}
    {shwoErrorMessage &&<div className="errorMessage">Authentication Failed. Please check your credntials</div>
    }
    
      <div className="LoginForm">
        <div>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
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

function WelcomeComponent() {
  return <div className="Welcome">Welcome Component</div>;
}
