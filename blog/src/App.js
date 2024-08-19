import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Services from "./Services";
import Products from './Products';
import Footer from './Footer' ;
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element ={<Home></Home>}/>
<Route path="/Products" element ={<Products></Products>}/>
<Route path="/Services" element ={<Services></Services>}/>
<Route path="/Footer" element ={<Footer></Footer>}/>
<Route path="/About" element ={<About></About>}/>
    </Routes>
    </>
  );
}
export default App;
