import React from 'react'

import './About';
import './Home';
import './Services';
import './Products.js';
import  img from './Home/HERO.png'
const heroimg = () => {
  return (
    <div className='hero-container'>
        <img src={img}  className ="hero-pic" alt= "hero-image"/>;
    </div>
  )
}

export default heroimg
