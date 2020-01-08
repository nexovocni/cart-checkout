import React, {createContext, useState, useEffect} from 'react'
import {fetchUsers} from '../service/Service'

export const ProductContext = createContext({})

export const ProductContextProvider = (props:any) => {

    let itemsValue = 0

    const [checkValue, setCheckValue] = useState(10)

    let [products, updateProducts] = useState([]);

    useEffect( () => {
        fetchUsers('https://private-1c29a1-products156.apiary-mock.com/products')
        .then((data:any) => {
           return data.products
        }).then((products:any) => {
            updateProducts(products)
        })
    }, [])

    const changeProducts = (e:any, product:any ) => {
        const newProduct = {...product, [e.target.name]: e.target.value}
        const newProducts: any = products.map((product: any) => product.id === newProduct.id ? newProduct: product)
        updateProducts(newProducts);
    };

    const deleteProduct = (productId: number) => {
        const newProducts = products.filter((product: any) => product.id !== productId)
        updateProducts(newProducts);
    };

    {products.map( (product: any) => {
        itemsValue += product.quantity * product.price
    })}

    const value = itemsValue + checkValue
 
    const shipValue = (550 - itemsValue)

    let values = {
        itemsValue,
        shipValue,
        checkValue,
        value,
        taxValue: {gst:  3.01, pst:  1.99}
    }

    return (
        <ProductContext.Provider value={{products, values, setCheckValue, changeProducts, deleteProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}
