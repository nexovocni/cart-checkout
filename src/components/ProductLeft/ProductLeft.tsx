import React, {useContext, useState} from 'react';
import SelectMobile from '../SelectMobile/SelectMobile';
import ViewProduct from '../ViewProduct/ViewProduct';
import {CartComponentContext} from '../../contexts/CartComponentContext';
import IProduct from '../../interfaces/Interfaces';
import './ProductLeft.scss';

interface IProps {
    product: IProduct;
    review: boolean;
}

const ProductLeft: React.FC<IProps> = ({product, review}: IProps): any => {

    const cartContext: any = useContext(CartComponentContext);
    const {cartState} = cartContext.cartComponents;
    const [productState, updateProductState] = useState (true);

    return (
        <div className={`${review ? `review` : `product`}__section__left`} style={{opacity: cartState && productState ? .3 : 1, pointerEvents: cartState && productState ? 'none' : 'auto'}}>
            <div className="product__section__left-top">
                <ViewProduct
                    review={review}
                    product={ product }
                    productState={productState}
                    updateProductState={updateProductState}
                />
            </div>
            <div className={!productState ? `${review ? `review` : `product`}__section__left-bottom` : 'close'}>
                <SelectMobile
                    product={ product }
                    review={review}
                    updateProductState={updateProductState}
                />
            </div>
        </div>
    );
};

export default ProductLeft;
