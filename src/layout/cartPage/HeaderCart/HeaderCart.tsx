import React from 'react'
import './HeaderCart.scss'
import {Link} from 'react-router-dom'
import Logo from '../../../components/Logo/Logo'

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <Logo />
                <div className="header__nav">
                    <Link to="#">Log In</Link>
                    <Link to="#">Registration</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
