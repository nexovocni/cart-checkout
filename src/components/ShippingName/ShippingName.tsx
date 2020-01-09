import React from 'react'
import {Field} from 'react-final-form'
import './ShippingName.scss'

interface IProps {
    setFirstName:any;
    setLastName: any;
    validate: any;
}

const ShippingName:React.FC<IProps> = ({setFirstName, setLastName, validate}) => {
    return (
        <div className="shipping__component__name">
            <div className="shipping__component__name__first">
                <Field 
                    name="firstName"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setFirstName(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label__close"}>First name</label>
                                <input placeholder="First name" className="shipping__component__name__input" {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
            </div>
            <div className="shipping__component__name__last">
                <Field 
                    name="lastName"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setLastName(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label__close"}>Last name</label>
                                <input placeholder="Last name" className="shipping__component__name__input" {...input}/>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
            </div>
        </div>
    )
}

export default ShippingName
