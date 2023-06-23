import Slider from 'react-slick'
import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "react-router-dom";
import './carousel.css'

export default function Carousel() {

  const sliderSettings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      initialSlide: 1
    };

  return (
    <div>
      <Slider {...sliderSettings}>
        
            <div className='Carousel_section'>
                <div className='Carousel_components'>
                    <div className='Carousel_title'>Mission & Vision</div>
                    <div className='Carousel_description'>To solve India’s grand challenges by bringing together global thought leaders,
                        entrepreneurs, scientists, policymakers, and grassroots leaders in India.
                    </div>
                    <button className="Carousel_button"><Link className='Carousel_link' to="/home"> Donate</Link> </button>
                </div>
            </div>
            <div className='Carousel_section'>
                <div className='Carousel_components'>
                    <div className='Carousel_title'>Mission & Vision</div>
                    <div className='Carousel_description'>To solve India’s grand challenges by bringing together global thought leaders,
                        entrepreneurs, scientists, policymakers, and grassroots leaders in India.
                    </div>
                    <button className="Carousel_button"><Link className='Carousel_link' to="/home"> Donate</Link> </button>
                </div>
            </div>
      </Slider>
    </div>
  )
}