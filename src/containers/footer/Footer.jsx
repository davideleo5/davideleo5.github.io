import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'
import instagramLogo from '../../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content section__padding'>
        <div className='column column-1'>
          <a href='/'>
            <img src={logo} alt='Divino Musical Logo' width='50' height='50' />
          </a>
          <a className='mail' href="mailto:info@divino-musical.com">info@divino-musical.com</a>
        </div>
        <div className='column column-2'>
        </div>
        <div className='column column-3'>
          <a href='https://instagram.com/divino_musical?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr' target='blank'>
            <img src={instagramLogo} alt='Instagram logo' width='18' height='18' />
            <p>Instagram</p>
          </a>
        </div>
      </div>
      <p className='copyright'>Copyright © 2023 - Divino Musical</p>
    </div>
  )
}

export default Footer
