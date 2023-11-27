import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import slide2 from '../../../assets/courosel_slide2.svg'
import slide3 from '../../../assets/courosel_slide3.svg'
import slide1 from '../../../assets/slide1.png'
import './carousel.css'

export default function Carousel() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const imageSources = [slide1, slide2, slide3] // array of image sources

  useEffect(() => {
    let loadedImages = 0
    imageSources.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedImages++
        if (loadedImages === imageSources.length) {
          setImagesLoaded(true)
        }
      }
    })
  }, []) // Empty dependency array ensures this effect runs only once

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 3
  }

  if (!imagesLoaded) {
    return <div className="spinner"></div> // Or any other loading indicator
  }
  const handleDonateClick = () => {
    // Redirect to the donation page
    window.open('https://donate.stripe.com/8wM8yEgQDe4x5mE8ww', '_blank')
  }

  return (
    <div>
      <Slider {...sliderSettings}>
        <div className="Carousel_section">
          <div className="Carousel_components">
            {/* Assuming slide1 is the image you showed us with the Donate text */}
            <img src={slide1} alt="BTTR Vision" className="slide"></img>
            {/* Donate button or text */}
            {/* <button onClick={handleDonateClick} className="carousel-donate-button">
              Donate
            </button> */}
            <NavLink className="carousel-donate-button" to="/Donate">
              Donate
            </NavLink>
          </div>
        </div>
        {imageSources.slice(1, 3).map((src, index) => (
          <div key={index} className="Carousel_section">
            <div className="Carousel_components">
              <img src={src} alt="BTTR Vision" className="slide" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
