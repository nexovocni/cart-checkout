import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'

interface IProps {
    product: any,
    handleChange: any
}

const SelectSize:React.FC<IProps> = ({product, handleChange}) => {

    return (
        <div className="product__section__right-size-full">
            <select name="size" onChange={handleChange}>
                <option selected hidden>{product.size}</option>
                {product.sizes.map((size: string, index:number) => {
                    return(
                        <option key={index} value={size}>{size}</option>
                    )
                })}
            </select>
            <i className="fas fa-angle-down"></i>
        </div>
    )
}

export default SelectSize
