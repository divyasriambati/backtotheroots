import React from 'react';
import './Mission.css';
import { Outlet, Link } from "react-router-dom";
import missionBg from '../../assets/missionpageBg.svg'

function Mission(props) {
    return (
        
        <div className='missionPageSection1'> 

        {/* section1 */}
            <div>
                <img src={missionBg} className='missionpageBg' />
                <div className='missionPageSection1Content'>
                    <div className='missionPageSection1Heading'>Mission & Vision</div>
                    <div className='bttrVision'>To solve India’s grand challenges by bringing together global thought leaders,
                        entrepreneurs, scientists, policymakers, and grassroots leaders in India.
                    </div>
                    <button className="missionPageBtn"><Link className='link' to="/home"> Donate</Link> </button>
                </div>
            </div>
        {/* section2 */}
            <div className='missionPageSection2'>
                <div className='missionPageHeading'>Our Mission</div>
                <div className='missionPageContent'>To invest in capacity building and technology to strengthen India’s rural economy by
                    <li>Restoring riverine ecosystems</li>
                    <li>Reversing desertification</li>
                    <li>Building a micro-entrepreneurship and startup ecosystem</li>
                    <li>Educating rural leaders in good governance</li>
                    <li>Forging mutually beneficial alliances with US-based institutions to accelerate impact</li>
                </div>
            </div>    
        {/* section 3 */}
            <div className='missionPageSection3'>
            <div className='missionPageHeading'>Key Facts</div>
                <div className='missionPageContent'>In the contemporary world, it's critical to recognize the challenges faced by rural communities:
                    <li>A troubling trend has seen village youth prefer unskilled labour over farming, indicating a disconnect from their agrarian roots.</li>
                    <li>Over a decade, 150,000 farmers tragically took their own lives.</li>
                    <li>Native grain breeds have been replaced by genetically modified seeds.</li>
                    <li>Indian culture, once vibrant in rural areas, is in decline. Surprisingly, the diaspora community is often more involved in cultural preservation than those in Indian villages.</li>
                    <li>Many young women are disinclined to marry farmers, reflecting a societal shift</li>
                    <li>In a surprising development, India is set to become the world's third-largest beef exporter, trailing only Brazil and Australia.</li>
                </div>
            </div>
        {/* Section 4 */}
            <div className='missionPageSection4'>
                <div className='missionPageHeading'>How Back to the Root Began</div>
                <div className='missionPageContent'>Our journey at BTTR began with simply meeting villagers, engaging with them, and sharing experiences and wisdom.</div>
                <div className='missionPageHeading'>The Problems We've Identified</div>
                <div className='missionPageContent'>
                    <li>Youth Engagement Deficit: Lack of Enthusiasm and Initiative Among the Youth</li>
                    <li>Community Cohesion Challenges: Inability of Villagers to Work Together</li>
                    <li>Lack of Leadership: The Absence of Strong Leadership in Villages</li>
                    <li>Accountability Issues: Unwillingness to Take Responsibility</li>
                    <li>Guidance Gap: Absence of Mentors to Guide Initiatives and Motivate People</li>
                    <li>Apathy Obstacle: The Prevailing 'Who Cares' or 'Chalta Hai' Attitude</li>
                </div>    
            </div>
        {/* Section 5 */}
            <div className='missionPageSection5'>
                <div className='missionPageHeading'>Solutions Through Back to the Roots</div>
                <div className='missionPageCard'>
                    <div className='cardImage'>Image</div>
                    <div className='cardContent'>
                        <div className='cardHeader'>Economic Upliftment:</div>
                        <li>
                            <b>Zero Budget Chemical Free Farming:</b> We promote sustainable and environmentally-friendly farming 
                            practices that reduce input costs and increase profit margins for farmers.
                        </li>
                        <li>
                            <b>Employment for Youth:</b> Through our initiatives, we provide employment opportunities for youth, moulding 
                            them into future leaders and equipping them with vocational skills for a variety of professions.
                        </li>
                        <li>
                            <b>Promotion of Local Art and Handicrafts:</b> We also facilitate the resurgence of local arts, crafts, and 
                            traditions, supporting weavers, Karrasamu, kolatam, and more.
                        </li>
                        <li>
                            <b>Skills Training:</b> We conduct training in various skill sets including renewable energy, electrical work, and
                            beautician services, thereby diversifying income opportunities for rural communities.
                        </li>
                    </div>
                </div>
                <div className='cardAlignment'>
                    <div className='missionPageCard'>
                        <div className='cardImage'>Image</div>
                        <div className='cardContent'>
                            <div className='cardHeader'>Culture, Family Values, Community:</div>
                            <li>
                                <b>Education and Workshops:</b> We hold workshops and education programs to reinforce cultural heritage,
                                family values, and a sense of community.
                            </li>
                            <li>
                                <b>Maintaining Demography:</b> Foster a better understanding and appreciation of the community's 
                                demographics and encourage maintaining harmonious relationships among different demographic groups.
                            </li>
                            <li>
                                <b>Reviving Community Centers:</b> We work towards reopening and revitalizing community centers as hubs for 
                                social and cultural activities.
                            </li>
                            <li>
                                <b>Village Rituals and Ceremonies:</b> We've developed educational programs that explain the significance of village
                                rituals and how to conduct ceremonies, bridging the gap between tradition and modernity.
                            </li>
                            <li>
                                <b>Community Activities:</b> We organize festivals and knowledge sharing groups to foster a sense of unity and 
                                shared identity within villages.
                            </li>
                        </div>
                    </div>
                </div>
                <div className='missionPageCard'>
                    <div className='cardImage'>Image</div>
                    <div className='cardContent'>
                        <div className='cardHeader'>Health and Hygiene:</div>
                        <li>
                            <b>Wellness Programs:</b> We organize Yoga and Meditation sessions, 
                            along with community-building courses for different groups through the YLTP.
                        </li>
                        <li>
                            <b>Promoting Ayurveda:</b> We spread awareness and promote the use of Ayurveda for maintaining health and wellness.
                        </li>
                        <li>
                            <b>Medical and Cleanup Camps:</b> We conduct regular medical camps for villagers and organize cleanup drives 
                            to maintain hygiene and cleanliness.
                        </li>
                        <li>
                            <b>5H Program:</b> This initiative focuses on improving Homes, Healthcare, Hygiene, promoting Human values, 
                            and fostering Harmony in Diversity.
                        </li>
                        
                    </div>
                </div>
                <div className='cardAlignment'>
                    <div className='missionPageCard'>
                        <div className='cardImage'>Image</div>
                        <div className='cardContent'>
                            <div className='cardHeader'>Model Villages:</div>
                            <li>
                                <b>Self-Reliance, Self-Sufficiency, Self-Governing:</b> Our ultimate goal is to transform villages into self-reliant, 
                                self-sufficient, and self-governing units.
                            </li>
                            <li>
                                <b>Youth Leadership Training Program (YLTP):</b> YLTP serves as the backbone of our initiatives, empowering youth and 
                                driving our transformation projects.
                            </li>
                            <li>
                                <b>Adopt a Village Program:</b> We adopt villages for intensive development efforts, creating successful models for other 
                                rural communities to follow.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Mission;

