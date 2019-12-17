import React, {createContext, useState} from 'react'

const ComponentContext = createContext({})

export const ComponentContextProvider = (props:any) => {

    const [editBtn, openEditBtn]= useState({
        email: false,
        shipping: false,
        payment: false,
        review: false
    })

    return (
        <ComponentContext.Provider value={{editBtn, openEditBtn}}>
            {props.children}
        </ComponentContext.Provider>
    )
}
