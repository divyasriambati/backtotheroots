import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import Carousel from './carousel/carousel'
import homecard1 from '../../assets/homecard1.png'
import homecard2 from '../../assets/homecard2.png'
import homecard3 from '../../assets/homecard3.png'
import supporter1 from '../../assets/supporter1.png'
import supporter2 from '../../assets/supporter2.png'
import supporter3 from '../../assets/supporter3.png'

export default function Home() {
  return (
    <div className='home_section'>

        <Carousel></Carousel>

        <div className='home_section_container'>
            <div className='card_collection'>
            <div className='home_card'>
                 <img className='home_card_img' src={homecard1} alt="Vision"></img>
                 <div className='home_card_title'>
                    Our Vision
                 </div>
            </div>
            <div className='home_card'>
                 <img className='home_card_img' src={homecard2} alt="Donations at work"></img>
                 <div className='home_card_title'>
                    Your Donation at work
                 </div>
            </div>
            <div className='home_card'>
                 <img className='home_card_img' src={homecard3} alt="Facebook"></img>
                 
            </div>
        </div>
        </div>
        

        <div className='home_section_container home_supporters'>
            <div className='container_title'>Supporters</div>
            <br></br>
            <div className='card_collection'>
                <div className='supporter_card'>
                    <img className='supporter_card_img' src={supporter1}></img>
                    <div className='supporter_card_title'>
                        supporter1
                    </div>
                    <div className='supporter_card_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className='supporter_card'>
                    <img className='supporter_card_img' src={supporter2}></img>
                    <div className='supporter_card_title'>
                        supporter2
                    </div>
                    <div className='supporter_card_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className='supporter_card'>
                    <img className='supporter_card_img' src={supporter3}></img>
                    <div className='supporter_card_title'>
                        supporter3
                    </div>
                    <div className='supporter_card_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
            </div>
        </div>

        <div className='home_section_container'>
            <div className='container_title'>Our Vision</div>
            <div className="card_collection">
                <div className='vision_card'>
                    <div className='vision_card_description'>Preserving cultural heritage</div>
                </div>
                <div className='vision_card'>
                    <div className='vision_card_description'>Economic Upliftment</div>
                </div>
                <div className='vision_card'>
                    <div className='vision_card_description'>Health, Hygiene, and Family Values</div>
                </div>
                <div className='vision_card'>
                    <div className='vision_card_description'> Integrated Village Development</div>
                </div>
                <div className='vision_card'>
                    <div className='vision_card_description'>YLTP – Youth Leadership Training Program</div>
                </div>
                <div className='vision_card'>
                    <div className='vision_card_description'>Community Centers</div>
                </div>

            </div>
        </div>
        <Footer></Footer>

    </div>
  )
}
