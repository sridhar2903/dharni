import React from 'react'
import {NavLink} from'react-router-dom'
import '../App.css'
const Header=()=>{
return(
    <>
    <div className='list-items-header'>
   <NavLink to="/home" activeClassName="active" style={{textDecoration:"none"}}>
     <li>Home</li>
     </NavLink>
     <NavLink to="/services" activeClassName="active"  style={{textDecoration:"none"}}>

    <li>Services</li>
    </NavLink>

    <NavLink to="/employee" activeClassName="active"  style={{textDecoration:"none"}}>

    <li>Employee</li>
    </NavLink>

    <NavLink to="/adminpanel" activeClassName="active"  style={{textDecoration:"none"}}>

    <li>AdminPanel</li>
    </NavLink>
    <NavLink to="/signin" activeClassName="active"  style={{textDecoration:"none"}}>

    <li>Sign in</li>
    </NavLink>

    </div>
    </>
)
}

export default Header