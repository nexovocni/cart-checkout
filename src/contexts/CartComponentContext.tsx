import React, {createContext, useReducer} from 'react'
import {FormComponentReducer} from '../reducers/FormComponentReducer'

export const CartComponentContext = createContext({})

export const CartContextProvider = (props:any) => {

    const components =  {
        switchPage: true,
        cartState: false,
        tax: false,
        disabledCode: false
    }

    const [cartComponents, dispatch] = useReducer(FormComponentReducer, components)

    return (
        <CartComponentContext.Provider value={{cartComponents, dispatch}}>
            {props.children}
        </CartComponentContext.Provider>
    )
}