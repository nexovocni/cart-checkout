import React,{useState, useContext} from 'react'
import {ProductContext} from '../../hooks/ProductContext'
import './product.scss'

interface productProps {
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
    image: any
}

const Product = (props: productProps) => {

const [color, setColor] = useState(props.color)
const [products, setProducts] = useContext(ProductContext)
const [product, setProduct] = useState(props)
const handleChange = (e:any) => {
    setProduct({...product, [e.target.name]: e.target.value})
    setProducts([...products], newProduct)
}

const handleChangeColor = (e:any) => {
    setProduct({...product, [e.target.name]: e.target.value})
    setProducts([...products], newProduct)
    setColor(e.target.value) 
}

let newProduct = products.splice(product.id, 1, product)

const deleteProduct = (e:any) => {
    const result = products.filter((product:any) => product.id !== props.id)
    setProducts(products)
    console.log(e.target.className)
}

    return (
        <div className="product" key={props.id}>
                <div className="product_image">
                    <img src={props.image[color]} alt="image"/>
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
                <div style={{backgroundColor: color === "Leopard" ? "orange" : color }} className="color-ball"></div>
                <select name="colorName" onChange={e => handleChangeColor(e)}>
                    <option selected hidden>{props.color}</option>
                    {props.colors.map((color, index) => {
                        return(
                            <option key={index} value={color}>{color}</option>
                        )
                    })}
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_size">
            <select name="size" onChange={e => handleChange(e)}>
                <option selected hidden>{props.size}</option>
                {props.sizes.map((size, index) => {
                    return(
                        <option key={index} value={size}>{size}</option>
                    )
                })}
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_quantity">
            <select name="quantity" onChange={e => handleChange(e)}>
                    <option defaultValue={props.quantity} disabled hidden>{props.quantity}</option>
                    {props.quantities.map((quantity, index) => {
                        return(
                            <option key={index} value={quantity}>{quantity}</option>
                        )
                    })}
                </select>
                <i className="fas fa-angle-down"></i>
            </div>
            <div className="product_price">
                <p>${parseInt(props.price).toFixed(2)}</p>
            </div>
            <div id={`${props.id}`} onClick={(e) => deleteProduct(e)} className="product_exit">
            <i className="fa fa-times"></i>
            </div>
       </div>
    )
}

export default Product
