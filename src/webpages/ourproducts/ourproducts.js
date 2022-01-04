import React,{useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import './ourproducts.css'
import ourproducts from './ourproducts.json'
import {Link}  from 'react-router-dom';

const Ourproducts = () => {
    useEffect(() => {
        document.title = "Products - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"PRODUCTS"} products={ourproducts}/>
            <div className='page-navigation-outer'>
                <div className='page-navigation'>
                    <p>1</p>
                    <p><Link to={"/collections/all-page2"} style={{textDecoration:'none', color:"inherit"}} onClick={()=>{window.scrollTo(0, 0)}}>2</Link></p>
                    <p>
                    <Link to={"/collections/all-page2"} style={{textDecoration:'none', color:"inherit"}} onClick={()=>{window.scrollTo(0, 0)}}>
                        <svg className="right-arrow" role="presentation" viewBox="0 0 11 18">
                            <path d="M1.5 1.5l8 7.5-8 7.5" strokeWidth="2" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="square"></path>
                        </svg>
                        </Link>
                    </p>
  
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ourproducts;
