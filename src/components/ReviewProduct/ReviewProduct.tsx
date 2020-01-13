import React from 'react'
import ProductLeft from '../ProductLeft/ProductLeft'
import './ReviewProduct.scss'
import IProduct from '../../interfaces/Interfaces'

interface IProps {
    product: IProduct
    updateStateComponent: any;
    stateComponent: boolean;
}

const ReviewProduct:React.FC<IProps> = ({product, updateStateComponent, stateComponent}) => {

    return (
        <div className="review__product">
            <ProductLeft 
                product={product}
                review={true}
            />
        </div>
    )
}

export default ReviewProduct

