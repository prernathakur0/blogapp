import React from 'react'
import heroimg from './Home/HERO.png' ;
import './About';
import './Home';
import './Services';
import './Products';


const bgimg = () => {
  return (
    <div>
      <div className= "hero-image">
        <img scr = {heroimg} className = 'hero-img' alt ="hero" />
          
      </div>
    </div>
    
  )
}

export default bgimg
