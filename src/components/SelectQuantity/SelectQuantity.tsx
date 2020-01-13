import React, {useContext} from 'react';
import {ProductContext} from '../../contexts/ProductContext';
import IProduct from '../../interfaces/Interfaces';

interface IProps {
    product: IProduct;
}

const SelectQuantity: React.FC<IProps> = ({product}: IProps): any => {

    const productContext: any = useContext(ProductContext);
    const {changeProducts} = productContext;

    return (
        <div className="product__section__right-quantity-full">
                <select name="quantity" onChange={(e: any): any => changeProducts(e, product)}>
                    <option defaultValue={product.quantity} disabled={true} hidden={true}>{product.quantity}</option>
                        {product.quantities.map((quantity: number, index: number) => {
                            return(
                        <option key={index} value={quantity}>{quantity}</option>
                        );
                    })}
                </select>
            <i className="fas fa-angle-down" />
        </div>
    );
};

export default SelectQuantity;
