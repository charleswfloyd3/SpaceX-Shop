import React from 'react'
// import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './account.css'
const Account = () => {
    return (
        <div className="account-page">
            <Navbar />
            <div className="login-form-outer">
                <form className="login-form">
                    <h1 className="form-title">LOGIN</h1>
                    <h6 className="form-subheading">Please enter your e-mail and password:</h6>
                    <input className="email-input" type="email" placeholder="Email" required></input>
                    <input className="password-input" placeholder="Password" required></input>
                    <input className="submit-btn" type="submit" placeholder="LOGIN"></input>
                    <h4 className="form-conclusion-text">Don't have an account? Create one</h4>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Account;
