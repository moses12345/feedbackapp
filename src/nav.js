import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle={
        color : 'white'
    }
    return (
        <nav  data-test='nav'>
          <Link to='/' style={navStyle}>
          <h3>logo</h3>
          </Link>
          <ul className="nav-links">
          <Link to='/feedbackform' style ={navStyle}>
          <li >User</li>
          </Link>
          <Link to ='/show_feedback' style ={navStyle}>
          <li >Company</li>
          </Link>
          </ul>
        </nav>
    )
}

export default Nav
