import React, { useState, useEffect, useContext } from 'react'
import ProductLeft from '../ProductLeft/ProductLeft'
import ProductRight from '../ProductRight/ProductRight'
import {ProductContext} from '../../contexts/ProductContext'
import './Product.scss'

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
   
    updateState: any;
    stateComponent: boolean
}

const Product: React.FC<IProps> = ({product, updateState, stateComponent}) => {

    const [localData, setLocalData] = useState(product);

    const productContext:any = useContext(ProductContext)
    const {removeProduct} = productContext

    useEffect(() => {
        setLocalData(product);
    }, [product]);

    return (
        <div className="product">
            <div className="product__section">
                <ProductLeft
                        localData={ localData }
                        product={product}
                        updateState={ updateState}
                        stateComponent= { stateComponent }
                        review={false}
                /> 
                <ProductRight
                        product={product}
                        localData={localData} 
                />
            </div>
            <div 
                id={`${localData.id}`} 
                onClick={removeProduct} 
                className="product__exit"
            >
                <i className="fa fa-times"></i>
            </div>
        </div>
    )
}

export default Product
