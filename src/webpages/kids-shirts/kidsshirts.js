import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import kidsshirts from './kidsshirts.json'
const Kidsshirts = () => {
    return (
        <div>
            <Navbar />
            <Products title={"KID'S SHIRTS"} products={kidsshirts}/>
            <Footer />
        </div>
    )
}

export default Kidsshirts;
