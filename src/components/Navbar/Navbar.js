import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.jpg'
import menubar from '../../assets/menu.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import './Navbar.css'

function Navbar(props) {
  const [showNavbar, setShowNav] = useState(false)
  const handleShowNavbar = () => {
    setShowNav(!showNavbar)
  }
  const handleCloseNavbar = () => {
    setShowNav(false)
  }

  return (
    <div className="nav-main-container">
      <div className="nav-row-container">
        <div className="nav-row-sub-container">
          <div className="nav-column1">
            <p><span className="nav-column1-heading">Email :</span> BackToTheRootsProject@gmail.com</p>
          </div>
          <div className="nav-column2">
            <a className=" home-donate-button" target="_blank" href="https://donate.stripe.com/8wM8yEgQDe4x5mE8ww" rel="noreferrer">
           Donate
        </a>
            {/* <div className="nav-facebook">
              <img src={facebook} alt="Facebook"></img>
            </div>
            <div className="nav-twitter">
              <img src={twitter} alt="Twitter"></img>
            </div>
            <div className="nav-youtube">
              <img src={youtube} alt="YouTube"></img>
            </div>
            <div className="nav-instagram">
              <img src={instagram} alt="Instagram"></img>
            </div> */}
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <div className="nav-icon-container">
              <div className="nav-icon-column1">
                <img src={logo} className="logoIcon" alt="logo"></img>
              </div>
              <div className="nav-icon-column2">
                <div className="bttr-text">Back To The Roots</div>
                <div className="adopt-a-village-text">Reconnecting with Indian Heritage</div>
              </div>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={menubar} className="menuicon" alt="menuicon"></img>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleCloseNavbar}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" onClick={handleCloseNavbar}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Mission" onClick={handleCloseNavbar}>
                  Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/Gallery" onClick={handleCloseNavbar}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/Collabrations" onClick={handleCloseNavbar}>
                  Collabrations
                </NavLink>
              </li>
              <li>
                <NavLink to="/Accomplishments" onClick={handleCloseNavbar}>
                  Accomplishments
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" onClick={handleCloseNavbar}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="donate-button" to="/Donate" onClick={handleCloseNavbar}>
                  Donate
                </NavLink>
              </li>
              {/* <li>
                <a
                  className="a donate-button"
                  target="_blank"
                  href="https://donate.stripe.com/8wM8yEgQDe4x5mE8ww"
                  rel="noreferrer"
                >
                  Donate
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        
        
      </nav>
    </div>
  )
}

export default Navbar
