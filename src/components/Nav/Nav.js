import React from 'react'
import logo from '../../assets/nav-logo.png'
import './Nav.css';
const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navImg'>
      <img src={logo}  className="logo" alt="My Website Logo" />
      </div>
    <ul className='navLinks'>
      <li><a href="#">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/orderOnline">Order online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
  )
}

export default Nav
