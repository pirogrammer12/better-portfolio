// components/Slider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/sliderStyles.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <div style={{ display: 'none' }}></div>,
  prevArrow: <div style={{ display: 'none' }}></div>,
};

const hideArrows = () => {
  
}

const ContentSlider = ({ content }) => {
  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </Slider>
  );
};

export default ContentSlider;