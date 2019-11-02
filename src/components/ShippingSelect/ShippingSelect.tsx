import React from 'react'
import {Field} from 'react-final-form'

const ShippingSelect = () => {
    return (
        <React.Fragment>
            <h3>Select a store</h3>
            <div className = "shipping__component__select">
                <div className = "shipping__component__select__up">
                    <Field 
                        name="postal"
                        type="text"
                        component="input"
                    >
                        {({input, meta}) => {
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
                        name="radius"
                        type="select"
                        component="input"
                    >
                    {({input, meta}) => {
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Radius</label>
                                <select placeholder="Country" className={input.value ? "shipping__component__city__country__input" : "shipping__component__city__country__input border"} {...input}>
                                    <option selected value="50">50 Km</option>
                                    <option value="100">100 Km</option>
                                    <option value="200">200 Km</option>
                                </select>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
                </div>
                <div className = "shipping__component__select__down">
                    <Field 
                        name="province"
                        type="text"
                        component="input"
                    >
                        {({input, meta}) => {
                            return(
                                <>
                                    <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Province</label>
                                    <input placeholder="Province" className={input.value ? "shipping__component__city__postal__input" : "shipping__component__city__postal__input border"} {...input}/>
                                    {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                                </>
                            )
                        }}
                    </Field>
                    <Field 
                        name="city-select"
                        type="select"
                        component="input"
                    >
                    {({input, meta}) => {
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>City</label>
                                <select placeholder="City" className={input.value ? "shipping__component__city__city__input" : "shipping__component__city__city__input border"} {...input}>
                                    <option selected hidden value="">City</option>
                                    <option value="New York">New York</option>
                                    <option value="Boston">Boston</option>
                                    <option value="Montreal">Montreal</option>
                                </select>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                    </Field>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShippingSelect
