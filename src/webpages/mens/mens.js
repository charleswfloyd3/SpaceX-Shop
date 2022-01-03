import React, {useEffect} from 'react'
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer'
import mensproducts from './mensproducts.json'
const Mens = () => {
    useEffect(() => {
        document.title = "Mens - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"MENS"} products={mensproducts}/>
            <Footer/>
        </div>
    )
}

export default Mens;



