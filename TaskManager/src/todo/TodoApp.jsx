import React from "react";
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import "./TodoApp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {ReactRouterdom } from '../react-router-dom'
export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logincomponent />}></Route>
          <Route path="/login" element={<Logincomponent />}></Route>
          <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
          <Route path="/error" element={<ErrorComponent/>}></Route>
        </Routes>
      </BrowserRouter>

      {/* {/* <WelcomeComponent/> */}
    </div>
  );
}

function Logincomponent() {
  const [username, setUserName] = useState("ravi");

  const [password, setPassword] = useState("dummy");

  const [shwoSuccessMessage, setShowSuccessMessage] = useState(false);
  const [shwoErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    // console.log(event.target.value);
    setUserName(event.target.value);
  }
  function handlePasswordChange(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }
  function handleSubmit() {
    if (username == "ravi" && password == "dummy") {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`./welcome/${username}`);
    } else {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  }
  function SuccessMessageComponent() {
    if (shwoSuccessMessage) {
      return (
        <>
          <div className="successMessage">Authenticated Successful</div>
        </>
      );
    } else {
      return null;
    }
  }
  function EroorMessageComponent() {
    if (shwoErrorMessage) {
      return (
        <>
          <div className="errorMessage">
            Authentication Failed. Please check your credntials
          </div>
        </>
      );
    } else {
      return null;
    }
  }
  return (
    <div className="Login">
      {shwoSuccessMessage && (
        <div className="successMessage">Authenticated Successful</div>
      )}
      {shwoErrorMessage && (
        <div className="errorMessage">
          Authentication Failed. Please check your credntials
        </div>
      )}

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
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
   const param= useParams()
//    console.log(param.username)
  return( 
  <>
  welcome Component : {param.username}
  </>
  )
}

function ErrorComponent(){
    return(
        <>
        your are working hard and 
         <h3>Apologies for the 404 . Reach out to our team at AVC</h3>
        </>
    )
}
