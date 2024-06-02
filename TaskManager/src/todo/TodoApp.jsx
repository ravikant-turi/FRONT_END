import React, { Children } from "react";
import HeaderComponent from "../component/HeaderComponent";
import FooterComponent from "../component/FooterComponent";
import LogoutComponent from "../component/LogoutComponent";
import ListTodoComponent from "../component/ListTodoComponent";
import WelcomeComponent from "../component/WelcomeComponent";
import ErrorComponent from '../component/ErrorComponent'
import LoginComponent from "../component/LoginComponent";
import AuthProvider, { useAuth} from "../security/AuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  Navigate,
}

from "react-router-dom";
import "./TodoApp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {ReactRouterdom } from '../react-router-dom'

function AuthenticatedRoute({children}){
             const authContext=useAuth()
             if(authContext.isAuthenticated){
               return children;
             }
             return <Navigate to="/"></Navigate>
}
export default function TodoApp() {
  


  return (
    <div className="TodoApp">
   <AuthProvider>
        
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route
            path="/welcome/:username"
            element={
              < AuthenticatedRoute>
              
            <WelcomeComponent />

            </AuthenticatedRoute>
          }
          ></Route>
          <Route path="*" element={
          
          <ErrorComponent />}></Route>
          <Route
            path="/todo"
            element={
             <AuthenticatedRoute>
              
               <ListTodoComponent/>

             </AuthenticatedRoute>

          

          }
          ></Route>
          <Route path="/logout" element={<LogoutComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}





