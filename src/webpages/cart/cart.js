import React, {useEffect} from 'react'
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './emptycart.css'
import './loadedcart.css'
import { useProduct } from '../../store/productclicked'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { setCartProductEvent} = useProduct()
    const cartproducts = JSON.parse(localStorage.getItem('cartproducts'))
        let pricearray = [];
        let totalprice = 0;
        for(let i =0; i<cartproducts.length; i++){
            pricearray.push(parseFloat(cartproducts[i].price.replace('$', "")))
        }
        totalprice = pricearray.reduce((a,b) => a + b, 0)
        // console.log(pricearray)
        // console.log(totalprice)
    let noduplicateproducts = cartproducts;   

    useEffect(() => {
        document.title = "Your Shopping Cart - SpaceX Shop Clone";  
      }, []);



    
    return (
        <div  >
            <Navbar />
            {JSON.stringify(cartproducts) === "[]" ? <div className="cart-empty-page">
                <div className="empty-cart-div">
                    <p className="cart-empty">YOUR CART IS EMPTY</p>
                    <Link to={"/collections/all"} style={{"textDecoration":"none", "cursor":"pointer"}} onClick={()=>{window.scrollTo(0, 0)}}><p className='shop-our-products'>SHOP OUR PRODUCTS</p></Link>
                </div>
            </div> : 

                <div className="items-in-cart-outer">
                    <div>
                        <h1 className="cart-loaded-title">CART</h1>
                    {noduplicateproducts.map((product) =>
                        <div className="items-in-cart">
                            <div>
                                <p className="cart-item-title cart-item-total-product">PRODUCT</p>
                            </div>
                            <div>
                                {/* <p className="cart-item-title cart-item-title-quantity">QUANTITY</p> */}
                                <p className="cart-item-title cart-item-title-quantity"></p>
                            </div>
                            <div>
                                <p className="cart-item-title cart-item-title-total">TOTAL</p>
                            </div>
                            <div className='cart-item-content'>
                                <div>
                                    <img src={product.image} className="cart-item-img" alt="product-img"></img>
                                    <div>
                                    <p className="cart-item-name">{product.name}</p>
                                    <p className="cart-item-price">{product.price}</p>
                                    </div>
                                </div>
                                <div className="quantity-btn">

                                </div>
                                <div>
                                </div>

                                
                            </div>
                            
                        </div>
                    )}
                    <div className="checkout-div">
                        <p className="totalprice">TOTAL PRICE:<br/>${totalprice}.00</p>
                        <p className="shipping-info">Shipping & taxes calculated at checkout</p>
                        <Link style={{"textDecoration":"none"}} to={'/checkout'}><p className='checkout-btn'>CHECKOUT</p></Link>
                        <p className="emptycart-btn" onClick={()=>{setCartProductEvent("hey"); window.scrollTo(0,0)}}>Empty Cart</p>
                    </div>
                              
                    </div>

                </div>}      


                <Footer />
        </div>
    )
}

export default Cart;
