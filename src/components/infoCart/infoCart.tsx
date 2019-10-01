import React from 'react'
import './infoCart.scss'

const InfoCart = () => {
    return (
        <div className="info-cart">
            <div className="info">
                <p>Your bag - 3</p>
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
