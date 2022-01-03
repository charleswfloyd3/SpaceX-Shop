import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import mensshirts from './menshirts.json'

const Mensshirts = () => {
    useEffect(() => {
        document.title = "Men's Shirts - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"MEN'S SHIRTS"} products={mensshirts} />
            <Footer />
        </div>
    )
}

export default Mensshirts;
