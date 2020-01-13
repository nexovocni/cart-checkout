import React, {useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'
import IProduct from '../../interfaces/Interfaces'

interface IProps {
    product: IProduct
}

const SelectColor:React.FC<IProps> = ({product}) => {

    const productContext:any = useContext(ProductContext)
    const {changeProducts} = productContext

    return (
        <div className="product__section__right-color-full">
                    <div style={{backgroundColor: product.color === "Leopard" ? "orange" : product.color }} className="color-ball"></div>
                    <select name="color" onChange={(e) => changeProducts(e, product)}>
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
