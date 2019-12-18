import React, {useState, useContext } from 'react'
import './Shipping.scss'
import ShippingHome from "../../components/ShippingHome/ShippingHome"
import ShippingStore from "../../components/ShippingStore/ShippingStore"
import ShippingData from "../../components/ShippingData/ShippingData"
import {FormComponentContext} from '../../contexts/FormComponentContext'

interface IProps {
    setTax: any;
    setCheckValue: any;
    checkValue: number;
    shipValue: number;
}

const Shipping:React.FC<IProps> = ({setTax, setCheckValue, checkValue, shipValue}) => {

    const formContext:any = useContext(FormComponentContext)
    const {formComponents, dispatch} = formContext
    const {componentShipping, editShipping, storeShipping, homeShipping} = formComponents

    const submitBtn = () => {
        setTax(true)
        dispatch({type: "COMPONENT", payload: {componentShipping: !componentShipping}})
        dispatch({type: "COMPONENT", payload: {componentPayment: true}})
        dispatch({type: "COMPONENT", payload: {editShipping: true}})
    }

    const [firstName, setFirstName] = useState("")
    const [firstNameAddress, setFirstNameAddress] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameAddress, setLastNameAddress] = useState("")
    const [firstAddress, setFirstAddress] = useState("")
    const [lastAddress, setLastAddress] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [postal, setPostal] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneAddress, setPhoneAddress] = useState("")

    const validate = (value:any) => (value ? null : "Invalid input")

    return (
        <div className="shipping">
            <div className="shipping__component__head">
                <h2 style={{color: !componentShipping ? "#999" : "#000"}} className="shipping__number">2</h2>
                <span style={{backgroundColor: !componentShipping ? "#999" : "#000"}} className="dash-shipping"></span>
                <h2 style={{color: !componentShipping ? "#999" : "#000"}} className="shipping__heading">Shipping to</h2>
                <button style={{opacity: !componentShipping ? 1 : 0}} onClick={() => {dispatch({type: "COMPONENT", payload: {componentShipping: !componentShipping}})}} className={editShipping ? "shipping__heading__button" : "editBtn"}>Edit</button>
            </div>
            <div className="shipping__component__up">
                    <ShippingData 
                        firstName={firstName}
                        firstNameAddress={firstNameAddress}
                        lastName={lastName}
                        lastNameAddress={lastNameAddress}
                        firstAddress={firstAddress}
                        lastAddress={lastAddress}
                        postal={postal}
                        province={province}
                        country={country}
                        city={city}
                        phone={phone}
                        phoneAddress={phoneAddress}
                    />
                    <div className={componentShipping ? "shipping__component__buttons" : "close" }>
                        <button onClick={() => dispatch({type: "COMPONENT", payload: {storeShipping: true, homeShipping: false}})} className={storeShipping ? "shipping__component__button border-black" : "shipping__component__button"}>Store - Free</button>
                        <button onClick={() => dispatch({type: "COMPONENT", payload: {storeShipping: false, homeShipping: true}})} className={homeShipping ? "shipping__component__button border-black" : "shipping__component__button"}>Adress - $10.00</button>
                    </div>        
                <div className={homeShipping && componentShipping ? "shipping__component__home" : "close"}>  
                <ShippingHome 
                        setFirstName={setFirstNameAddress}
                        setLastName={setLastNameAddress}
                        setFirstAddress={setFirstAddress}
                        setLastAddress={setLastAddress}
                        setCity={setCity}
                        setPostal={setPostal}
                        setProvince={setProvince}
                        setPhone={setPhoneAddress}
                        setCountry={setCountry}
                        submitBtn={submitBtn}
                        validate={validate}
                        setCheckValue={setCheckValue}
                        checkValue={checkValue}
                        shipValue={shipValue}
                /> 
                </div>
                <div className={storeShipping && componentShipping ? "shipping__component__store" : "close-store"}>
                    <ShippingStore 
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setPhone={setPhone}
                        validate={validate}
                        submitBtn={submitBtn}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shipping
