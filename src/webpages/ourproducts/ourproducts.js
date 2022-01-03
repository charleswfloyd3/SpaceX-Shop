import React,{useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import './ourproducts.css'
import ourproducts from './ourproducts.json'
const Ourproducts = () => {
    useEffect(() => {
        document.title = "Products - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"PRODUCTS"} products={ourproducts}/>
            <Footer />
        </div>
    )
}

export default Ourproducts;
