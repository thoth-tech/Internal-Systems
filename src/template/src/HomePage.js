import React from 'react';
import './HomePage.css';
import Nav from './Com/Nav';
import Home from './Com/Home';
import Footer from './Com/Footer';

function HomePage()
{
    return<div className="home">
        <Nav/>
        <Home/>
        <Footer/>
        </div>
        
}
export default HomePage;