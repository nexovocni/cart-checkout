import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'
import './MobileHeader.scss'

const MobileHeader:React.FC = () => {

    const cartProducts:any = useContext(ProductContext)
    const {products} = cartProducts
    
    return (
        <div className="mobile-header">
            <div className="mobile-header__left">
                <div className="mobile-header__left__lines"></div>
                <p>Your bag - {products.length}</p>
            </div>
            <div className="mobile-header__right">
                <img className="search" src="./img/search.svg" alt="productImg"/>
                <img className="exit" src="./img/close-line.svg"  alt="productImg"/>
            </div>
        </div>
    )
}

export default MobileHeader
