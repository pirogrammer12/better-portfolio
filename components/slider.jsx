// components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ContentSlider = ({ content }) => {
  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index} className="w-full h-full">
          {item}
        </div>
      ))}
    </Slider>
  );
};

export default ContentSlider;
