import React from 'react'

interface productProps {
    name: string,
    size: string,
    price: string,
    color: string, 
    image: string,
    quantity: number,
    id: number
}

const Product = (props: productProps) => {
    return (
        <div className="product">
            <div className="product_image">
                <img src={props.image} alt="image"/>
            </div>
            <div className="product_name">
                <img src={props.name} alt="image"/>
            </div>
        </div>
    )
}

export default Product
