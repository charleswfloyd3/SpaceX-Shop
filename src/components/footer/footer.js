import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer-outer">
            <ul className="footer-list">
                <li>FAQS</li>
                <li>Search</li>
                <li>Privacy Policy</li>
                <li className="footer-li-last">Terms & Conditons</li>
            </ul>
            <li className='foot-mobile'>Terms & Conditons</li>

            <p className="developer-info-footer">Developed by Charles Floyd</p>
        </div>
    )
}

export default Footer;
