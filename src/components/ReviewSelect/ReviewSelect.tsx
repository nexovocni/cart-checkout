import React from 'react'
import './ReviewSelect.scss'

interface IProps {
    localData: any;
    handleChangeColor: any;
    handleChange: any;
    handleButton: any;
    product: any;
    productComponent: boolean;
    state: boolean;
}

const ReviewSelect:React.FC<IProps> = ({localData, handleChange, handleChangeColor, product, handleButton, productComponent, state}) => {
    return (
        <div className={productComponent && !state ? "review__product__select" : "close__select"}>
            <div className="review__product__section__select">
                <div className="review__product__section__color">
                    <p>Color</p>
                    <div className="review__product__section__border">
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
                <div className="review__product__section__size">
                    <p>Size</p>
                    <div className="review__product__section__border">
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
                <div className="review__product__section__quantity">
                    <p>Quantity</p>
                    <div className="review__product__section__border">
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
            </div>
            <div className="review__product__section__button">
                <button onClick={handleButton}>Update Bag</button>
            </div>
        </div>
    )
}

export default ReviewSelect