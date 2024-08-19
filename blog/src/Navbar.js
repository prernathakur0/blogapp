import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer"; 
import './Navbar.css';



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">GadgetHUB</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Products</NavLink>
                            </li>
                           
                        </ul>
                        
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <nav>
            <div className="panell"></div>
           <div className ="panell-opa">
        <p>Electronic</p> 
        <p>Mobiles & Accessories</p> 
        <p>Laptops & Accessories</p> 
        <p>TV & Home Entertainment</p> 
        <p>Audio</p> 
        <p>Cameras</p> 
        <p>Computer Peripherals</p> 
        <p>Smart Technology</p> 
        <p>Musical Instruments</p> 
        <p>Office & Stationery</p> 
           </div>
           </nav>
           
    


            
            <div className="hero-container">
                <video className="background-video" autoPlay muted loop >
                <source src="video1.mp4" type="video/mp4" />
                </video>
                <div className="hero-msg">
                    <p>Discover the latest in tech with GadgetHUB—where innovation meets your everyday needs</p>
                </div>
            </div>
           
        </>
    );
};

export default Navbar;
