import React from 'react';
import './Navbar.css';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

function Navbar(props) {
    return (
        <div className='nav-main-container'>
            <div className='nav-row-container'>
                <div className='nav-column1'>
                    <p>backtotheroots@gmail.com</p>
                </div>
                <div className='nav-column2'>
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={youtube}></img>
                    <img src={instagram}></img>
                </div>
            </div>
        </div>
);
}

export default Navbar;