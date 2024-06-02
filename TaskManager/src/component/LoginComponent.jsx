import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import  AuthProvider from '../security/AuthContext'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../security/AuthContext";

function LoginComponent() {
  const [username, setUserName] = useState("ravi");

  const [password, setPassword] = useState("dummy");

  const [shwoSuccessMessage, setShowSuccessMessage] = useState(false);
  const [shwoErrorMessage, setShowErrorMessage] = useState(false);

  const authContext = useAuth();
  console.log(authContext.isAuthenticated);
  //  setAuthenticated

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
    if (authContext.login(username, password)) {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);

      navigate(`/welcome/${username}`);
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
export default LoginComponent;
