import React from 'react';
import { Navbar } from '../../components';
import './header.css';
import background from "../../assets/header-banner.webp";

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className='header-content' style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        <div className='header-logo'>
          {/* @TODO: sostituire con logo */}
          <h1>Divino musical</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
