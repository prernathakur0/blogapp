import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css'; // Import Flickity CSS
import './Products.css'; // Your custom CSS
import pro1 from './products/home1.png';
import pro2 from './products/home2.png';
import pro3 from './products/home3.png';
import pro6 from './products/home6.png'


const carouselItems = [pro1, pro2, pro3, pro6];

const Carousel = () => {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: 2000, // Auto-play the carousel every 2 seconds
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

const Products = () => {
  return (
    <>
    <h1 style={{ 
      fontSize: '2rem', 
      color: 'darkred', 
      fontStyle: 'italic',  // Change this to 'normal' for regular font style
      fontWeight: 'bold'    // Change this to 'normal' for regular font weight
    }}>
      Products O/N
    </h1>
      <div className="wrapper">
        <main>
          <section>
            <h2><span>NEWLY LAUNCHED</span></h2>
            <Carousel />
          </section>

          <section>
            <h2><span> PRODUCTS AVAILABLE</span></h2>
            <Carousel />
          </section>
        </main>
      </div>
     
    </>
  );
};

export default Products;
