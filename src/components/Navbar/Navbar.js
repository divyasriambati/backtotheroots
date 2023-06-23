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
               
                <div className={
                    isNavExpanded ? "navbarnavs expanded":"navbar-navs" 
                }>
                    
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
                
                     <img className='menubar' src={menubar}onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} style={{width:"3%",fill:"white"}}></img>
        
        </div>

{/* Section1 */}
        {/* <div className='about-image-container'>
            <div className='text-container'>
                <div className='about-text'>About</div>
                <div className='para'>
                The "Back to the Roots" (BTTR) project is an initiative aimed at transforming and revitalizing rural areas in India. 
                Over the past seven years, this project has revived cultural heritage, restored family values, and promoted health
                 and hygiene in many villages.
                </div>
                <div className='contact-button-container'>
                    <button className='contact-button'>Contact Us</button>
                </div>
            </div>

        </div> */}
{/* Section2 */}

        {/* <div className='section2-container'>
            <div>
                <button className='section2-image'></button>
            </div>
            <div className='section2-text-container'>
            <div className='Projector-Director-text'>
                Project Director
            </div>
            <div className='section2-para'>
                The project director of BTTR is Sudhakar Garu. Sudhakar Garu, an individual with a successful career in the United States,
                 chose to leave his lucrative career and return to India to contribute to the upliftment of rural communities. 
                 He has dedicated the past seven years to the BTTR project, focusing his efforts on empowering villages.
            </div>
                
            </div>

        </div> */}
        {/* Section 3 */ }
        {/* <div className='section3-container'>
            <div className='section3-text-container'>
                <div className='section3-backtotheroots-text'>Back To The Roots</div>
                <div className='section3-para1'>
                A significant accomplishment of the BTTR project is its ability to transform villages into self-sufficient, self-governing model
                 communities. These model villages operate with a degree of independence and resilience, embodying sustainability and 
                 self-governance principles. In recognition of their transformation, several of these villages have been honored with 
                 prestigious awards like the Swatch Bharat, Alcohol-Free, and Plastic-Free awards.
                </div>
                <div className='section3-para2'>
                Furthermore, trainees from the BTTR project have gone on to take leadership roles in their communities, with several becoming
                 sarpanches (village heads) of their respective villages. This demonstrates the capacity-building and leadership development 
                 aspects of the project.
                </div>
            </div>
            <div>
                <button className='section3-image'></button>
            </div>
        </div> */}
          {/* Section 4       */}
          {/* <div className='section4-container'>
            <div className='section4-image-container'>
                <button className='section4-image'></button>
            </div>
            <div className='section4-text-container'>
                <div className='section4-para'>
                Sacramento Projects, presumably a stakeholder in the BTTR project, has decided to adopt villages and aid in their transformation.
                 Astanagurthy, located in the Wyra Mandal of Khammam District in Telangana, has been selected as one of these villages. BTTR is 
                 currently in the process of choosing another village in the state of Andhra Pradesh.The transformational work in Astanagurthy 
                 commenced in September 2017. 
                </div>
                <div className='section4-accomplishments-button'>
                       <button className='our-Accomplishments'>Our Accomplishments</button>
                </div>
            </div>
          </div>
             */}
        </div>
);
}

export default Navbar;