import React from 'react'
import './Navbar.css'
import usericon from './user-icon.png'


export default function Navbar() {
  return (
    <div className='main-navbar-div'>
        <ul className='nav-links'>
            <li className='nav-item'><a href="/">Main</a></li>
            <li className='nav-item'><a href="/Sun">Sun</a></li>
        </ul>
        <a className='userIcon'>
            <img src={usericon}></img>
        </a>

    </div>
  )
}
