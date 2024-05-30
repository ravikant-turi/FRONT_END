import { createContext, useContext, useState } from "react"
//1 : create context
export const AuthContext=createContext();
export const useAuth=()=>useContext(AuthContext)
//2: share the created context with other component
export default function AuthProvider({children}){
    
    //put some state in the context
    // const[ number,setNumber]=useState(0)

    const [isAuthenticated,setAuthenticated]=useState(false)
    const [username,setUserName]=useState(null)
    function login(username,password){
        if(username==="ravi" && password=="dummy"){
           setAuthenticated(true)
           setUserName(username)
            return true;
          }
          else{
           setAuthenticated(false)
           setUserName(null)
              return false;
          }
        }
         
    function logout(){
        setAuthenticated(false)
    }

    

    // setInterval(()=> setNumber(number+1),10000)
    return(
        <>
        <AuthContext.Provider  value={{isAuthenticated,login,logout,username}} >
            {children}
        </AuthContext.Provider>
        </>
    )
}