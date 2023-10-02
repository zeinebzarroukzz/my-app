import React from 'react'

const footer = () => {
  return (
    <footer>
    <img src="logo.png" alt="My Website Logo" />
    <div className='footer-content'>
        <p>Navigation</p>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/orderOnline">Order online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
        <div>
        <h2>Contactez-nous</h2>
          <p>Email : contact@example.com</p>
          <p>Téléphone : +123 456 789</p>
        </div>
        <div className="social-media">
          <h2>Suivez-nous</h2>
          <ul>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
          </ul>
        </div>
    </div>
    </footer>
  )
}

export default footer