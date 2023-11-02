import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#what">Chi siamo</a></p>
    <p><a href="#shows">Spettacoli</a></p>
    <p><a href="#social">Social</a></p>
    <p><a href="#contatti">Contatti</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
         {/* @TODO: sostituire logo con icona musical (calice di vino, roba simile) */}
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
