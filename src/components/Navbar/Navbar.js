import React from 'react';
import './Navbar.css';
import  { useEffect, useState } from "react";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import icon from '../../assets/RttrIcon.png';
import menubar from '../../assets/menu.png';
import { NavLink } from 'react-router-dom';
// import backgroundimage from '../../assets/homepg.png';

function Navbar(props) {
    // const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [showNavbar, setShowNav] = useState(false)
    const handleShowNavbar = () => {
      setShowNav(!showNavbar)
    }
    const handleCloseNavbar = () => {
      setShowNav(false);
    }

    return (
        <div className='nav-main-container'>
            <div className='nav-row-container'>
                <div  className='nav-row-sub-container'>
                <div className='nav-column1'>
                    <p>Email : BackToTheRootsProject@gmail.com</p>
                </div>
                <div className='nav-column2'>
                    <div className='nav-facebook'><img src={facebook}></img></div>
                    <div className='nav-twitter'><img src={twitter}></img></div>
                    <div className='nav-youtube'><img src={youtube}></img></div>
                    <div className='nav-instagram'><img src={instagram}></img></div>
                </div>
                </div>
            </div>

            <nav className="navbar">
                <div className="container">
                  <div className="logo">
                    <div className='nav-icon-container'>
                    <div className='nav-icon-column1'>
                         <img src={icon} ></img>
                    </div>
                    <div className='nav-icon-column2'>
                        <div className='bttr-text'>
                            Back To The Roots
                        </div>
                        <div className='adopt-a-village-text'>
                            ADOPT A VILLAGE
                        </div>
                    </div>
                </div>
                  </div>
                  <div className="menu-icon" onClick={handleShowNavbar}>
                    <img  src={menubar} className="menuicon"></img>
                  </div>
                  <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                      <li>
                        <NavLink to="/" onClick={handleCloseNavbar}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" onClick={handleCloseNavbar}>About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/mission" onClick={handleCloseNavbar}>Mission</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Gallery" onClick={handleCloseNavbar}>Gallery</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Collabrations" onClick={handleCloseNavbar}>Collabrations</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Accomplishments" onClick={handleCloseNavbar}>Accomplishments</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Contact" onClick={handleCloseNavbar}>Contact</NavLink>
                      </li>
                      <li>
                        <a className='a donate-button' target="_blank" href="https://donate.stripe.com/8wM8yEgQDe4x5mE8ww">Donate</a>
                      </li>
                    </ul>
                  </div>
                </div>
             </nav>
        </div>
    );
}

export default Navbar;