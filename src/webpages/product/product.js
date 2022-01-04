import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './product.css'

import { useProduct } from '../../store/productclicked'
import { Link } from 'react-router-dom'

const Product = (props) => {

    const {setCartProductEvent} = useProduct()
    const productstored = JSON.parse(localStorage.getItem('productstored'))
    return (
        <div >
            <Navbar />
            <div className="product-page-outer">
                {/* <p>{JSON.stringify(productvalue)}</p> */}
                <img src={productstored.image} className="product-img" alt={productstored.name}></img>
                <div className="product-content">
                    <h1 className="product-page-name">{productstored.name}</h1>
                    <h2 className="product-page-price">{productstored.price}</h2>

                    {productstored.details !== undefined ?
                    
                    <div>
                        <h4 className="fabric-content">Fabric Content:</h4>
                        <ul className="fabric-details-list">
                            {productstored.details.map((detail) =>{
                                return(
                            <li>{detail}</li>
                            )})
                            }

                        </ul>
                    </div>: 
                    <div></div>}
                    


                    {productstored.sizes !== undefined ?<div className="selections">
                    <select className="color-selection">
                        <optgroup>
                        {productstored.colors.map((color) =>{
                                return(
                            <option>{color}</option>
                                )
                            })}
                        </optgroup>
                    </select>
                    <select>
                        <optgroup>
                            {productstored.sizes.map((size) =>{
                                return(
                            <option>{size}</option>
                                )
                            })}
                            {/* <option>Size: S</option>
                            <option>Size: M</option>
                            <option>Size: L</option>
                            <option>Size: XL</option>
                            <option>Size: XXL</option> */}
                        </optgroup>
                    </select>
                    </div>: <div></div>}
                    <Link to="/cart" style={{textDecoration:"none", color:"inherit"}} ><p className="add-tocart-btn" onClick={()=>{
                        setCartProductEvent(productstored);
                        window.scrollTo(0, 0);
                    }}>ADD TO CART</p></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Product;
