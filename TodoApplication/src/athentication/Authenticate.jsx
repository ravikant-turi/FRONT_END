import React from 'react'

export default function Authenticate({message1,message2}) {
   
    console.log("showErrorMassage...." + message1)
    console.log("showSuccessMassage...." + message2)
    // var flag=true
    // if(flag){
    //     flag=false
    //     return(
    //         <>

    //         </>
    //     )
    // }
   if(message2){
    return(
        <div className="succesMessage">Authenicated Sucessfully</div>
        
        )
   }
   if(message1){
    return(
        <div className="error">Authentication Failed check your credenials</div>
        )
   }
    
}
   
    // if (showSuccesMassage) {
    //     console.log(showSuccesMassage)
    //  return  <div className="succesMessage">Authenicated Sucessfully</div>
    // }
   
    // if (showErrorMassage) {
    //     console.log(showErrorMassage)
    //  return  <div className="error">Authentication Failed check your credenials</div>
    // }
    // return null;
  

