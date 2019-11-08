import React from 'react'
import './PaymentCredit.scss'
import {Form, Field} from 'react-final-form'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
  } from "./cardUtils";

interface IProps {
    setCardCredit: any;
    card: boolean;
    submitBtn: any;
    validate: any;
    setCard: any;
    cardCredit: string;
    cardValue: string;
}

const PaymentCredit:React.FC<IProps> = ({card, validate, submitBtn, setCard, setCardCredit, cardCredit , cardValue}) => {

    const cardValidate = (input:any) => {

        if(cardValue === "Visa"){
            let cardno =  /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
            return cardno.test(input) ? null : "Invalid input"
        }
        if(cardValue === "Master"){
            let cardno =  /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
            return cardno.test(input) ? null : "Invalid input"
        }
        if(cardValue === "American"){
            let cardno =  /^3[47][0-9]{13}$/
            return cardno.test(input) ? null : "Invalid input"
        }
    }

    return (
        <Form onSubmit={submitBtn}
            render={(props:any) => {
                return(
                    <form onSubmit={props.handleSubmit} className={card ? "payment__component__form" : "close"}>
                        <div className="payment__component__input border-bottom">
                        <Field 
                            name="radius"
                            type="select"
                            component="input"
                            validate={validate}
                        >
                            {({input, meta}) => {
                                setCard(input.value)
                                return(
                                <>
                                    <label className={input.value ? "payment__component__label" : "payment__component__label close"}>Cards in my wallet</label>
                                    <select placeholder="Country" className={input.value ? "payment__component__credit__select select" : "payment__component__credit__select select border"} {...input}>
                                        <option selected hidden value="Choise">Chose a card</option>
                                        <option value="Visa">Visa card</option>
                                        <option value="Master">Master card</option>
                                        <option value="American">American Express</option>
                                    </select>
                                    <i className="fas fa-angle-down select"></i>
                                    {meta.error && meta.touched ? <span className="payment__component__validation">{meta.error}</span> : null}
                                </>
                                )
                            }}
                        </Field>
                        </div>
                        <div className="payment__component__input">
                            <Field 
                                name="credit-name"
                                type="text"
                                component="input"
                                validate={validate}
                            >
                                {({input, meta}) => {
                                    return(
                                        <>
                                            <label className={input.value ? "payment__component__label" : "close"}>Card holder name</label>
                                            <input placeholder="Card holder name" className="payment__component__credit__name" {...input} />
                                            {meta.error && meta.touched ? <span className="payment__component__validation">{meta.error}</span> : null}
                                        </>
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="payment__component__input">
                            <Field 
                                name="credit-number"
                                type="text"
                                component="input"
                                validate = {cardValidate}
                                pattern="[\d| ]{16,22}"
                                format={formatCreditCardNumber}
                            >
                                {({input, meta}) => {
                                    console.log(cardCredit)
                                    return(
                                        <>
                                            <label className={input.value ? "payment__component__label" : "close"}>Card number</label>
                                            <input onChange ={ (e) => setCardCredit(e.target.value)} placeholder="Card number" className="payment__component__credit__number" {...input} />
                                            {meta.error && meta.touched ? <span className="payment__component__validation">{meta.error}</span> : null}
                                        </>
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="payment__component__display">
                        <Field 
                                name="credit-expirarion"
                                type="text"
                                component="input"
                                validate={validate}
                                pattern={"\d\d/\d\d"}
                                format={formatExpirationDate}
                            >
                                {({input, meta}) => {
                                    return(
                                        <div className="payment__component__date">
                                            <label className={input.value ? "payment__component__label" : "close"}>Expiration date</label>
                                            <input placeholder="MM / YY" className="payment__component__credit__expiration" {...input} />
                                            {meta.error && meta.touched ? <span className="payment__component__validation">{meta.error}</span> : null}
                                        </div>
                                    )
                                }}
                            </Field>
                            <Field 
                                name="credit-date"
                                type="text"
                                component="input"
                                validate={validate}
                                pattern={"\d{3,4}"}
                                format={formatCVC}
                            >
                                {({input, meta}) => {
                                    return(
                                        <div className="payment__component__date">
                                            <label className={input.value ? "payment__component__label" : "close"}>CVV</label>
                                            <input placeholder="CVV" className="payment__component__credit__date" {...input} />
                                            {meta.error && meta.touched ? <span className="payment__component__validation">{meta.error}</span> : null}
                                        </div>
                                    )
                                }}
                            </Field>
                        </div>
                        <div className="payment__component__shipping">
                        <div className="payment__component__shipping__sign"> <i className="fa fa-check"></i></div>
                        <p className="payment__component__shipping__text">Billing address same as shipping</p>
                        </div>
                        <button onSubmit={props.handleSubmit} className="payment__component__credit__submit" type="submit">Review and finish</button>
                    </form>
                )
            }}
        />
    )
}

export default PaymentCredit
