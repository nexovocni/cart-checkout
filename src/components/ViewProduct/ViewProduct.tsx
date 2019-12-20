import React, {useContext} from 'react'
import './ViewProduct.scss'
import ViewMobile from '../ViewMobile/ViewMobile'
import {CartComponentContext} from '../../contexts/CartComponentContext'

interface IProps {
    localData: any;
    review: boolean;
    removeProduct: any
}

const ViewProduct:React.FC<IProps> = ({localData,review, removeProduct}) => {

    const productContext:any = useContext(CartComponentContext)
    const {productState} = productContext

    return (
            <React.Fragment>
                <div className={`${review ? `review` : `product`}__section__left-image`}>
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="productImg"/>
                </div>
                <div className={`${review ? `review` : `product`}__section__left-name`}>
                    <div className={productState ? `${review ? `review` : `product`}__name` :  `${review ? `review` : `product`}__name-mob`}>
                        <div>
                            <p>{localData.name}</p>
                        </div>
                        <ViewMobile 
                            localData={localData}
                            review={review}
                            removeProduct={removeProduct}
                        />
                        <div className={productState ? "wishlist" : "wishlist-mob"}>
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
