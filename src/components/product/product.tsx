import React,{useState} from 'react'
import './product.scss'

interface productProps {
    name: string,
    size: string,
    price: string,
    color: string,
    colorName: string, 
    image: string,
    quantity: string,
    id: number
}

const Product = (props: productProps) => {

    const [color, useColor] = useState(props.colorName)

    return (
        <div className="product" key={props.id}>
                <div className="product_image">
                    <img src={props.image} alt="image"/>
                </div>
                <div className="product_name">
                    <div className="name">
                        <p>{props.name}</p>
                    </div>
                    <div className="wishlist">
                        <p><i className="fa fa-heart"></i>Move to wishlist</p>
                    </div>
            </div>
            <div className="product_color"> 
                <div style={{backgroundColor: color}} className="color-ball"></div>
                <select>
                    <option selected hidden>{props.color}</option>
                    <option value="red">Red</option>
                    <option value="gold">Gold</option>
                    <option value="orange">Leopard</option>
                    <option value="pink">Pink</option>
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_size">
            <select >
                    <option defaultValue={props.size} disabled hidden>{props.size}</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_quantity">
            <select >
                    <option defaultValue={props.quantity} disabled hidden>{props.quantity}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_price">
                <p>${props.price}</p>
            </div>
            <div className="product_exit">
            <i className="fa fa-times"></i>
            </div>
       </div>
    )
}

export default Product
