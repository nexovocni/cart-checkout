import React from 'react'
import {Form} from 'react-final-form'
import ShippingName from '../ShippingName/ShippingName'
import ShippingAdress from '../../components/ShippingAdress/ShippingAdress'
import ShippingCity from '../../components/ShippingCity/ShippingCity'
import ShippingPhone from '../../components/ShippingPhone/ShippingPhone'
import ShippingStandard from '../../components/ShippingStandard/ShippingStandard'
import './ShippingHome.scss'

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
    setCheckValue: any;
    checkValue: number;
    shipValue: number;
    component: any
}

const ShippingHome:React.FC<IProps> = ({setFirstName, setLastName, setFirstAdress, setLastAdress, setCity, setCountry, setPhone, setPostal, setProvince, validate, submitBtn, setCheckValue, checkValue, shipValue, component}) => {
    return (
        <Form onSubmit={submitBtn}
            render={(props:any) => {
                return(
                    <form onSubmit={props.handleSubmit} className={component ? "shipping__component__form" : "close"}>
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
                        {checkValue === 0 || shipValue < 0 ?
                        <div className="shipping__standard">
                        <div><h3>Standard shipping</h3><p>5 - 7 business days</p></div>
                        <div>$10.00</div>
                        </div>:
                        <ShippingStandard 
                            setCheckValue={setCheckValue}
                        />
                        }
                        
                        <button onSubmit={props.handleSubmit} className="shipping__component__submit" type="submit">Continue to payment method</button>
                    </form>
                )
            }}
        />
    )
}

export default ShippingHome
