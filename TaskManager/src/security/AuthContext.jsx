import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [number, SetNumber] = useState(0);

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUserName] = useState("ravi");
  const [password, setPassword] = useState("dummy");

  function login(usename, password) {
    if (username == "ravi" && password == "dummy") {

      setAuthenticated(true);
      return true
    } 
    else {
      setAuthenticated(false);
       return false
    }
  }
  function logout(){
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
}
