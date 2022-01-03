import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import kidsouterwear from './kidsouterwear.json'
const Kidsouterwear = () => {
    return (
        <div>
            <Navbar />
            <Products title={"KID'S OUTERWEAR"} products={kidsouterwear}/>
            <Footer />
        </div>
    )
}

export default Kidsouterwear;
