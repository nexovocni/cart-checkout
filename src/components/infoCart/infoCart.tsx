import React, {useContext} from 'react'
import './infoCart.scss'
import {ProductContext} from '../../hooks/ProductContext'

const InfoCart = () => {

    const [product, setProduct] = useContext(ProductContext)

    return (
        <div className="info-cart">
            <div className="info">
                <p>Your bag - {product.length}</p>
                <div className="categories">
                    <p>Color</p>
                    <p>Size</p>
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default InfoCart
