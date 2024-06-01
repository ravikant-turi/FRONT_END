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
  function ErrorComponent() {
    return (
      <>
        your are working hard and
        <h3>Apologies for the 404 . Reach out to our team at AVC</h3>
      </>
    );
  }
  export default ErrorComponent