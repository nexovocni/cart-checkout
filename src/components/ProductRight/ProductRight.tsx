import React from 'react'
import SelectColor from '../SelectColor/SelectColor'
import SelectSize from '../SelectSize/SelectSize'
import SelectQuantity from '../SelectQuantity/SelectQuantity'
import '../SelectColor/SelectColor.scss'
import '../SelectSize/SelectSize.scss'
import '../SelectQuantity/SelectQuantity.scss'
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
    handleChangeColor: any,
}

const ProductRight:React.FC<IProps> = ({product, localData, handleChange, handleChangeColor}) => {

    return (
        <div className="product__section__right">
            <div className="product__section__right-color">
                <SelectColor localData={localData} handleChangeColor={handleChangeColor}/>
            </div>
            <div className="product__section__right-size">
                <SelectSize localData={localData} product={product} handleChange={handleChange}/>
            </div>
            <div className="product__section__right-quantity">
                <SelectQuantity localData={localData} handleChange={handleChange}/>
            </div>
            <div className="product__section__right-price">
                <p>${parseInt(localData.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductRight
