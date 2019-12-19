import React, {createContext, useReducer, useEffect, useState} from 'react'
import {ValueReducer} from '../reducers/ValueReducer'
import {fetchUsers} from '../service/Service'

export const ValueContext = createContext({})

export const ValueContextProvider = (props:any) => {

    let [products, updateProducts] = useState([]);

    let itemsValue = 0

    let [values, setValues] = useState({})

    useEffect( () => {
        fetchUsers('https://private-1c29a1-products156.apiary-mock.com/products')
        .then((data:any) => {
           return data.products
        }).then((products:any) => {
            updateProducts(products)
        })

        {products.map( (product: any) => {
            itemsValue += product.quantity * product.price
            console.log(itemsValue)
        })}

     setValues({
        itemsValue,
        checkValue: 10,
        value:function (this:any){ return itemsValue + this.checkValue},
        shipValue: 550 - itemsValue,
        gstTax:  3.01,
        pstTax:  1.99
    } )
    }, [])

    const [cartValues, dispatch] = useReducer(ValueReducer, values)

    return (
        <ValueContext.Provider value={{values}}>
            {props.children}
        </ValueContext.Provider>
    )
}