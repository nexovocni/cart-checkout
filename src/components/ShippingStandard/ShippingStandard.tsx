import React from 'react'
import {Field} from 'react-final-form'
import './ShippingStandard.scss'

const ShippingStandard = () => {

    const standardShipping = 10
    const expressShipping = 15
    const nextDayShipping = 20

    return (
        <React.Fragment>
            <h3>Shipping method</h3>
            <div className = "shipping__component__radio">
                <div className="shipping__component__radio__input">
                <Field
                    type="radio"
                    name="standard"
                    value={standardShipping}
                    component="input"
                >
                {({input}) => {
                    return(
                        <label>
                        <input {...input} />
                        <span className="circle"></span>
                        Standard Shipping
                        <p>5 - 7 business days</p></label>
                    )
                }}  
                </Field>
                </div>
                <p>${standardShipping.toFixed(2)}</p>
            </div>
            <div className="checkbox__component__radio"> 
                <div className="shipping__component__radio__input"> 
                <Field
                    type="radio"
                    name="extra"
                    value={standardShipping}
                    component="input"
                >
                {({input}) => {
                    return(
                        <label>
                        <input {...input}/>
                        <span className="circle"></span>
                        Express Shipping
                        <p>2 - 3 business days</p></label>
                    )
                }}
                </Field>
                </div>
                <p>${expressShipping.toFixed(2)}</p>
            </div> 
            <div className="checkbox__component__radio"> 
                <div className="shipping__component__radio__input">
                <Field
                    type="radio"
                    name="nextday"
                    value={nextDayShipping}
                    component="input"
                >
                {({input}) => {
                    return( 
                        <label>
                        <input {...input}/>
                        <span className="circle"></span>
                        Next day delivery
                        <p>Orders before 12PM</p></label>
                    )
                }} 
                </Field>
                </div>
                <p>${nextDayShipping.toFixed(2)}</p>  
            </div> 
        </React.Fragment>
    )
}

export default ShippingStandard
