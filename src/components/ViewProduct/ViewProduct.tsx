import React, {useContext} from 'react'
import './ViewProduct.scss'
import ViewMobile from '../ViewMobile/ViewMobile'
import {CartComponentContext} from '../../contexts/CartComponentContext'

interface IProps {
    review: boolean;
    product: any
}

const ViewProduct:React.FC<IProps> = ({review, product}) => {

    const cartContext:any = useContext(CartComponentContext)
    const {productState} = cartContext.cartComponents

    return (
            <React.Fragment>
                <div className={`${review ? `review` : `product`}__section__left-image`}>
                    <img src={product.image[product.colors.indexOf(product.color)]} alt="productImg"/>
                </div>
                <div className={`${review ? `review` : `product`}__section__left-name`}>
                    <div className={productState ? `${review ? `review` : `product`}__name` :  `${review ? `review` : `product`}__name-mob`}>
                        <div>
                            <p>{product.name}</p>
                        </div>
                        <ViewMobile 
                            product={product}
                            review={review}
                        />
                        <div className={productState ? "wishlist" : "wishlist-mob"}>
                            <p><i className="fa fa-heart"></i>Move to wishlist</p>
                        </div>
                    </div>
                    <div className="name__price">
                        <p>${parseInt(product.price).toFixed(2)}</p>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default ViewProduct
