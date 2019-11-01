import React from 'react'
import './ShippingAdress.scss'
import{Field} from 'react-final-form'

interface IProps {
    setFirstAdress:any;
    setLastAdress: any;
    validate: any;
}

const ShippingAdress:React.FC<IProps> = ({setFirstAdress, setLastAdress, validate}) => {
    return (
        <div className="shipping__component__adress">
            <div className="shipping__component__name__adress">
                <Field 
                    name="firstAdress"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setFirstAdress(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Adress</label>
                                <input placeholder="Adress" className={input.value ? "shipping__component__adress__first__input" : "shipping__component__adress__first__input border"} {...input} />
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
            </div>
            <div className="shipping__component__adress__last">
                <Field 
                    name="lastAdress"
                    type="text"
                    component="input"
                    validate={validate}
                >
                    {({input, meta}) => {
                        setLastAdress(input.value)
                        return(
                            <>
                                <label className={input.value ? "shipping__component__label" : "shipping__component__label open"}>Adress</label>
                                <input placeholder="Appartment, suite, etc(optional)" className={input.value ? "shipping__component__adress__last__input" : "shipping__component__adress__last__input border"} {...input}/>
                                {meta.error && meta.touched ? <span className="shipping__component__validation">{meta.error}</span> : null}
                            </>
                        )
                    }}
                </Field>
            </div>
        </div>
    )
}

export default ShippingAdress
