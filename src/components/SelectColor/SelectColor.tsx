import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'

interface IProps {
    product: any,
    handleChangeColor: any
}

const SelectColor:React.FC<IProps> = ({product, handleChangeColor}) => {

    return (
        <div className="product__section__right-color-full">
                    <div style={{backgroundColor: product.color === "Leopard" ? "orange" : product.color }} className="color-ball"></div>
                    <select name="colorName" onChange={handleChangeColor}>
                        <option selected hidden>{product.color}</option>
                        {product.colors.map((color: string, index: number) => {
                            return (
                                <option key={index} value={color}>{color}</option>
                            )
                        })}
                    </select>
                    <i className="fas fa-angle-down"></i>
                </div>
    )
}

export default SelectColor
