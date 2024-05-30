import React from 'react'
const person={
   name:"ravi kant ",
   address:{
       line1:'baker Street',
       city :'Ranchi',
       country:'India'
   },
   profile:['twiter','linkdin','instagram'],

  printProfile:()=>{
    person.profile.map(
      (profile)=>{
        console.log(profile)
      }
    )
    
  }
}
function LearningJs() {
  return (
    <div>

        <p>Learning javascript</p>
        {/* <div>{person.name}</div>
        <div>{person.address.country}</div>
        <div>{person.profile[0]}</div> */}
        <div>{person.printProfile()}</div>
      
    </div>
  )
}

export default LearningJs
