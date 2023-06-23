import React from 'react';

function About(props) {
    return (
        <div>
            {/* Section1 */}
            <div className='about-image-container'>
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

            </div>
            {/* Section2 */}
            <div className='section2-container'>
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

            </div>
            {/* Section 3 */ }
            <div className='section3-container'>
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
            </div>
              {/* Section 4       */}
              <div className='section4-container'>
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
                
        </div>
    );
}

export default About;