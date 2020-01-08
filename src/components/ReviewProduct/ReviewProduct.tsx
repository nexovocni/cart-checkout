import React, {useState, useEffect, useContext} from 'react'
import {ProductContext} from '../../contexts/ProductContext'
import ProductLeft from '../ProductLeft/ProductLeft'
import './ReviewProduct.scss'

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
    updateStateComponent: any;
    stateComponent: boolean;
}

const ReviewProduct:React.FC<IProps> = ({product, updateStateComponent, stateComponent}) => {

    const productContext:any = useContext(ProductContext)
    const {changeProducts} = productContext

    const handleChange = (e:any, product:any) => {
        const newProduct = {...product, [e.target.name]: e.target.value}
        changeProducts(newProduct.id, newProduct)
    };

    const handleChangeColor = (e:any, product: any) => {
        const newColor = e.target.value;
        const newProduct = {...product, color: newColor,}
        changeProducts(newProduct.id, newProduct);
    }


    return (
        <div className="review__product">
            <ProductLeft 
                product={product}
                review={true}
                handleChange= {handleChange}
                handleChangeColor = {handleChangeColor}
            />
        </div>
    )
}

export default ReviewProduct

