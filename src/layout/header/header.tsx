import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="top">
                <div className="logo">
                    <i className="fas fa-chevron-left"></i>
                    <h1>Addition Elle</h1>
                </div>
                <div className="nav">
                    <Link to="#">Log In</Link>
                    <Link to="#">Registration</Link>
                </div>
            </div>
            <div className="bottom">
                <p>Your bag - 3</p>
                <div className="categories">
                        <p>Color</p>
                        <p>Size</p>
                        <p>Quantity</p>
                        <p>Price</p>
                </div>
            </div>
            <div className="line"></div>
        </header>
    )
}

export default Header
