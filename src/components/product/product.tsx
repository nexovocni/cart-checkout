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
            <div className="product__section">
                <div className="product__section__first">
                <div className="product__section__first-image">
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className="product__section__first-name">
                    <div className="name">
                       <div> <p>{localData.name}</p></div>
                       <div><p className="name__mobile-data">{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p></div>
                        <div className="name__mobile-nav">
                            <button className="name__mobile-nav-edit">Edit</button>
                            <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
                        </div>
                    </div>
                    <div className="wishlist">
                        <p><i className="fa fa-heart"></i>Move to wishlist</p>
                    </div>
                    <div className="name__price">
                        <p>${parseInt(localData.price).toFixed(2)}</p>
                    </div>
                </div>
                </div>
            <div className="product__section__second">
            <div className="product__section__second-color">
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
            <div className="product__section__second-size">
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
            <div className="product__section__second-quantity">
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
            <div className="product__section__second-price">
                <p>${parseInt(localData.price).toFixed(2)}</p>
            </div>
            </div>
            </div>
            <div id={`${localData.id}`} onClick={removeProduct} className="product__exit">
                <i className="fa fa-times"></i>
            </div>
       </div>
    );
}

export default Product
