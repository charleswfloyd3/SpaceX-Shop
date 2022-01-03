import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import './homepage.css'
import Categories from './components/categories/categories';
import Featuredproducts from './components/featuredproducts/featuredproducts';
import Leader from './components/leader/leader';
import Homenavbar from '../../components/homenavbar/homenavbar';
const Homepage = () => {
    useEffect(() => {
        document.title = "SpaceX Shop Clone | Built by Charles Floyd";  
      }, []);
   
   
    return (
        <div>
            <Homenavbar />
            <Leader />
            <Featuredproducts />
            <Categories />
            <Footer />
        </div>
    )
}

export default Homepage;
