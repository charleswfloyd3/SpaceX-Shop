import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import kidsproducts from './kidsproducts.json'
const Kids = () => {

    return (
        <div>
            <Navbar />
            <Products title={"KIDS"} products={kidsproducts}/>
            <Footer />
        </div>
    )
}

export default Kids;
