import React from 'react'

interface IProps {
    handleChange: any,
    localData: any
}

const SelectQuantity:React.FC<IProps> = ({handleChange, localData}) => {
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
