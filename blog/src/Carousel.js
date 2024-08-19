import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import pro1 from './products/home1.png';
import pro2 from './products/home2.png';
import pro3 from './products/home3.png';
import './Carousel.css';

const carouselItems = [pro1, pro2, pro3];

const Carousel = () => {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: 2000, 
    pauseAutoPlayOnHover: true,
    pageDots: true
  };

  return (
    <Flickity className={'carousel'} options={flickityOptions}>
      {carouselItems.map((src, index) => (
        <div className="carousel-cell" key={index}>
          <img className="img-responsive" src={src} alt={`Product ${index + 1}`} />
        </div>
      ))}
    </Flickity>
  );
};

export default Carousel;
