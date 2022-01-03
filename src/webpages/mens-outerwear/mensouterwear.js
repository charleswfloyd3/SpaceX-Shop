import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import mensouterwear from './mensouterwear.json'
const Mensouterwear = () => {
    return (
        <div>
            <Navbar />
            <Products title={"MEN'S OUTERWEAR"} products={mensouterwear}/>
            <Footer />
        </div>
    )
}

export default Mensouterwear;
