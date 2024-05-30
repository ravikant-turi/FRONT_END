import React from 'react'
import { Link } from 'react-router-dom'
export default function LogoutComponent() {
  return (
    <div className='LogoutComponent'>
      <h1>You are logged out!</h1>
      <div>
        Thank you for using our app .come back soon
      </div>
       <Link to="/welcome">click</Link>
    </div>
  )
}
