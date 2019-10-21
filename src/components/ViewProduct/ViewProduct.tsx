import React from 'react'
import './ViewProduct.scss'

interface IProps {
    localData: any,
    handleState: any,
    productComponent: any,
    removeProduct: any,
   
}

const ViewProduct:React.FC<IProps> = ({localData, handleState, productComponent, removeProduct}) => {

    return (
            <React.Fragment>
                <div className="product__section__left-image">
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className="product__section__left-name">
                    <div className={productComponent ? "name" :  "name-mob"}>
                        <div>
                            <p>{localData.name}</p>
                        </div>
                        <div className={!productComponent ? "name__mobile-data-mob" : "name__mobile-data"} >
                            <p className="name__mobile-data-text">{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
                        </div>
                        <div className={productComponent ? "name__mobile-nav" : "name__mobile-nav-mob"}>
                            <button onClick={handleState} className="name__mobile-nav-edit">Edit</button>
                            <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
                        </div>
                        <div className={productComponent ? "wishlist" : "wishlist-mob"}>
                            <p><i className="fa fa-heart"></i>Move to wishlist</p>
                        </div>
                    </div>
                    <div className="name__price">
                        <p>${parseInt(localData.price).toFixed(2)}</p>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default ViewProduct
