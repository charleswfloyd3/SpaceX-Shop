import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import kidsouterwear from './kidsouterwear.json'
const Kidsouterwear = () => {
    useEffect(() => {
        document.title = "Kid's Outerwear - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"KID'S OUTERWEAR"} products={kidsouterwear}/>
            <Footer />
        </div>
    )
}

export default Kidsouterwear;
