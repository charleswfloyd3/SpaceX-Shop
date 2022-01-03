import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import womensouterwear from './womensouterwear.json'
const Womensouterwear = () => {
    useEffect(() => {
        document.title = "Women's Outerwear - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"WOMEN'S OUTERWEAR"} products={womensouterwear}/>
            <Footer />
        </div>
    )
}

export default Womensouterwear;
