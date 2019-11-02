import React from 'react'
import {Form} from 'react-final-form'
import ShippingName from '../ShippingName/ShippingName'
import ShippingAdress from '../../components/ShippingAdress/ShippingAdress'
import ShippingCity from '../../components/ShippingCity/ShippingCity'
import ShippingPhone from '../../components/ShippingPhone/ShippingPhone'
import ShippingStandard from '../../components/ShippingStandard/ShippingStandard'

interface IProps {
    setFirstName: any;
    setLastName: any;
    setFirstAdress: any;
    setLastAdress: any;
    setCity: any;
    setProvince: any;
    setPostal: any;
    setCountry: any;
    setPhone: any;
    validate: any;
    submitBtn: any;
    component: boolean;
}

const ShippingHome:React.FC<IProps> = ({setFirstName, setLastName, setFirstAdress, setLastAdress, setCity, setCountry, setPhone, setPostal, setProvince, validate, submitBtn, component}) => {
    return (
        <Form onSubmit={submitBtn}
            render={(props:any) => {
                return(
                    <form onSubmit={props.handleSubmit} className={component ? "shipping__component__form" : "shipping__component__form close"}>
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
                        <button onSubmit={props.handleSubmit} className="shipping__component__submit" type="submit">Continue to payment method</button>
                    </form>
                )
            }}
        />
    )
}

export default ShippingHome
