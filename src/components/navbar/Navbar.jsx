import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Separator } from '../../components';
import logo from '../../assets/logo.png'
import './navbar.css';

const Menu = () => (
  <>
    <Link to='/spettacoli' className={({ isActive }) => isActive ? "active-menu" : ""}>
      Le date
    </Link>
    <Link to='/chi-siamo' className={({ isActive }) => isActive ? "active-menu" : ""}>
      Chi siamo
    </Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar-separator-container'>
      <div className='navbar container'>
        <div className='navbar-links'>
          <div className='navbar-links_logo'>
            <Link to='/'>
              <img src={logo} alt="Divino Musical Logo" width='auto' height='40' />
            </Link>
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
      <Separator />
    </div>
  )
}

export default Navbar
