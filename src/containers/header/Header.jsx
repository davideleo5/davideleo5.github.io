import React from 'react';
import './header.css';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='header-content'>
        <div className='header-logo'>
          <img src={logo} alt='Divino Musical Logo' width='auto' height='100' />
        </div>
      </div>
    </div>
  )
}

export default Header
