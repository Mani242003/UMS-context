import React from 'react'
import "./Nabar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <h1>User Management System</h1>
    <ul>
    <Link to="/">Home</Link>
    <Link to="/user">User</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>

   
    </ul>
    
      
    </nav>
  )
}

export default Navbar
