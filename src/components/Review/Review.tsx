import React, {useState} from 'react'
import ReviewProduct from '../ReviewProduct/ReviewProduct'
import './Review.scss'

interface IProps {
    products: any[];
    changeProducts: any;
    deleteProduct: any;
    checkValue: number;
    itemsValue: any;
    updateState:any;
    componentReview: boolean;
    openComponentReview: any;
}

const Review:React.FC<IProps> = ({products, changeProducts, deleteProduct, checkValue, itemsValue, updateState, openComponentReview, componentReview}) => {

    return (
        <div className="review">
            <h2 className="review__number">4</h2>
            <div className="review__component__up">
                <div className="review__component">
                    <h2 className="review__heading">Review and finish</h2>
                    <button onClick={() => {openComponentReview(!componentReview)}} className={!componentReview ? "review__heading__button" : "close"}>Edit</button>
                    <div className="review__products">
                        {products.map(product => {
                            return(
                                <ReviewProduct 
                                    product={product}
                                    changeProducts={changeProducts}
                                    deleteProduct={deleteProduct}
                                    updateState={updateState}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
