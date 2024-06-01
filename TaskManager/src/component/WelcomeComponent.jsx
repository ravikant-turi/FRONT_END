import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    Link,
  }
  
  from "react-router-dom";
  
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  function WelcomeComponent() {
    const param = useParams();
    //    console.log(param.username)
    return (
      <>
        welcome Component : {param.username}
        <div>
          Manage Your todo :<Link to="/todo">click</Link>
          <br />
        </div>
      </>
    );
  }
  export default WelcomeComponent