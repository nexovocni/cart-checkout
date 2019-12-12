import React from 'react'
import './HeaderCart.scss'
import {Link} from 'react-router-dom'
import Logo from '../../../components/Logo/Logo'

interface IProps {
    switchComponent: boolean;
}

const Header:React.FC<IProps> = ({switchComponent}) => {
    return (
        <header className="header">
            <div className="header__top">
                <Logo />
                <div className={switchComponent ? "header__nav" : "header__nav__close"}>
                    <Link to="#">Log In</Link>
                    <Link to="#">Registration</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
