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
    handleChange: any,
    handleChangeColor: any,
}

const ProductRight:React.FC<IProps> = ({product, handleChange, handleChangeColor}) => {

    return (
        <div className="product__section__right">
            <div className="product__section__right-color">
                <SelectColor product={product} handleChangeColor={handleChangeColor}/>
            </div>
            <div className="product__section__right-size">
                <SelectSize product={product} handleChange={handleChange}/>
            </div>
            <div className="product__section__right-quantity">
                <SelectQuantity product={product} handleChange={handleChange}/>
            </div>
            <div className="product__section__right-price">
                <p>${parseInt(product.price).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductRight
