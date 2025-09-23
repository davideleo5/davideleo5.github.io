import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo.png'
import eventbriteLogo from '../../assets/eventbrite.svg'
import instagramLogo from '../../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='footer container'>
      <div className='footer-content section__padding'>
        <div className='column column-1'>
          <a href='/'>
            <img src={logo} alt='Divino Musical Logo' width='auto' height='40' />
          </a>
          <a className='mail' href="mailto:info@divino-musical.com">info@divino-musical.com</a>
        </div>
        <div className='column column-2'>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/chi-siamo'>Chi siamo</Link></p>
          <p><Link to='/spettacoli'>Le date</Link></p>
        </div>
        <div className='column column-3'>
          <a href="https://www.eventbrite.com/cc/divino-il-musical-teatro-carani-2-3-novembre-2025-4637423" target="_blank" rel="noopener noreferrer">
            <img src={eventbriteLogo} alt='Eventbrite logo' width='18' height='18' />
            <p>Biglietti</p>
          </a>
          <a href='https://instagram.com/divino_musical' target='blank' rel="noopener noreferrer">
            <img src={instagramLogo} alt='Instagram logo' width='18' height='18' />
            <p>Instagram</p>
          </a>
        </div>
      </div>
      <p className='copyright'>Copyright © {(new Date().getFullYear())} - Divino Musical</p>
    </div>
  )
}

export default Footer
