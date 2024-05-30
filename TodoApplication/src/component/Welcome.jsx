import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { retriveHelloWordBean } from '../apies/HelloWorldApiService';
// import {retriveHelloWordPathVariable} from '../apies/HelloWorldApiService'
export default function Welcome() {
  const {userName}=useParams()
  // console.log(userName);
 const [message,setMassage]=useState(null);
  function  callHelloWorldRestApi(){
    console.log("called")
    // retriveHelloWordPathVariable()
    retriveHelloWordBean('ravi')
            .then((responce)=>successFullResponce(responce))
            .catch((error)=>errorResponce(error))
            .finally(()=>console.log("clean UP"))
  }
  function successFullResponce(responce){
    console.log(responce)
    setMassage(responce.data.message)
  }
  function errorResponce(error){
    console.log(error)
  }
  return (
    <div>
    <h1>Welcome {userName}</h1>
      {/* <Link to="/ListTodosComponent">Go here</Link> */}
      <Link to="/todos">click</Link>
      <div>
        <button className='m-3 bg-green-700 btn btn-success' onClick={callHelloWorldRestApi}>Hello RestApi</button>

      </div>
      <div>{message}</div>
    </div>
    
  )
}
