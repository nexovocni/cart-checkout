import React, {useEffect, useContext} from 'react'
import Page from './Page'
import {ProductsContext} from '../../hooks/ProductsContext'
import './CartPage.scss'

const CartPage = () => {

    const [products, setProducts] = useContext(ProductsContext)

    useEffect( () => {
        (async () => {
        const response = await fetch("https://private-1c29a1-products156.apiary-mock.com/products")
        const data = await response.json()
        const prod = data.products
        setProducts(prod)
    })()}, [])

    return (
       <Page products={products}/>
    )
}

export default CartPage
