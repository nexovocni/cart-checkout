import React, { useState, useEffect } from 'react'
import ProductLeft from '../ProductLeft/ProductLeft'
import ProductRight from '../ProductRight/ProductRight'
import './product.scss'


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
    update: any;
    remove: any;
}

const Product: React.FC<IProps> = ({
    product,
    update,
    remove,
}) => {
    const [localData, setLocalData] = useState(product);

    const handleChange = (e:any) => {
        const newProduct = {...localData, [e.target.name]: e.target.value};
        update(newProduct.id, newProduct);
    };

    const handleChangeColor = (e:any) => {
        const newColor = e.target.value;

        const newProduct = {
            ...localData, 
            color: newColor,
        };

        update(newProduct.id, newProduct);
    }

    const removeProduct = () => {
        remove(localData.id);
    }

    useEffect(() => {
        setLocalData(product);
        console.log(product)
    }, [product]);

    return (
        <div className="product">
            <div className="product__section">
               <ProductLeft
                    localData={localData}
                    removeProduct={removeProduct}
                    handleChange={handleChange}
                    handleChangeColor={handleChangeColor} 
                    product={product}
                /> 
               <ProductRight
                    product={product}
                    localData={localData}
                    handleChange={handleChange}
                    handleChangeColor={handleChangeColor} 
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
    );
}

export default Product
