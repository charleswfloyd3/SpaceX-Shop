import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import accesoryproducts from "./accessoryproducts.json"
const Accessories = () => {
    useEffect(() => {
        document.title = "Accessories - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"ACCESSORIES"} products={accesoryproducts} />
            <Footer />
        </div>
    )
}

export default Accessories;
