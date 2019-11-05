import React, {useState} from 'react'
import {Field} from 'react-final-form'
import './ShippingStandard.scss'

interface IProps {
    setCheckValue: any;
}

const ShippingStandard:React.FC<IProps> = ({setCheckValue}) => {

    const [isChecked, setChecked] = useState(true)

    const checkBtn = (input:any) => {
        setCheckValue(parseInt(input))
        setChecked(false)
    }

    const checkBtnStandard = (input:any) => {
        setCheckValue(parseInt(input))
        setChecked(true)
    }

    return (
        <React.Fragment>
            <h3 className="shipping__component__heading">Shipping method</h3>
            <div className = "shipping__component__radio">
                <div className="shipping__component__radio__input">
                <Field
                    type="radio"
                    name="ship"
                    value={"10"}
                    component="input"
                    checked
                >
                {({input}) => {
                    input.checked = isChecked
                    return(
                        <label>
                        <input onClick={() => checkBtnStandard(input.value)}   {...input} />
                        <span className="circle"></span>
                        Standard Shipping
                        <p>5 - 7 business days</p></label>
                    )
                }}  
                </Field>
                </div>
                <p>$10.00</p>
            </div>
            <div className="shipping__component__radio"> 
                <div className="shipping__component__radio__input"> 
                <Field
                    type="radio"
                    name="ship"
                    value={"15"}
                    component="input"
                >
                {({input}) => {
                    return(
                        <label>
                        <input onClick={() => checkBtn(parseInt(input.value))}  {...input}/>
                        <span className="circle"></span>
                        Express Shipping
                        <p>2 - 3 business days</p></label>
                    )
                }}
                </Field>
                </div>
                <p>$15.00</p>
            </div> 
            <div className="shipping__component__radio"> 
                <div className="shipping__component__radio__input">
                <Field
                    type="radio"
                    name="ship"
                    value={"20"}
                    component="input"
                >
                {({input}) => {
                    return( 
                        <label>
                        <input onClick={() => checkBtn(parseInt(input.value))} {...input}/>
                        <span className="circle"></span>
                        Next day delivery
                        <p>Orders before 12PM</p></label>
                    )
                }} 
                </Field>
                </div>
                <p>$20.00</p>  
            </div> 
        </React.Fragment>
    )
}

export default ShippingStandard