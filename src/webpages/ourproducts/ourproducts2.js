import React,{useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import './ourproducts2.css'
import ourproducts2 from './ourproducts2.json'
import {Link}  from 'react-router-dom';

const Ourproducts2 = () => {
    useEffect(() => {
        document.title = "Products - Page 2 - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
        <Navbar />
        <Products title={"PRODUCTS"} products={ourproducts2}/>
        <div className='page-navigation-outer'>
            <div className='page-navigation2'>
                <p>
                    <Link to={"/collections/all"} style={{textDecoration:'none', color:"inherit"}} onClick={()=>{window.scrollTo(0, 0)}}>
                    <svg className="left-arrow" role="presentation" viewBox="0 0 11 18">
                        <path d="M9.5 1.5L1.5 9l8 7.5" strokeWidth="2" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                    </svg>
                    </Link>
                </p>
                <p><Link to={"/collections/all"} style={{textDecoration:'none', color:"inherit"}} onClick={()=>{window.scrollTo(0, 0)}}>1</Link></p>
                <p>2</p>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Ourproducts2;
