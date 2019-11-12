import React from 'react'
import SelectColor from '../SelectColor/SelectColor'
import SelectSize from '../SelectSize/SelectSize'
import SelectQuantity from '../SelectQuantity/SelectQuantity'
import './ReviewSelect.scss'

interface IProps {
    localData: any;
    handleChangeColor: any;
    handleChange: any;
    handleButton: any;
    product: any;
    productComponent: boolean;
}

const ReviewSelect:React.FC<IProps> = ({localData, handleChange, handleChangeColor, product, handleButton, productComponent}) => {
    return (
        <div className={productComponent ? "review__select" : "close"}>
            <div className="review__product__section__select">
                <div className="review__product__section__color">
                    <p>Color</p>
                    <div className="review__product__section__border">
                        <SelectColor localData={localData} handleChangeColor={handleChangeColor}/>
                        <i className="fas fa-angle-down"></i>
                    </div>
                </div>
                <div className="review__product__section__size">
                    <p>Size</p>
                    <div className="review__product__section__border">
                        <SelectSize localData={localData} handleChange={handleChange} product={product}/>
                        <i className="fas fa-angle-down"></i>
                    </div>
                </div>
                <div className="review__product__section__quantity">
                    <p>Quantity</p>
                    <div className="review__product__section__border">
                        <SelectQuantity localData={localData} handleChange={handleChange}/>
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
