import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import premiumproducts from './premiumproducts.json'
const Premium = () => {
    useEffect(() => {
        document.title = "Premium - SpaceX Shop Clone";  
      }, []);  
    return (
        <div>
            <Navbar />
            <Products title={"PREMIUM"} products={premiumproducts}/>
            <Footer />
        </div>
    )
}

export default Premium;
