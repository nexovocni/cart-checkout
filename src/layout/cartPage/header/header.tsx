import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__top__logo">
                    <i className="fas fa-chevron-left"></i>
                    <h1>Addition Elle</h1>
                </div>
                <div className="header__nav">
                    <Link to="#">Log In</Link>
                    <Link to="#">Registration</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
