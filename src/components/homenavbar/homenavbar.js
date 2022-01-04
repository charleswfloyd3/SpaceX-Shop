import React,{useState} from 'react'
import './homenavbar.css'
import {Link}  from 'react-router-dom';

const Homenavbar = () => {

    // const numOfProducts = cartproducts.length
    const [sidebar, setsidebar] = useState("none")
    return (
        <div className="header-outer">

            <div className="nav-outer">
            <div className="announcement">
                <p className="announcment-message" >ORDERS PLACED AFTER DECEMBER 10TH ARE NOT GUARANTEED TO ARRIVE BY CHRISTMAS</p>
            </div>
                <div className='nav-left'>
                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/'} ><img src="/images/spacex-logo.png" alt="spacex" className="logo" onClick={()=>{ window.scrollTo(0, 0)}}/></Link>
                    <ul className='nav-links'>
                        <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/mens'} >Mens</Link>
                        <div className='nav-link-dropdown-outer'>
                            <div className="nav-link-dropdown">
                                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/mens-shirts'}><p>Shirts</p></Link>                                           <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/mens-outerwear'}><p>Outerwear</p></Link>
                                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/mens'}><p>View All</p></Link>                            
                            </div>
                        </div>
                        </li>

                        <li className="nav-link" onClick={()=>{window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/womens'} >Womens</Link>
                        <div className='nav-link-dropdown-outer'>
                            <div className="nav-link-dropdown">
                                    <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/womens-shirts'}><p>Shirts</p></Link>  
                                    <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/womens-outerwear'}><p>Outerwear</p></Link>                                       <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/womens'}><p>View All</p></Link>                            
                            </div>
                        </div>
                        </li>

                        <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/kids'} >Kids</Link>
                        <div className='nav-link-dropdown-outer'>
                            <div className="nav-link-dropdown">
                                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/kids-shirts'}><p>Shirts</p></Link>    
                                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/kids-outerwear'}><p>Outerwear</p></Link>         
                                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/kids'}><p>View All</p></Link>                            
                            </div>
                        </div>
                        </li>

                        <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/accessories'} >Accessories</Link>
                        <div className='nav-link-dropdown-outer'>
                            <div className="nav-link-dropdown">
                                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/accessories'}><p>View All</p></Link>
                            </div>
                        </div>
                        </li>

                        <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/premium'} >Premium</Link>
                        <div className='nav-link-dropdown-outer'>
                            <div className="nav-link-dropdown">
                            <Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/premium'}><p>View All</p></Link>                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <ul className="nav-links-right">
                        <li className="nav-link-right"><Link style={{ textDecoration:"none", color:'inherit'}} to={'/account/login'} >Account</Link></li>
                        <li className="nav-link-right">Github</li>
                        <li className="nav-link-right-cart"><Link style={{ textDecoration:"none", color:'inherit'}} to={'/cart'} onClick={()=>{window.scrollTo(0, 0)}}>CART ({JSON.parse(localStorage.getItem('cartproducts')).length})</Link></li>
                    </ul>
                </div>

               
                <div className="mobile-nav-outer">
                    <div  className="nav-left-mobile">
                        <img src="/images/hamburgericon.png" className="hamburger-home" alt="hamburger-icon" onClick={() =>{
                            if(sidebar === "none"){
                                setsidebar("block")
                            }
                            else if(sidebar === "block"){
                                setsidebar("none")
                            }
                        }}></img>
                        
                    </div>
                    <img src="/images/spacex-logo.png" className="nav-center-mobile" alt="spacex-logo"></img>
                    <div className="nav-right-mobile">
                        <img className="searchicon" alt="search-icon" src="/images/searchicon.png"></img>
                        <Link style={{ textDecoration:"none", color:'inherit'}} to={'/cart'} onClick={()=>{window.scrollTo(0, 0)}}><img className="carticon-main"  alt="cart-icon" src="/images/carticon.png"></img></Link>
                    </div>
                </div>


                <div className="nav-sidebar" style={{display:sidebar}}>
                    <img src="/images/xicon.png" alt="x-mobile-icon" className="xicon" onClick={()=>{
                            if(sidebar === "none"){
                                setsidebar("block")
                            }
                            else if(sidebar === "block"){
                                setsidebar("none")
                            }
                        }}>
                    </img>
                    <ul>
                        <li>
                            <p><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/mens'} onClick={()=>{window.scrollTo(0, 0)}}>Mens</Link></p>
                            {/* <p>+</p> */}
                        </li>
                        <li>
                            <p><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/womens'} onClick={()=>{window.scrollTo(0, 0)}}>Womens</Link></p>
                            {/* <p>+</p> */}
                        </li>
                        <li>
                            <p><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/kids'} onClick={()=>{window.scrollTo(0, 0)}}>Kids</Link></p>
                            {/* <p>+</p> */}
                        </li>
                        <li>
                            <p><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/accessories'} onClick={()=>{window.scrollTo(0, 0)}}>Accessories</Link></p>
                            {/* <p>+</p>     */}
                        </li>
                        <li>
                            <p><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/premium'} onClick={()=>{window.scrollTo(0, 0)}}>Premium</Link></p>
                            {/* <p>+</p> */}
                        </li>
                        {/* <li></li> */}
                        <p className="sidebar-account-link"><Link style={{ textDecoration:"none", color:'inherit'}} to={'/account/login'} >Account</Link></p>
                    </ul>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Homenavbar;


