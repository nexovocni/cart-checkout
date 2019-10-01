import React,{useState, useEffect} from 'react'
import Product from '../../components/product/product'
import InfoCart from '../../components/infoCart/infoCart'
import './products.scss'

const Products = () => {

    const [products, setProducts] = useState([])

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
                {products.map((product, index) => {
                    return(
                        <Product {...product} key={index}/>
                    )
                })}
            </div>
        </main>
    )
}

export default Products
