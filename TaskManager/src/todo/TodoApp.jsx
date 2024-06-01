import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import FooterComponent from "../component/FooterComponent";
import LogoutComponent from "../component/LogoutComponent";
import ListTodoComponent from "../component/ListTodoComponent";
import WelcomeComponent from "../component/WelcomeComponent";
import ErrorComponent from '../component/ErrorComponent'
import LoginComponent from "../component/LoginComponent";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
}

from "react-router-dom";
import "./TodoApp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {ReactRouterdom } from '../react-router-dom'
export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent />}
          ></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
          <Route
            path="/todo"
            element={<ListTodoComponent></ListTodoComponent>}
          ></Route>
          <Route path="/logout" element={<LogoutComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}





