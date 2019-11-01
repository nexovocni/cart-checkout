import React, {useState} from 'react'
import './Shipping.scss'
import {Form} from 'react-final-form'
import ShippingName from '../ShippingName/ShippingName'
import ShippingAdress from '../../components/ShippingAdress/ShippingAdress'
import ShippingCity from '../../components/ShippingCity/ShippingCity'
import ShippingPhone from '../../components/ShippingPhone/ShippingPhone'
import ShippingStandard from '../../components/ShippingStandard/ShippingStandard'

interface IProps {
    component: boolean;
    openComponent: any;
    setTax: any
}

const Shipping:React.FC<IProps> = ({component, openComponent, setTax}) => {

    const submitBtn = () => {
        setTax(true)
        openComponent(!component)
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [firstAdress, setFirstAdress] = useState("")
    const [lastAdress, setLastAdress] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [postal, setPostal] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")

    const validate = (value:any) => (value ? null : "Invalid input")

    return (
        <Form onSubmit={submitBtn}
            render={(props:any) => {
                return(
                    <div className="shipping">
                        <h2 className="shipping__number">2</h2>
                        <div className="shipping__component">
                            <h2 className="shipping__heading">Shipping to</h2>
                            <p className={!component ? "shipping__shipping" : "shipping__shipping close"}>{firstName} {lastName}</p>
                            <p className={!component ? "shipping__shipping" : "shipping__shipping close"}>{firstAdress}, {lastAdress}</p>
                            <p className={!component ? "shipping__shipping" : "shipping__shipping close"}>{postal}, {city}, {province}, {country}</p>
                            <p className={!component ? "shipping__shipping" : "shipping__shipping close"}>{phone}</p>
                            <button onClick={() => {openComponent(!component)}} className={!component ? "shipping__heading__button" : "shipping__heading__button close"}>Edit</button>
                            <div className="shipping__component__buttons">
                                <button className="shipping__component__button">Store - Free</button>
                                <button className="shipping__component__button">Adress - $10.00</button>
                            </div>
                            <form onSubmit={props.handleSubmit} className={component ? "shipping__component__form" : "shipping__component__form close"}>
                                <div className="shipping__component__home">
                                    <ShippingName 
                                        setFirstName={setFirstName}
                                        setLastName={setLastName}
                                        validate={validate}
                                    />
                                    <ShippingAdress 
                                        setFirstAdress={setFirstAdress}
                                        setLastAdress={setLastAdress}
                                        validate={validate}
                                    />
                                    <ShippingCity 
                                        setCity={setCity}
                                        setProvince={setProvince}
                                        setPostal={setPostal}
                                        setCountry={setCountry}
                                        validate={validate}
                                    />
                                    <ShippingPhone 
                                        setPhone={setPhone}
                                        validate={validate}
                                    />
                                    <ShippingStandard />
                                </div>
                                <div className="shipping__component__store">
                                <ShippingName 
                                        setFirstName={setFirstName}
                                        setLastName={setLastName}
                                        validate={validate}
                                    />
                                <ShippingPhone 
                                    setPhone={setPhone}
                                    validate={validate}
                                />
                                <ShippingStandard />
                                </div>
                                <button onSubmit={props.handleSubmit} className="shipping__component__submit" type="submit">Continue to payment method</button>
                            </form>
                        </div>
                    </div>
                )
            }}
        />
    )
}

export default Shipping
