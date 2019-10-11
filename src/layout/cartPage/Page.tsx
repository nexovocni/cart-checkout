import React, { useState, useEffect } from 'react'
import Header from './header/header'
import Products from './products/products'
import Summary from './summary/summary'

const Page = (props:any) => {
    const [products, updateProducts] = useState([]);

    useEffect( () => {
        (async () => {
        const response = await fetch("https://private-1c29a1-products156.apiary-mock.com/products")
        const data = await response.json()
        updateProducts(data.products)
    })()}, [])

    return (
        <div>
             <div className="cart-page">
                <div className="vertical">
                    <Header />
                    <Products
                        products={ products } 
                        updateProducts={ updateProducts }
                    />
                </div>
                <Summary products={ products }/>
            </div>
        </div>
    )
}

export default Page
