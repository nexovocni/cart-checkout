import React from 'react'
import './ProductRight.scss'

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
    localData: any,
    handleChange: any,
    handleChangeColor: any
}

const ProductRight:React.FC<IProps> = ({product, localData, handleChange, handleChangeColor}) => {
    return (
        <div className="product__section__right">
            <div className="product__section__right-color">
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
            </div>
            <div className="product__section__right-size">
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
            </div>
            <div className="product__section__right-quantity">
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
            </div>
            <div className="product__section__right-price">
                <p>${parseInt(localData.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductRight
