import React, {useState} from 'react'
import './ProductLeft.scss'

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
    handleChangeColor: any
    removeProduct: any,
}

const ProductLeft:React.FC<IProps> = ({localData, removeProduct}) => {

    const [select, setSelect] = useState(false)

    return (
        <div className="product__section__left">
                <div className="product__section__left-image">
                    <img src={localData.image[localData.colors.indexOf(localData.color)]} alt="image"/>
                </div>
                <div className="product__section__left-name">
                    <div className="name">
                        <div>
                            <p>{localData.name}</p>
                        </div>
                        <div>
                            <p className="name__mobile-data">{localData.color} - Size {localData.size} - Quantity {localData.quantity}</p>
                        </div>
                        <div className="name__mobile-nav">
                            <button className="name__mobile-nav-edit">Edit</button>
                            <button onClick={removeProduct} className="name__mobile-nav-remove">Remove</button>
                        </div>
                        <div className="wishlist">
                            <p><i className="fa fa-heart"></i>Move to wishlist</p>
                        </div>
                    </div>
                    <div className="name__price">
                        <p>${parseInt(localData.price).toFixed(2)}</p>
                    </div>
                </div>
        </div>
    )
}

export default ProductLeft
