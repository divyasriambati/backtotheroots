import React from 'react';
import './About.css'
import { Link } from 'react-router-dom'
import BTTR from '../../assets/homecard1.png'
import BTTR_director from '../../assets/BTTR_director.png'
import about_accomplishment from '../../assets/about_accomplishment.png'
import PADAYATRA from '../../assets/padayatra.png';

function About(props) {
    return (
        <div className= "About_Section">
            <div className="About">
                <div className="About_content">
                    <div className='About_title'>About</div><br></br>
                    <div className='About_description'>
                    The "Back to the Roots" (BTTR) project is an initiative aimed at transforming and revitalizing rural areas in India. 
                    Over the past seven years, this project has revived cultural heritage, restored family values, and promoted health
                     and hygiene in many villages.
                    </div>
                    <br></br>
                    <Link to="/Contact" className='Contact_button'>Contact Us</Link>
                </div>
            </div>
            <div className='About_flex_container revertSection'>
                <img src={BTTR_director} alt="Project Director" className="BTTR_Project_director_image"></img>
                <div className='BTTR_Project_director_content'>
                    <div className='BTTR_Project_director_title'>
                         Project Director
                    </div>
                    <br></br>
                    <div className='BTTR_Project_director_description'>
                    Sudhakar V., hailing from Andhra Pradesh, India, embarked on a remarkable journey that led to the creation of the
                     "Back to the Roots Project." After completing his engineering degree, Sudhakar pursued higher studies in the United States,
                      where he obtained a Masters's Degree in Computer Science. Having spent 17 years abroad, Sudhakar developed a deep interest 
                      in Indian culture, customs, traditions, and the values that shaped our nation. Motivated by his roots, he sought to 
                      reconnect with his homeland, chose to leave his lucrative career and return to India to contribute to the upliftment of
                       rural communities. He has dedicated the past 12 years to the BTTR project, focusing his efforts on empowering villages.

                    </div>

                </div>
            </div>
            <div className="container_bg">
                <div className='About_flex_container '>
                <div className='BTTR_Project_director_content'>
                    <div className='BTTR_Project_director_title'>Back To The Roots</div><br></br>
                    <div className='BTTR_Project_director_description'>
                    A significant accomplishment of the BTTR project is its ability to transform villages into self-sufficient, self-governing model
                     communities. These model villages operate with a degree of independence and resilience, embodying sustainability and 
                     self-governance principles. In recognition of their transformation, several of these villages have been honored with 
                     prestigious awards like the Swatch Bharat, Alcohol-Free, and Plastic-Free awards.
                    </div>
                    <div className='BTTR_Project_director_description'>
                    &nbsp; Furthermore, trainees from the BTTR project have gone on to take leadership roles in their communities, with several becoming
                     sarpanches (village heads) of their respective villages. This demonstrates the capacity-building and leadership development 
                     aspects of the project.
                    </div>
                </div>
                <img src={BTTR} alt="Back to the roots" className="BTTR_Project_director_image"></img>
            </div>
            </div>
            {/* Padayatra Section */}
            <div className='About_flex_container revertSection'>
                <img src={PADAYATRA} alt="Project Director" className="BTTR_Project_director_image"></img>
                <div className='BTTR_Project_director_content'>
                    <div className='BTTR_Project_director_title'>
                    The Pada Yatra - A Journey on Foot
                    </div>
                    <br></br>
                    <div className='BTTR_Project_director_description'>
                    In 2010, Sudhakar and a diverse team of five friends from the United States, Japan, Germany, Croatia, and the Netherlands, 
                    all students learning Sanskrit and Vedic literature in India, embarked on an extraordinary adventure. They embarked on a 
                    "Pada Yatra" or journey on foot through rural villages in West Godavari, Visakhapatnam, and Anantapur districts. Their goal
                     was to immerse themselves in the heart of India, meeting people, sharing insights about Indian culture, and fostering
                      connections with the villagers.

                    </div>
                    <div className='BTTR_Project_director_description'>
                    &nbsp; Inspired by his encounters, Sudhakar made multiple visits to the villages, laying the groundwork for the "Back to the
                     Roots Project." The project aims to tackle the challenges faced by rural communities and revitalize their economic, cultural,
                      and social well-being. By collaborating with Ved Vignan Maha Vidya Peeth (VVMVP), Sudhakar and his team seek to create lasting
                       change and empower these communities.
                    </div>

                </div>
            </div>

            <div className="container_bg">
             <div className='About_flex_container'>
             <div className='BTTR_Project_director_content'>
                    <div className='BTTR_Project_director_description'>
                    Sacramento Projects, presumably a stakeholder in the BTTR project, has decided to adopt villages and aid in their transformation. 
                    Astanagurthy, located in the Wyra Mandal of Khammam District in Telangana, has been selected as one of these villages. BTTR is currently
                     in the process of choosing another village in the state of Andhra Pradesh.The transformational work in Astanagurthy commenced in
                      September 2017. 
                    </div>
                    <br></br>
                    <button className='our_Accomplishments'>Accomplishments</button>
                </div>
                <img src={about_accomplishment} alt="Collabrations" className="BTTR_Project_director_image"></img>
                
              </div> 
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

                </div> */}

            {/* </div> */}
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
              </div> */}
                
        </div>
    );
}

export default About;