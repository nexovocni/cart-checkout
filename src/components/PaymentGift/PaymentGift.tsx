import React from 'react'
import {Form, Field} from 'react-final-form'
import './PaymentGift.scss'

interface IProps {
    setCardGift: any;
    component: any;
    submitBtn: any;
    validate: any
}

const PaymentGift:React.FC<IProps> = ({setCardGift, component, validate, submitBtn}) => {
    return (
        <Form onSubmit={submitBtn}
            render={(props:any) => {
                return(
                    <form onSubmit={props.handleSubmit} className={!component ? "payment__component__form__gift" : "close"}>
                            <Field 
                                name="gift-number"
                                type="text"
                                component="input"
                                validate={validate}
                            >
                                {({input, meta}) => {
                                    setCardGift(input.value)
                                    return(
                                        <div className="payment__component__gift__input">
                                            <label className={input.value ? "payment__component__gift__label" : "close"}>Gift card number</label>
                                            <input placeholder="Gift card number" className="payment__component__gift__number" {...input} />
                                            {meta.error && meta.touched ? <span className="payment__component__gift__validation">{meta.error}</span> : <span className="payment__component__gift__text">Keep card for 30 days after purchase</span>}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field 
                                name="pin-number"
                                type="text"
                                component="input"
                                validate={validate}
                            >
                                {({input, meta}) => {
                                    return(
                                        <div className="payment__component__gift__input">
                                            <label className={input.value ? "payment__component__gift__label" : "close"}>Pin</label>
                                            <input placeholder="Pin" className="payment__component__gift__pin" {...input} />
                                            {meta.error && meta.touched ? <span className="payment__component__gift__validation">{meta.error}</span> : null}
                                        </div>
                                    )
                                }}
                            </Field>
                        <button onSubmit={props.handleSubmit} className="payment__component__gift__submit" type="submit">Apply</button>
                    </form>
                )
            }}
        />
    )
}

export default PaymentGift
