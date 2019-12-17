import React, {createContext, useReducer} from 'react'
import {FormComponentReducer} from '../reducers/FormComponentReducer'

export const FormComponentContext = createContext()

export const ComponentContextProvider = (props) => {

    const components =  [
        {componentEmail: true},
        {componentPayment: false},
        {componentShipping: false},
        {componentReview: false}
    ]

    const [formComponents, dispatch] = useReducer(FormComponentReducer, components)

    return (
        <FormComponentContext.Provider value={{formComponents, dispatch}}>
            {props.children}
        </FormComponentContext.Provider>
    )
}
