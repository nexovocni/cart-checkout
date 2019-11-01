import React from 'react'
import {Field} from 'react-final-form'

interface IProps {
    setCity: any;
    setProvince: any;
    setPostal: any;
    setCountry: any;
    validate: any
}

const ShippingCity:React.FC<IProps> = ({setCity, setProvince, setCountry, setPostal, validate}) => {
    return (
        <div className="shipping__component__city">
            <div className="shipping__component__city__city">
                <Field 
                    name="city"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setCity(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>City</label>
                                <input placeholder="City" className={input.value ? "shipping__component__city__city__input" : "shipping__component__city__input border"} {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
                <Field 
                    name="province"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setProvince(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Province</label>
                                <input placeholder="Province" className={input.value ? "shipping__component__city__province__input" : "shipping__component__province__input border"} {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
            </div>
            <div className="shipping__component__city__city">
                <Field 
                    name="postal"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setPostal(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Postal Code</label>
                                <input placeholder="Postal Code" className={input.value ? "shipping__component__city__postal__input" : "shipping__component__city__postal__input border"} {...input}/>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
                <Field 
                    name="country"
                    type="select"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setCountry(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Country</label>
                                <select placeholder="Country" className={input.value ? "shipping__component__city__country__input" : "shipping__component__city__country__input border"} {...input}>
                                    <option selected hidden>Canada</option>
                                    <option value="Canada">Canada</option>
                                    <option value="America">America</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
            </div>
        </div>
    )
}

export default ShippingCity
