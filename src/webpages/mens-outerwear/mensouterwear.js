import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import mensouterwear from './mensouterwear.json'
const Mensouterwear = () => {
    useEffect(() => {
        document.title = "Men's Outerwear - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"MEN'S OUTERWEAR"} products={mensouterwear}/>
            <Footer />
        </div>
    )
}

export default Mensouterwear;
