import React from 'react'
import Footer from '../../components/footer/footer';
import './homepage.css'
import Categories from './components/categories/categories';
import Featuredproducts from './components/featuredproducts/featuredproducts';
import Leader from './components/leader/leader';
import Homenavbar from '../../components/homenavbar/homenavbar';
const Homepage = () => {
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
