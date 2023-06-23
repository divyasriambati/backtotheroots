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
import backgroundimage from '../../assets/homepg.png';

function Navbar(props) {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div className='nav-main-container'>
            <div className='nav-row-container'>
                <div  className='nav-row-sub-container'>
                <div className='nav-column1'>
                    <p>Email : backtotheroots@gmail.com</p>
                </div>
                <div className='nav-column2'>
                    <div className='nav-facebook'><img src={facebook}></img></div>
                    <div className='nav-twitter'><img src={twitter}></img></div>
                    <div className='nav-youtube'><img src={youtube}></img></div>
                    <div className='nav-instagram'><img src={instagram}></img></div>
                </div>
                </div>
            </div>
            <div className='sub-nav-container'>
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
                <div className={isNavExpanded ? "navbarnavs expanded":"navbar-navs"  }>
                    <p>Home</p>
                    <p>About</p>
                    <p>Mission</p>
                    <p>Gallery</p>
                    <p>Collabrations</p>
                    <p>Accomplishments</p>
                    <p>Contact</p>
                    {/* <p>Donate</p> */}
                    <button className='donate-button'>Donate</button>
                </div> 
                <img className='menubar' src={menubar}onClick={() => {setIsNavExpanded(!isNavExpanded);}} style={{width:"3%",fill:"white"}}></img>
             </div>
        </div>
    );
}

export default Navbar;