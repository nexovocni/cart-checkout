import React, { useState, useEffect } from 'react'
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
        image: any;
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

    const handleChange = (e: any) => {
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

    const removeProduct = (e:any) => {
        remove(localData.id);
    }

    useEffect(() => {
        setLocalData(product);
    }, [product]);

    return (
        <div className="product">
                <div className="product_image">
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className="product_name">
                    <div className="name">
                        <p>{localData.name}</p>
                    </div>
                    <div className="wishlist">
                        <p><i className="fa fa-heart"></i>Move to wishlist</p>
                    </div>
            </div>
            <div className="product_color">
                <div style={{backgroundColor: localData.color === "Leopard" ? "orange" : localData.color }} className="color-ball"></div>
                <select name="colorName" onChange={handleChangeColor}>
                    <option selected hidden>{localData.color}</option>
                    {localData.colors.map((color, index) => {
                        return (
                            <option key={index} value={color}>{color}</option>
                        )
                    })}
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_size">
            <select name="size" onChange={handleChange}>
                <option selected hidden>{product.size}</option>
                {localData.sizes.map((size, index) => {
                    return(
                        <option key={index} value={size}>{size}</option>
                    )
                })}
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_quantity">
            <select name="quantity" onChange={handleChange}>
                    <option defaultValue={localData.quantity} disabled hidden>{localData.quantity}</option>
                    {localData.quantities.map((quantity, index) => {
                        return(
                            <option key={index} value={quantity}>{quantity}</option>
                        )
                    })}
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_price">
                <p>${parseInt(localData.price).toFixed(2)}</p>
            </div>
            <div id={`${localData.id}`} onClick={removeProduct} className="product_exit">
            <i className="fa fa-times"></i>
            </div>
       </div>
    );
}

export default Product
