import React from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import "./TodoApp.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
// import {ReactRouterdom } from '../react-router-dom'
export default function TodoApp() {
  return (
    <div className="TodoApp">
        <HeaderComponent/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logincomponent />}></Route>
          <Route path="/login" element={<Logincomponent />}></Route>
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent />}
          ></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
          <Route
            path="/todo"
            element={<ListTodoComponent></ListTodoComponent>}
          ></Route>
        </Routes>
      </BrowserRouter>

     <FooterComponent/>
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
  const param = useParams();
  //    console.log(param.username)
  return <>
  welcome Component : {param.username}
  <div>
    Manage Your todo : 
    <Link to="/todo">click</Link>
    <br />
    
  </div>
  </>;
}

function ErrorComponent() {
  return (
    <>
      your are working hard and
      <h3>Apologies for the 404 . Reach out to our team at AVC</h3>
    </>
  );
}
function ListTodoComponent() {
   const today=new Date();
   const targetDate=new Date(today.getFullYear()+12,today.getMonth(),today.getDate())
  const todos = [
    {
      id: 1,
      description: "learn dsa",
      done: false,
      targetDate:targetDate,
    },
    {
      id: 2,
      description: "learn web",
      done: false,
      targetDate:targetDate,
    },
    {
      id: 3,
      description: "learn app",
      done: false,
      targetDate:targetDate,
    },
  ];
  return (
    <>
      <h3>Tood list {todos[0].done}</h3>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Isdone?</td>
              <td>TargetDate</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
function HeaderComponent(){
    return(
        <>
        <div className="header">
            header
            <hr />
        </div>
        </>
    )
}
function FooterComponent(){
    return(
        <>
       <div className="footer">
        <hr />
        Footer
       </div>
        </>
    )
}
function Logout(){
    return(
        <>
        <div className="logout">
    <h3>YOu are logout</h3>
    Thank you for using this is app
        </div>
        </>
    )
}
function Login(){
    return(
        <>
        <div className="login">
            LOGIN
        </div>
        </>
    )
}