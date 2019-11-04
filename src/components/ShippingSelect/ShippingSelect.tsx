import React from 'react'
import {Field} from 'react-final-form'
import './ShippingSelect.scss'

interface IProps {
    validate: any;
}

const ShippingSelect:React.FC<IProps> = ({validate}) => {
    return (
        <React.Fragment>
            <h3 className = "shipping__component__heading">Select a store</h3>
            <div className = "shipping__component__select">
                <div className = "shipping__component__select__up">
                    <Field 
                        name="postal"
                        type="text"
                        component="input"
                        validate={validate}
                    >
                        {({input, meta}) => {
                            return(
                                <div className="shipping__component__input">
                                    <label className={input.value ? "shipping__component__label" : "shipping__component__label close"}>Postal Code</label>
                                    <input placeholder="Postal Code" className={input.value ? "shipping__component__postal" : "shipping__component__postal border"} {...input}/>
                                    {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                                </div>
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
                                <div className="shipping__component__input select">
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label close"}>Radius</label>
                                <select placeholder="Country" className={input.value ? "shipping__component__country" : "shipping__component__country border"} {...input}>
                                    <option selected value="50">50 Km</option>
                                    <option value="100">100 Km</option>
                                    <option value="200">200 Km</option>
                                </select>
                                <i className="fas fa-angle-down select"></i>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                                </div>
                            )
                        }}
                    </Field>
                </div>
                <div className = "shipping__component__select__down">
                    <Field 
                        name="province"
                        type="text"
                        component="input"
                        validate={validate}
                    >
                        {({input, meta}) => {
                            return(
                                <div className="shipping__component__input">
                                    <label className={input.value ? "shipping__component__label" : "shipping__component__label close"}>Province</label>
                                    <input placeholder="Province" className={input.value ? "shipping__component__province" : "shipping__component__province border"} {...input}/>
                                    {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                                </div>
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
                            <div className="shipping__component__input select">
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label close"}>City</label>
                                <select placeholder="City" className={input.value ? "shipping__component__city-select" : "shipping__component__city-select border"} {...input}>
                                    <option selected hidden value="">City</option>
                                    <option value="New York">New York</option>
                                    <option value="Boston">Boston</option>
                                    <option value="Montreal">Montreal</option>
                                </select>
                                <i className="fas fa-angle-down select"></i>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </div>
                        )
                    }}
                    </Field>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShippingSelect
