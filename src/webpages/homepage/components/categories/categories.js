import React from 'react'
import './categories.css'
import {Link}  from 'react-router-dom';

const Categories = () => {
    return (
        <div>
            <div className="titles">
                <div className="category-text">
                    <p className="category-title">WOMEN'S</p>
                    <Link to="/collections/womens" onClick={()=>{window.scrollTo(0, 0)}} style={{textDecoration:'none', color:"inherit"}}><p className="category-btn3">VIEW PRODUCTS</p></Link>
                </div>
                <div className="category-text">
                    <p className="category-title">MEN'S</p>
                    <Link to="/collections/mens" onClick={()=>{window.scrollTo(0, 0)}} style={{textDecoration:'none', color:"inherit"}}><p className="category-btn3">VIEW PRODUCTS</p></Link>
                </div>
                <div className="category-text" id="category-text3">
                    <p className="category-title">ACCESSORIES</p>
                    <Link to="/collections/accessories" onClick={()=>{window.scrollTo(0, 0)}} style={{textDecoration:'none', color:"inherit"}}><p className="category-btn3">VIEW PRODUCTS</p></Link>
                </div>
            </div>
            <div className="categories-outer">
                    <div className="category1">

                    </div>
                    <div className="category2">


                    </div>
                    <div className='category3'>


                    </div>
            </div>
            <div className="categories-outer-mobile">
                <div className="category1-2ndrow">
                    <div className="category-text-mobile">
                        <p className="category-title">WOMEN'S</p>
                        <Link to="/collections/womens" onClick={()=>{window.scrollTo(0, 0)}} style={{textDecoration:'none', color:"inherit"}}><p className="category-btn3">VIEW PRODUCTS</p></Link>
                    </div>
                </div>
                <div className="category2-2ndrow">
                    <div className="category-text-mobile">
                        <p className="category-title">MEN'S</p>
                        <Link to="/collections/mens" onClick={()=>{window.scrollTo(0, 0)}} style={{textDecoration:'none', color:"inherit"}}><p className="category-btn3">VIEW PRODUCTS</p></Link>
                    </div>
                </div>
                <div className='category3-2ndrow'>
                    <div className="category-text-mobile" id="category-text3">
                        <p className="category-title">ACCESSORIES</p>
                        <Link to="/collections/accessories" onClick={()=>{window.scrollTo(0, 0)}} style={{textDecoration:'none', color:"inherit"}}><p className="category-btn3">VIEW PRODUCTS</p></Link>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Categories;
