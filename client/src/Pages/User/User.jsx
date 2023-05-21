import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './User.css'

const User = () => {

  const { user} = useAuth0();

  return (
    <>
    
    <div class="maincontainer">
        <div class="box">
            <img src={user.picture} alt=""/>
            <ul>
                <li>{user.name}</li>
                <li>{user.birthdate}</li>
                
            </ul>
        </div>
        <div class="About">
            <ul>
                <h1>about</h1>
            </ul>
            {/* <ul>
                <h3>Work</h3>
                <li>Actor</li>
            </ul> */}
            <ul>
                <h3>Gender</h3>
                <li>{user.gender}</li>
            </ul>
            <ul>
                <h3>Country</h3>
                <li>{user.locale}</li>
            </ul>
            <ul>
                <h3>Address</h3>
                <p>{user.address}</p>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>{user.phone_number} </li>
            </ul>
            <ul>
                <h3>Contact</h3>
                <li>{user.phone_number_verified} </li>
            </ul>
            <ul>
                <h3>Mail</h3>
                <li>{user.email} </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default User