import React from 'react'
import './ViewProduct.scss'
import ViewMobile from '../ViewMobile/ViewMobile'

interface IProps {
    localData: any;
    handleState: any;
    productComponent: any;
    removeProduct: any;
    review: boolean;
}

const ViewProduct:React.FC<IProps> = ({localData, handleState, productComponent, removeProduct, review}) => {

    return (
            <React.Fragment>
                <div className={`${review ? `review` : `product`}__section__left-image`}>
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className={`${review ? `review` : `product`}__section__left-name`}>
                    <div className={productComponent ? `${review ? `review` : `product`}__name` :  `${review ? `review` : `product`}__name-mob`}>
                        <div>
                            <p>{localData.name}</p>
                        </div>
                        <ViewMobile 
                            handleState={handleState} 
                            removeProduct={removeProduct} 
                            productComponent={productComponent}
                            localData={localData}
                            review={review}
                        />
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
