import React, {createContext, useReducer} from 'react'
import {FormComponentReducer} from '../reducers/ComponentReducer'

export const FormComponentContext = createContext({})

export const ComponentContextProvider = (props:any) => {

    const components =  {
        componentEmail: true,
        componentPayment: false,
        componentShipping: false,
        componentReview: false,
        componentPassword: false,
        editEmail: false,
        editShipping: false,
        editPayment: false,
        editReview: false,
        homeShipping: false,
        storeShipping: false,
        creditPayment: false,
        giftPayment: false,
        stateReview: false
    }

    const [formComponents, dispatch] = useReducer(FormComponentReducer, components)

    return (
        <FormComponentContext.Provider value={{formComponents, dispatch}}>
            {props.children}
        </FormComponentContext.Provider>
    )
}
