import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'

interface IProps {
    product: any,
    localData: any,
    handleChange: any
}

const SelectSize:React.FC<IProps> = ({product, localData, handleChange}) => {

    return (
        <div className="product__section__right-size-full">
            <select name="size" onChange={handleChange}>
                <option selected hidden>{product.size}</option>
                {localData.sizes.map((size: string, index:number) => {
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
