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
}

const Product: React.FC<IProps> = ({product}) => {

    const [localData, setLocalData] = useState(product);

    const productContext:any = useContext(ProductContext)
    const {changeProducts, deleteProduct} = productContext

    useEffect(() => {
        setLocalData(product);
    }, [product]);

    const handleChange = (e:any) => {
        const newProduct = {...product, [e.target.name]: e.target.value}
        changeProducts(newProduct.id, newProduct)
    };

    const handleChangeColor = (e:any) => {
        const newColor = e.target.value;
        const newProduct = {...product, color: newColor,}
        changeProducts(newProduct.id, newProduct);
    }

    const removeProduct = () => {
        deleteProduct(product.id);
    }

    return (
        <div className="product">
            <div className="product__section">
                <ProductLeft
                        localData={ localData }
                        product={product}
                        review={false}
                        handleChange= {handleChange}
                        handleChangeColor = {handleChangeColor}
                        removeProduct={removeProduct}
                /> 
                <ProductRight
                        product={product}
                        localData={localData} 
                        handleChange= {handleChange}
                        handleChangeColor = {handleChangeColor}
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
