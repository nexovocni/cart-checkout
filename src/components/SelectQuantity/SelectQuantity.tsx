import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'

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
}

const SelectQuantity:React.FC<IProps> = ({product}) => {

    const productContext:any = useContext(ProductContext)
    const {changeProducts} = productContext

    return (
        <div className="product__section__right-quantity-full">
                <select name="quantity" onChange={(e) => changeProducts(e, product)}>
                    <option defaultValue={product.quantity} disabled hidden>{product.quantity}</option>
                        {product.quantities.map((quantity: number, index: number) => {
                            return(
                        <option key={index} value={quantity}>{quantity}</option>
                        )
                    })}
                </select>
            <i className="fas fa-angle-down"></i>
        </div>
    )
}

export default SelectQuantity
