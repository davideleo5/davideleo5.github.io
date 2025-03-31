import React from 'react';
import { Navbar, Separator } from '../../components';
import './header.css';

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='header-content'>
        <Navbar />
        <Separator />
        <div className='header-logo'>
          {/* @TODO: sostituire con logo */}
          <h1>Divino musical</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
