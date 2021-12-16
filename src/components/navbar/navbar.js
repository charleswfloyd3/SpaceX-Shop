import React ,{useState} from 'react'
import {Link}  from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    const [sidebar, setsidebar] = useState("none")
    return (
        <div className="header-outer">

            <div className="nav-outer-main">

                <div className='nav-left-main'>
                <Link style={{ textDecoration:"none", color:'inherit'}} to={'/'} ><img src="/images/spacex-logo.png" className="logo" alt="spacex-logo" onClick={()=>{ window.scrollTo(0, 0)}}/></Link>
                    <ul className='nav-links-main'>
                    <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/mens'} >Mens</Link></li>
                        <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/womens'} >Womens</Link></li>
                        <li className="nav-link" onClick={()=>{ window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/kids'} >Kids</Link></li>
                        <li className="nav-link" onClick={()=>{window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/accessories'} >Accessories</Link></li>
                        <li className="nav-link" onClick={()=>{window.scrollTo(0, 0)}}><Link style={{ textDecoration:"none", color:'inherit'}} to={'/collections/premium'} >Premium</Link></li>
                    </ul>
                </div>
                <div className='nav-right-main'>
                    <ul className="nav-links-right-main">
                        <li className="nav-link-right"><Link style={{ textDecoration:"none", color:'inherit'}} to={'/account/login'} >Account</Link></li>
                        <li className="nav-link-right">Search</li>
                        <li className="nav-link-right-cart"><Link style={{ textDecoration:"none", color:'inherit'}} to={'/cart'} onClick={()=>{window.scrollTo(0, 0)}}>CART ({JSON.parse(localStorage.getItem('cartproducts')).length})</Link></li>                   
                         </ul>
                </div>

               
                <div className="mobile-nav-outer">
                    <div  className="nav-left-mobile-main">
                        <img src="/images/hamburgericon.png" className="hamburger" alt="hamburger-icon"  onClick={() =>{
                            if(sidebar === "none"){
                                setsidebar("block")
                            }
                            else if(sidebar === "block"){
                                setsidebar("none")
                            }
                        }}></img>
                    </div>
                    <Link style={{ textDecoration:"none", color:'inherit'}} to={'/'} ><img src="/images/spacex-logo.png" className="nav-center-mobile-main" alt="spacex-logo" onClick={()=>{ window.scrollTo(0, 0)}}/></Link>
                    <div className="nav-right-mobile-main">
                        <img className="searchicon-main" src="/images/searchicon.png" alt="search-icon"></img>
                        <Link style={{ textDecoration:"none", color:'inherit'}} to={'/cart'} onClick={()=>{window.scrollTo(0, 0)}}><img className="carticon-main" src="/images/carticon.png" alt="cart-icon"></img></Link>
                    </div>
                </div>

                <div className="nav-sidebar" style={{display:sidebar}}>
                    <img src="/images/xicon.png" className="xicon" alt="x-icon" onClick={()=>{
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

export default Navbar;
