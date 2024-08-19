import React from 'react';
import './Home.css'; // Your custom CSS
import './About.css';
import About from './About';
import Products from './Products';
import Services from './Services';
import Footer from'./Footer';
const Home = () => {
  return (
    <>
     <div>
            
            <section id="About" className="page-section">
                <About />
            </section>
                <section id="Services" className="page-section">
                <Services />
            </section>
            <section id="Products" className="page-section">
                <Products />
            </section>
            <section id="Footer" className="page-section">
                <Footer />
            </section>
            </div>
    </>
  );
};

export default Home;
