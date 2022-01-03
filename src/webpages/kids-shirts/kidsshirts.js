import React,{useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import kidsshirts from './kidsshirts.json'
const Kidsshirts = () => {
    useEffect(() => {
        document.title = "Kid's Shirts - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"KID'S SHIRTS"} products={kidsshirts}/>
            <Footer />
        </div>
    )
}

export default Kidsshirts;
