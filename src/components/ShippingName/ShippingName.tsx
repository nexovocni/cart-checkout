import React from 'react'
import {Field} from 'react-final-form'

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
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>First name</label>
                                <input placeholder="First name" className={input.value ? "shipping__component____name__first__input" : "shipping__component____name__first__input border"} {...input} autoFocus/>
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
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Last name</label>
                                <input placeholder="Last name" className={input.value ? "shipping__component____name__last__input" : "shipping__component____name__last__input border"} {...input}/>
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
