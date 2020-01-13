import React from 'react';
import ProductLeft from '../ProductLeft/ProductLeft';
import './ReviewProduct.scss';
import IProduct from '../../interfaces/Interfaces';

interface IProps {
    product: IProduct;
}

const ReviewProduct: React.FC<IProps> = ({product}: IProps): any => {

    return (
        <div className="review__product">
            <ProductLeft
                product={product}
                review={true}
            />
        </div>
    );
};

export default ReviewProduct;
