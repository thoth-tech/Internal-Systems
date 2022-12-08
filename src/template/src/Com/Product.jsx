import React from 'react';
import './Product.css';

function Product()
{
    return<div className="pro-body">
        <div className="tittle">Our Products</div>
        <div className="frame">

            <div className="item">
            <div className='onTrack'>
            <a href="">
            <img src="/image/doubtfire.png" alt="img" height="300" width="300"/>
            <p>Ontrack</p>
            </a>
            </div>
            </div>

            <div className="item">
            <div className="Splashkit">
            <a href="">
            <img src="/image/splashkit.png" alt="img" height="300" width="300"/>
            <p>Splashkit</p>
            </a>
            </div>
            </div>

            <div className="item">
            <div className="Dreambig">
            <a href="">
            <img src="/image/qwert.png" alt="img" height="300" width="300"/>
            <p>Dreambig</p>
            </a>
            </div>
            </div>

            <div className="item">
            <div className="CO">
            <a href="">
            <img src="/image/qwert.png" alt="img" height="300" width="300"/>
            <p>Company Operation</p>
            </a>
            </div>
            </div>

        </div>
        <div className="frame-2">
                <p>One Stop For All Projects</p>
                <button className='button'>Company GitHub</button>
            </div>
        </div>
}

export default Product;