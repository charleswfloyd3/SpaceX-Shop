import React, {useEffect} from 'react'
import Navbar from '../../components/navbar/navbar';
import Products from '../../components/products/products';
import Footer from '../../components/footer/footer'
import featuredproducts from './featured.json'
const Featured = () => {
    useEffect(() => {
        document.title = "Featured - SpaceX Shop Clone";  
      }, []);
    return (
        <div>
            <Navbar />
            <Products title={"FEATURED"} products={featuredproducts}/>
            <Footer/>
            
        </div>
    )
}

export default Featured;
