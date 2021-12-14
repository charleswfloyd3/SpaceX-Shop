import React from 'react'
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer'
import mensproducts from './mensproducts.json'
const Mens = () => {
    

    return (
        <div>
            <Navbar />
            <Products title={"MENS"} products={mensproducts}/>
            <Footer/>
        </div>
    )
}

export default Mens;



