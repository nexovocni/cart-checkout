import React from 'react'

interface IProps {
    handleChange: any,
    product: any,
    localData: any
}

const SelectSize:React.FC<IProps> = ({product, handleChange, localData}) => {
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
