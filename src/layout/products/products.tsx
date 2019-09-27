import React,{useState, useEffect} from 'react'
import Product from '../../components/product/product'

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
        <div className="products">
            {products.map(product => {
                return(
                    <Product {...product}/>
                )
            })}
        </div>
    )
}

export default Products
