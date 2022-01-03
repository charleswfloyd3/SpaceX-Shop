import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import womensouterwear from './womensouterwear.json'
const Womensouterwear = () => {
    return (
        <div>
            <Navbar />
            <Products title={"WOMEN'S OUTERWEAR"} products={womensouterwear}/>
            <Footer />
        </div>
    )
}

export default Womensouterwear;
