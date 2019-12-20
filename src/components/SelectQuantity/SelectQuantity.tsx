import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'

interface IProps {
    localData: any,
    handleChange: any,
}

const SelectQuantity:React.FC<IProps> = ({localData, handleChange}) => {

    return (
        <div className="product__section__right-quantity-full">
                <select name="quantity" onChange={handleChange}>
                    <option defaultValue={localData.quantity} disabled hidden>{localData.quantity}</option>
                        {localData.quantities.map((quantity: number, index: number) => {
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
