import React, {createContext, useState, useEffect} from 'react'
import {fetchUsers} from '../service/Service'

export const ProductContext = createContext({})

export const ProductContextProvider = (props:any) => {

    let [products, updateProducts] = useState([]);

    useEffect( () => {
        fetchUsers('https://private-1c29a1-products156.apiary-mock.com/products')
        .then((data:any) => {
           return data.products
        }).then((products:any) => {
            updateProducts(products)
        })
    }, [])

    const changeProducts = (productId: number, productData: any) => {
        const newProducts: any = products.map((product: any) => product.id === productId ? productData : product)
        updateProducts(newProducts);
    };
    
    const deleteProducts = (productId: number) => {
        const newProducts = products.filter((product: any) => product.id !== productId)
        updateProducts(newProducts);
    };

    const handleChange = (e:any, product:any) => {
        const newProduct = {...product, [e.target.name]: e.target.value};
        changeProducts(newProduct.id, newProduct);
    };

    const handleChangeColor = (e:any, product: any) => {
        const newColor = e.target.value;
        const newProduct = {...product, color: newColor,};
        changeProducts(newProduct.id, newProduct);
    }

    const removeProduct = (product: any) => {
        deleteProducts(product.id);
    }

    return (
        <ProductContext.Provider value={{products, updateProducts, removeProduct, changeProducts, deleteProducts, handleChange, handleChangeColor}}>
            {props.children}
        </ProductContext.Provider>
    )
}
