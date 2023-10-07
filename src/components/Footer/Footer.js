import React from 'react'
import footerlogo from '../../assets/footer-logo.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import './Footer.css'
const footer = () => {
  return (
    <>
    <footer>
  <div className='footer-content'>
    <div>
      <img src={footerlogo} className='footerImg' alt="My Website Logo" />
    </div>
    <div>
      <h2>Navigation:</h2>
      <ul >
        <li className='navigation'><a href="#">Home</a></li>
        <li className='navigation'><a href="/about">About</a></li>
        <li className='navigation'><a href="/menu">Menu</a></li>
        <li className='navigation'><a href="/reservations">Reservations</a></li>
        <li className='navigation'><a href="/orderOnline">Order online</a></li>
        <li className='navigation'><a href="/login">Login</a></li>
      </ul>
    </div>
    <div>
      <h2>Contactez-nous:</h2>
      <ul>
        <li className='navigation'>Email : contact@example.com</li>
        <li className='navigation'>Téléphone : +123 456 789</li>
      </ul>
    </div>
    <div className="social-media">
      <h2>Suivez-nous:</h2>
      <div className='links'>
        <ul>
          <li><a href="https://twitter.com/"><img src={(twitter) } className='social_mediaImg'/></a></li>
           <li><a href="https://www.instagram.com/"><img src={(instagram)} className='social_mediaImg'/></a></li>
          <li><a href="https://www.facebook.com/"><img src={(facebook)} className='social_mediaImg'/></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</>
    
  )
}

export default footer