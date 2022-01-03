import React from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import womensshirts from './womensshirts.json'

const Womensshirts = () => {
    return (
        <div>
            <Navbar />
            <Products  title={"WOMEN'S SHIRTS"} products={womensshirts} />
            <Footer />
        </div>
    )
}

export default Womensshirts;
