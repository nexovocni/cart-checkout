import React from 'react'
import './MobileHeader.scss'

interface IProps {
    products: any
}

const MobileHeader:React.FC<IProps> = ({products}) => {
    return (
        <div className="mobile-header">
            <div className="mobile-header__left">
                <div className="mobile-header__left__lines"></div>
                <p>Your bag - {products.length}</p>
            </div>
            <div className="mobile-header__right">
                <img className="search" src="./img/search.svg"/>
                <img className="exit" src="./img/close-line.svg"/>
            </div>
        </div>
    )
}

export default MobileHeader
