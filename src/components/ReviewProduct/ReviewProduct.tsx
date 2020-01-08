import React from 'react'
import ProductLeft from '../ProductLeft/ProductLeft'
import './ReviewProduct.scss'

interface IProps {
    product: {
        name: string,
        size: string,
        price: string,
        color: string,
        colorName: string, 
        quantity: string,
        id: number,
        colors: string[]
        sizes: string[],
        quantities: number[]
        image: string;
    };
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

