import React from 'react'
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer'
import womensproducts from './womensproducts.json'
const Womens = () => {

  

    return (
        <div>
            <Navbar />
            <Products title={"WOMENS"} products={womensproducts}/>
            <Footer />
        </div>
    )
}

export default Womens;
