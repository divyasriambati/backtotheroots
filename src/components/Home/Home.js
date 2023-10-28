import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import './Home.css'

import Carousel from './carousel/carousel'

import health_hygeine from '../../assets/Health_hygiene.svg'
import BTTR_YLTP3 from '../../assets/YLTP/BTTR_YLTP3.JPG'
import mission from '../../assets/homecard1.png'
import maintain_demography from '../../assets/maintain_demography.jpg'

import AOL from '../../assets/AOL_icon.png'
import OVBI from '../../assets/OVBI_icon.png'
import SSF from '../../assets/SSF_icon.png'

export default function Home() {
  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }
  return (
    <div>
      <div className="home_section">
        <Carousel></Carousel>
        {/* collabration */}
        <div className="home_section_container">
          <div className="home_section_container_title">Our Collaborations</div>
          <br></br>
          <div className="card_collection">
            <div className="collabration_card">
              <img src={AOL} className="collabration_img aol_icon" alt="AOL" />
              <div className="collabration_content">
                <div>
                  The Art of Living Foundation is a renowned international non-profit organization founded by Gurudev
                  Sri Sri Ravi Shankar.
                </div>
                <Link to="/Collabrations" className="home_button">
                  Read More
                </Link>
              </div>
            </div>
            <div className="collabration_card">
              <img src={SSF} className="collabration_img ssf_icon" alt="SSF" />
              <div className="collabration_content">
                <div>
                  The Samarasata Sewa Foundation is a non-profit organization committed to promoting equality, harmony,
                  and social justice.
                </div>
                <Link to="/Collabrations" className="home_button">
                  Read More
                </Link>
              </div>
            </div>
            <div className="collabration_card">
              <img src={OVBI} alt="OVBI" className="collabration_img ovbi_icon" />
              <div className="collabration_content">
                <div className="text">
                  OVBI is an organization that aims to mobilize the Indian diaspora and stakeholders in contributing to
                  India's development.
                </div>
                <Link to="/Collabrations" className="cardBtn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mission */}
        <div className="home_section_container home_supporters">
          <div className="home_section_container_title "> Our Mission</div>
          <div className="mission_container">
            <div className="mission_section1">
              To invest in capacity building and technology to strengthen India’s rural economy by
              <li>Maintaining Demographics</li>
              <li>Healthy Living</li>
              <li>Reinforcing Family Ethics</li>
              <li>Preserving Sanatana Dharma</li>
              <li>Temples for Comprehensive Growth</li>
              <li>Capacity Building</li>
            </div>
            <div className="mission_section2">
              <img className="mission_img" src={mission} alt="mission"></img>
            </div>
          </div>
        </div>
        {/* Vision */}
        <div className="home_section_container">
          <div className="home_section_container_title">Our Vision</div>
          <div className="card_collection">
            <div className="vision_card">
              <div className="vision_card_description">Healthy Living</div>
            </div>
            <div className="vision_card">
              <div className="vision_card_description">Reinforcing Family Ethics</div>
            </div>
            <div className="vision_card">
              <div className="vision_card_description">Maintaining Demographics</div>
            </div>
            <div className="vision_card">
              <div className="vision_card_description"> Preserving Sanatana Dharma</div>
            </div>
            <div className="vision_card">
              <div className="vision_card_description">Temples for Comprehensive Growth</div>
            </div>
            <div className="vision_card">
              <div className="vision_card_description">Capacity Building</div>
            </div>
          </div>
        </div>
        {/* achievements */}
        <div className="home_section_container home_achievements">
          <Slider {...sliderSettings} className="home_achievements_content">
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">9600+</div>
                <div className="achievement_card_description">Villages Visited</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">16000+</div>
                <div className="achievement_card_description">Trees Planted</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">820+</div>
                <div className="achievement_card_description">Temples Constructed</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">659+</div>
                <div className="achievement_card_description">Toilets Constructed</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">108+</div>
                <div className="achievement_card_description">Idols Donated</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">500+</div>
                <div className="achievement_card_description">YLTP Trained</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">400+</div>
                <div className="achievement_card_description">Dharma pracharaks</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">822+</div>
                <div className="achievement_card_description">Archakas</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">154+</div>
                <div className="achievement_card_description">Temple Based Bala Vikas Kendras</div>
              </div>
            </div>
            <div className="achievement_card">
              <div className="achievement_card_content">
                <div className="achievement_card_number">20+</div>
                <div className="achievement_card_description">Zero Budget chemical Free Farming workshops</div>
              </div>
            </div>
          </Slider>
        </div>
        {/* Projects */}
        <div className="home_section_container">
          <div className="home_section_container_title">Our Projects</div>
          {/* <div className="home_section_container_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ulabore et dolore
            magna aliqua. Ut enim ad minim
          </div> */}
          <div className="card_collection">
            <div className="home_card">
              <img className="home_card_img" src={maintain_demography} alt="Vision"></img>
              <div className="home_card_title">Culture, Family Values, Community</div>
              {/* <div className='home_card_description'>Build school for childrens</div> */}
              <button className="home_button">
                {' '}
                <a
                  className="a donate-button"
                  target="_blank"
                  href="https://donate.stripe.com/8wM8yEgQDe4x5mE8ww"
                  rel="noreferrer"
                >
                  Donate Now
                </a>
              </button>
            </div>
            <div className="home_card">
              <img className="home_card_img" src={health_hygeine} alt="Donations at work"></img>
              <div className="home_card_title">Health and Hygiene</div>
              {/* <div className='home_card_description'>Build temples in villages</div> */}
              <button className="home_button">
                <a
                  className="a donate-button"
                  target="_blank"
                  href="https://donate.stripe.com/8wM8yEgQDe4x5mE8ww"
                  rel="noreferrer"
                >
                  Donate Now
                </a>
              </button>
            </div>
            <div className="home_card">
              <img className="home_card_img" src={BTTR_YLTP3} alt="Facebook"></img>
              <div className="home_card_title">Empowerment and Skills Training</div>
              {/* <div className='home_card_description'>need description</div> */}
              <button className="home_button">
                <a
                  className="a donate-button"
                  target="_blank"
                  href="https://donate.stripe.com/8wM8yEgQDe4x5mE8ww"
                  rel="noreferrer"
                >
                  Donate Now
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Supporters */}
        {/* <div className="home_section_container home_supporters">
          <div className="home_section_container_title">Supporters</div>
          <div className="home_section_container_description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ulabore et dolore
            magna aliqua. Ut enim ad minim
          </div>

          <div className="card_collection">
            <div className="supporter_card">
              <img className="supporter_card_img" src={supporter1}></img>
              <div className="supporter_card_title">supporter1</div>
              <div className="supporter_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </div>
            <div className="supporter_card">
              <img className="supporter_card_img" src={supporter2}></img>
              <div className="supporter_card_title">supporter2</div>
              <div className="supporter_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </div>
            <div className="supporter_card">
              <img className="supporter_card_img" src={supporter3}></img>
              <div className="supporter_card_title">supporter3</div>
              <div className="supporter_card_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </div>
          </div>
        </div> */}
        {/* join us */}
        <div className="home_section_container contact_us">
          <div className="joinus_text">Let's change the world, Join us now!</div>
          <Link to="/Contact" className="home_button contactBtn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
