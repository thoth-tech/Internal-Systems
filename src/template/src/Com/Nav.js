import React from 'react';
import './Nav.css';

function Nav()
{
    return(
        <div className='nav'>
            <div className='header'>
                <a href=""><img className="img" src="/image/logo.png" alt="Logo"/>
                Capstone
                </a>
            </div>
            <div className="btn">
                <a href="">Home</a>
                <a href="">Product</a>
                <a href="">Get Start</a>
            </div>
            <div className="srch">
            <input className='search-style' type="search" id="query" name="q" placeholder="Search..."/>
            <button type="submit">Search</button>
            </div>
        </div>
    )
        
}
export default Nav;