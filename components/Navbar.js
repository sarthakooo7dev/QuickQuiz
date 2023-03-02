import React from 'react'
import logo from '../assets/logo.png'
import '../index.css'

// note: A basic Navbar at the top

const Navbar = () => {
  return (
    <div>
      <div className="Nav ">
        <div className="logo ">
          <img src={logo} alt="" />
        </div>
        <div className="abt">
          <h3>sarthak.shukla007@gmail.com</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
