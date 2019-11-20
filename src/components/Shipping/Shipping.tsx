import React, {useState} from 'react'
import './Shipping.scss'
import ShippingHome from "../../components/ShippingHome/ShippingHome"
import ShippingStore from "../../components/ShippingStore/ShippingStore"
import ShippingData from "../../components/ShippingData/ShippingData"

interface IProps {
    componentShipping: boolean;
    openComponentShipping: any;
    setTax: any;
    setCheckValue: any;
    checkValue: number;
    shipValue: number;
    openComponentPayment: any;
    openEditBtn: any;
    editBtn: any;
}

const Shipping:React.FC<IProps> = ({componentShipping, openComponentShipping, setTax, setCheckValue, checkValue, shipValue, openComponentPayment, openEditBtn, editBtn}) => {

    const submitBtn = () => {
        setTax(true)
        openComponentShipping(!componentShipping)
        openComponentPayment(true)
        openEditBtn({...editBtn, shipping: true})
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
    const [open, setOpen] = useState({
        home: false,
        store: false
    })
    

    const validate = (value:any) => (value ? null : "Invalid input")

    const openStore = () => {
        setOpen({
            home: false,
            store: true
        })
    }

    const openHome = () => {
        setOpen({
            home: true,
            store: false
        })
    }

    return (
        <div className="shipping">
            <h2 style={{color: !componentShipping ? "#999" : "#000"}} className="shipping__number">2</h2>
            <span style={{backgroundColor: !componentShipping ? "#999" : "#000"}} className="dash-shipping"></span>
            <div className="shipping__component__up">
                <div className="shipping__component">
                    <h2 style={{color: !componentShipping ? "#999" : "#000"}} className="shipping__heading">Shipping to</h2>
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
                        component={componentShipping}
                        home={open.home}
                        store={open.store}
                    />
                    <button style={{opacity: !componentShipping ? 1 : 0}} onClick={() => {openComponentShipping(!componentShipping)}} className={editBtn.shipping ? "shipping__heading__button" : "editBtn"}>Edit</button>
                    <div className={componentShipping ? "shipping__component__buttons" : "close" }>
                        <button onClick={openStore} className={open.store ? "shipping__component__button border-black" : "shipping__component__button"}>Store - Free</button>
                        <button onClick={openHome} className={open.home ? "shipping__component__button border-black" : "shipping__component__button"}>Adress - $10.00</button>
                    </div>
                </div>
                <div className={open.home ? "shipping__component__home" : "close"}>  
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
                        component={componentShipping}
                /> 
                </div>
                <div className={open.store ? "shipping__component__store" : "close-store"}>
                    <ShippingStore 
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setPhone={setPhone}
                        validate={validate}
                        submitBtn={submitBtn}
                        component={componentShipping}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shipping
