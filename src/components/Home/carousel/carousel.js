import Slider from 'react-slick'
import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
import slide1 from '../../../assets/courosel_slide1.svg'
import slide2 from '../../../assets/courosel_slide2.svg'
import slide3 from '../../../assets/courosel_slide3.svg'

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
                  <img src={slide1} alt="BTTR Vision" className="slide"></img>
                </div>
            </div>
            <div className='Carousel_section'>
                <div className='Carousel_components'>
                  <img src={slide2} alt="BTTR Vision" className="slide"></img>
                </div>
            </div>
            <div className='Carousel_section'>
                <div className='Carousel_components'>
                  <img src={slide3} alt="BTTR Vision" className="slide"></img>
                </div>
            </div>
      </Slider>
    </div>
  )
}