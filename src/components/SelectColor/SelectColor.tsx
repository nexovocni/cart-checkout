import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'

interface IProps {
    localData: any,
    handleChangeColor: any
}

const SelectColor:React.FC<IProps> = ({localData, handleChangeColor}) => {

    return (
        <div className="product__section__right-color-full">
                    <div style={{backgroundColor: localData.color === "Leopard" ? "orange" : localData.color }} className="color-ball"></div>
                    <select name="colorName" onChange={handleChangeColor}>
                        <option selected hidden>{localData.color}</option>
                        {localData.colors.map((color: string, index: number) => {
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
