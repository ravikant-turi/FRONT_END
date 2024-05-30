import React from "react";
import Login from "../component/Login";
import "./TodoApp.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../component/Welcome";
import ErrorComponent from "../component/ErrorComponent";
import ListTodos from "../component/ListTodosComponent";
import FooterComponent from "../component/FooterComponent";
import LogoutComponent from "../component/LogoutComponent";
import HeaderComponent from "../component/HeaderComponent";
import AuthProvider from "../security/AuthContext";
import { retriveAllTodosForUserName } from "../apies/TodoApiService";
import ListTodosComponent from "../component/ListTodosComponent";
import TodoUpdateComponent from "../component/TodoUpdateComponent";
function AuthenticatedRaoute() {
  return;
}
export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/todo/:id" element={<TodoUpdateComponent/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/welcome/:userName" element={<Welcome />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
            <Route path="/todos" element={<ListTodos></ListTodos>}></Route>
            <Route path="/logout" element={<LogoutComponent />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
