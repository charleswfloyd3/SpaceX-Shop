import React from 'react'
import './featuredproducts.css'
import {Link}  from 'react-router-dom';
import { useProduct} from '../../../../store/productclicked'

const Featuredproducts = () => {
    const {setProductEvent} = useProduct()
    const featuredproductsobj = [
        {       
            "name": "SPACEX CREW-2 MISSION PATCH",
            "price": "$15.00",
            "image":"https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Crew-2_missionpatch_UPDATEDcopy_600x.png?v=1636404445"
        }, 
        {
            "name": "KID'S SPACEX SPACESUIT ONESIE",
            "price": "$15.00",
            "image":"https://cdn.shopify.com/s/files/1/0261/2615/5855/products/KIDS-11-SPACEDUIT-ONESIE-INFANT-ONESIE-WHITE-GREY-FRONT_600x.png?v=1631644234"
         }

    ]
    return (

         <div className="featured-products">
             <Link to="/productpage" style={{textDecoration:'none', color:"inherit"}}>
            <h1 className="featured-products-title">FEATURED PRODUCTS</h1>
            <div className="featured-outer">
                <div className="featured-product1" >
                    <img src="https://cdn.shopify.com/s/files/1/0261/2615/5855/products/Crew-2_missionpatch_UPDATEDcopy_900x.png?v=1636404445" className="featured-img1" onClick={()=>{setProductEvent(featuredproductsobj[0]);window.scrollTo(0, 0)}} alt="featured-product-1"></img>
                    <p className="featured-product1-info">SPACEX CREW-2 MISSION PATCH<br />$15.00</p> 
                </div>

                <div className="featured-product2" onClick={()=>{setProductEvent(featuredproductsobj[1]);window.scrollTo(0, 0)}}>
                    <img src="https://cdn.shopify.com/s/files/1/0261/2615/5855/products/KIDS-11-SPACEDUIT-ONESIE-INFANT-ONESIE-WHITE-GREY-FRONT_900x.png?v=1631644234" className="featured-img2" alt="featured-product-2"></img>
                    <p className="featured-product2-info">KIDS SPACEX SPACESUIT ONESIE<br />$45.00</p>
                </div>
            </div>
            </Link>

            <p className="featured-products-btn"><Link to="/collections/featuredproducts" style={{textDecoration:"none", color:"inherit"}}onClick={()=>{window.scrollTo(0,0)}}>VIEW ALL FEATURED</Link></p>
        </div> 
    )
}

export default Featuredproducts;