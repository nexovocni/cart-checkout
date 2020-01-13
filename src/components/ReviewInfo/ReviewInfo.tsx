import React from 'react'
import './ReviewInfo.scss'

interface IProps {
    localData: any;
    productComponent: boolean;
    handleState: any;
    removeProduct: any;
}

const ReviewInfo:React.FC<IProps> = ({localData, productComponent, handleState, removeProduct}) => {
    return (
        <div className="review__product__section">
            <div className="review__product__section__info">
                <div className="review__product__section__image">
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="product"/>
                </div>
                <div className="review__product__section__name">
                    <div>
                        <p>{localData.name}</p>
                    </div>
                    <div className= {!productComponent ? "review__product__section__text" : "none"} >
                        <p>{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
                    </div>
                    <div className={productComponent ? "review__product__section__wishlist" : "none"}>
                        <p><i className="fa fa-heart"></i>Move to wishlist</p>
                    </div>
                    <div className={!productComponent ? "review__product__section__nav" : "none"}>
                        <button onClick={handleState} className="review__product__section__edit">Edit</button>
                        <button onClick={removeProduct} className="review__product__section__remove">Remove</button>
                    </div>
                </div>
            </div>
            <div className="rewiev__product__section__price">
                <p>${parseInt(localData.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ReviewInfo
