import React from 'react'
import './products.css'
import { useProduct } from '../../store/productclicked'
import {Link}  from 'react-router-dom';

const Products = (props) => {


    const {setProductEvent} = useProduct()

    return (
        <div className="product-component">

            <p className="mens-products-title" >{props.title}</p>

            <div className="products-outer">
                {props.products.map((product) =>
                       <Link to="/productpage" style={{textDecoration:'none', color:"inherit"}}> 
                            <div onClick={() =>{setProductEvent(product); window.scrollTo(0, 0)}}>
                            <img src={product.image} alt={product.name}></img>
                            <p className="product-name" >{product.name}<br></br>{product.price}</p>
                            </div>
                        </Link>
                        )

                }


            </div>
            
        </div>
    )
}

export default Products;


