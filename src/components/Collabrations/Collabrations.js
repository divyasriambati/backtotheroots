import React from 'react';
import './Collabration.css';
import missionBg from '../../assets/missionpageBg.svg'
import { Outlet, Link } from "react-router-dom";

import TANA from '../../assets/TANA.svg';
import ATA from '../../assets/ATA.svg';
import BATA from '../../assets/BATA.svg';
import NATA from '../../assets/NATA.svg';
import NATS from '../../assets/NATS.svg';
import silicon_andhra from '../../assets/siliconAndhra.svg';
import SSF from '../../assets/SSF_collab.JPG';
import SV_Gurudev from '../../assets/SV_gurudev.JPG';
import AOL_collab from '../../assets/YLTP_collab.JPG';
import VDS from '../../assets/vds_collab.webp';

export default function Collbrations() {
  return (
    <div>
      {/* Section 1 */}
      <div className='collabPageSection1'>
        {/* <img src={missionBg} className='collabPageBg' /> */}
        <div className='collabPageHeading'>Our Collabrations</div>
      </div>

      {/* Section 2 */}
      <div className='collabPageSection2'>
        <div className='collabPageSectionHeading'>The Art Of Living</div>
          <div className='collagePageSectionPart revertsections'>
              <div className='collabPageSection2Content '>
                <p>
                  The Art of Living Foundation is an international non-profit organization founded by Gurudev Sri Sri Ravi Shankar 
                  in 1981. It focuses on personal development, stress relief, and overall well-being. The organization's vision is to 
                  create a stress-free, violence-free society. It offers workshops and courses that incorporate ancient practices 
                  modified for modern life, including mindfulness, yoga, breathwork, and meditation. The foundation's teachings aim 
                  to help individuals regulate stress, enhance mental clarity, improve physical health, and cultivate inner calm. 
                  In addition to individual well-being, the organization engages in humanitarian initiatives, such as disaster relief, 
                  rehabilitation, education, skill development, and sustainability projects to uplift communities and foster social 
                  harmony.
                </p>
                <button className="readMoreBtn"><Link className='Link' to="/home"> Read More</Link> </button>
              </div>
              <div className='collabPageSection2Image'>
                <img src={SV_Gurudev} className='missionPageImages' />
              </div>
          </div>
          <div className='collagePageSectionPart'>
              <div className='collabPageSection2Image'>
                <img src={AOL_collab} className='collabPageImages' />
              </div>
              <div className='collabPageSection2Content'>
                <li>
                    Youth Empowerment Seminar (YES!): This program is designed to empower young individuals with practical life 
                    skills, leadership qualities, and tools to manage emotions and stress effectively. YES! equips young people 
                    to face the challenges of life with confidence, clarity, and resilience.
                </li>
                <li>
                    Happiness Program: The Happiness Program is a transformative workshop that provides practical techniques and 
                    tools to manage the mind, release negative emotions, and cultivate a positive and joyful outlook on life.
                </li>
                <li>
                    Sahaj Samadhi Meditation: This program teaches an effortless meditation technique that allows individuals to 
                    dive deep within themselves, experiencing profound relaxation, expanded awareness, and inner silence.
                </li>
                <li>
                    Sri Sri Yoga: Sri Sri Yoga is a holistic approach to yoga that combines traditional postures, breathing exercises, 
                    meditation, and wisdom to promote physical health, mental well-being, and spiritual growth.
                </li>
                <li>
                    Art of Silence: This retreat-style program offers participants a profound experience of silence, allowing them to go 
                    beyond the incessant chatter of the mind and connect with their inner self.
                </li>
              </div>
          </div>
      </div>

      {/* Section 3 */}
      <div className='collabPageSection3'>
          <div className='collabPageSectionHeading'>Vedic Dharma Sansthan(VDS)</div>
          <div className='collagePageSectionPart revertsections'>
              <div className='collabPageSection2Content '>
                <p>
                The organization's main objective is to promote and propagate knowledge of Vedas, Yoga, Vedanta, Puranas, 
                Itihasas, and Sanskrit language. It achieves this through awareness campaigns, educational materials, and 
                literature. It conducts pujas, Homas, ceremonies, and festivals to foster spiritual practices and interfaith 
                harmony. The organization upholds Vedic traditions by performing ceremonies and functions, including weddings, 
                adhering to ancient customs and rituals. It also focuses on engaging youth in art, culture, yoga, and Indian 
                heritage through programs and workshops. Overall, the organization aims to preserve and promote the rich cultural 
                and spiritual heritage of India.
                </p>
                <button className="readMoreBtn"><Link className='Link' to="/home"> Read More</Link> </button>
              </div>
              <div className='collabPageSection2Image'>
                <img src={VDS} className='missionPageImages' />
              </div>
          </div>
      </div>

      {/* Section 4 */}

      <div className='collabPageSection4'>
          <div className='collabPageSectionHeading'>Samarasata Sewa Foundation(SSF)</div>
          <div className='collagePageSectionPart'>
              <div className='collabPageSection2Image'>
                <img src={SSF} className='collabPageImages' />
              </div>
              <div className='collabPageSection2Content'>
                <p>
                    The Samarasata Sewa Foundation (SSF) is a federation of organizations that work towards protecting and promoting 
                    Hindu Dharma. It was established under the guidance of the late Sri P.V.R.K. Prasad, a distinguished IAS officer 
                    who served in various capacities, including as the Executive Officer of Tirumala Tirupati Devasthanams, Chairman 
                    of Visakhapatnam Port Trust, Special Chief Secretary to the Government of Andhra Pradesh, and Media Advisor to 
                    Prime Minister Sri P.V. Narasimha Rao.
                    The SSF comprises representatives from different organizations on its state committee, including Vikasatarangini,
                    Art of Living, Hindu Dharma Parirakshana Trust, Gayatri Parivar, and Samajika Samarasata Vedika.
                </p>
                <p>
                    SSF has identified and trained individuals with a strong commitment to protecting and propagating Hindu 
                    Dharma as Pracharaks. These individuals are drawn from various castes and classes. The organization has 
                    Sub-Divisional Dharma Pracharaks (one for every three Mandals), Division Dharma Pracharaks (one for every 
                    20 Mandals), Zonal Pracharaks (one for each zone), and one State Pracharak.
                </p>
                <button className="readMoreBtn"><Link className='Link' to="/home"> Read More</Link> </button>
              </div>
              
          </div>
      </div>

      {/* Section 5 */}

      <div className='collabPageSection5'>
          <div className='collabPageSectionHeading'>Other Collabrations</div>
          <div className='collabPageCardsContainer'>
              <div className='collabPageCard'>
                  <img src={TANA} className='collabLogo' />
              </div>
              <div className='collabPageCard'>
                  <img src={ATA} className='collabLogo' />
              </div>
              <div className='collabPageCard'>
                  <img src={BATA} className='collabLogo' />
              </div>
              <div className='collabPageCard'>
                  <img src={NATA} className='collabLogo' />
              </div>
              <div className='collabPageCard'>
                  <img src={NATS} className='collabLogo' />
              </div>
              <div className='collabPageCard'>
                  <img src={silicon_andhra} className='collabLogo' />
              </div>
          </div>
          
      </div>



    </div>
  )
}
