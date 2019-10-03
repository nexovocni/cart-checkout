import React,{useState, useEffect, useContext} from 'react'
import Product from '../../components/product/product'
import InfoCart from '../../components/infoCart/infoCart'
import {ProductContext} from '../../hooks/ProductContext'
import './products.scss'

const Products = () => {

    const [products, setProducts] = useContext(ProductContext)

    useEffect( () => {
        (async () => {
        const response = await fetch("https://private-1c29a1-products156.apiary-mock.com/products")
        const data = await response.json()
        const products = data.products
        setProducts(products)
    })()}, [])

    return (
        <main className="main">
            <InfoCart />
            <div className="products">
                {products.map((product:any, index:number) => {
                    return(
                        <Product {...product} key={index}/>
                    )
                })}
            </div>
        </main>
    )
}

export default Products
