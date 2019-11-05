import React, {useState} from 'react'
import './Shipping.scss'
import ShippingHome from "../../components/ShippingHome/ShippingHome"
import ShippingStore from "../../components/ShippingStore/ShippingStore"
import ShippingData from "../../components/ShippingData/ShippingData"

interface IProps {
    component: boolean;
    openComponent: any;
    setTax: any;
    setCheckValue: any;
    checkValue: number;
    shipValue: number;
}

const Shipping:React.FC<IProps> = ({component, openComponent, setTax, setCheckValue, checkValue, shipValue}) => {

    const submitBtn = () => {
        setTax(true)
        openComponent(!component)
    }

    const [firstName, setFirstName] = useState("")
    const [firstNameAdress, setFirstNameAdress] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameAdress, setLastNameAdress] = useState("")
    const [firstAdress, setFirstAdress] = useState("")
    const [lastAdress, setLastAdress] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [postal, setPostal] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneAdress, setPhoneAdress] = useState("")
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
            <h2 className="shipping__number">2</h2>
            <div className="shipping__component__up">
                <div className="shipping__component">
                    <h2 className="shipping__heading">Shipping to</h2>
                    <ShippingData 
                        firstName={firstName}
                        firstNameAdress={firstNameAdress}
                        lastName={lastName}
                        lastNameAdress={lastNameAdress}
                        firstAdress={firstAdress}
                        lastAdress={lastAdress}
                        postal={postal}
                        province={province}
                        country={country}
                        city={city}
                        phone={phone}
                        phoneAdress={phoneAdress}
                        component={component}
                        home={open.home}
                        store={open.store}
                    />
                    <button onClick={() => {openComponent(!component)}} className={!component ? "shipping__heading__button" : "close"}>Edit</button>
                    <div className={component ? "shipping__component__buttons" : "shipping__component__buttons close" }>
                        <button onClick={openStore} className={open.store ? "shipping__component__button border-black" : "shipping__component__button"}>Store - Free</button>
                        <button onClick={openHome} className={open.home ? "shipping__component__button border-black" : "shipping__component__button"}>Adress - $10.00</button>
                    </div>
                </div>
                <div className={open.home ? "shipping__component__home" : "shipping__component__home close"}>  
                <ShippingHome 
                        setFirstName={setFirstNameAdress}
                        setLastName={setLastNameAdress}
                        setFirstAdress={setFirstAdress}
                        setLastAdress={setLastAdress}
                        setCity={setCity}
                        setPostal={setPostal}
                        setProvince={setProvince}
                        setPhone={setPhoneAdress}
                        setCountry={setCountry}
                        submitBtn={submitBtn}
                        validate={validate}
                        setCheckValue={setCheckValue}
                        checkValue={checkValue}
                        shipValue={shipValue}
                        component={component}
                /> 
                </div>
                <div className={open.store ? "shipping__component__store" : "close-store"}>
                    <ShippingStore 
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                        setPhone={setPhone}
                        validate={validate}
                        submitBtn={submitBtn}
                        component={component}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shipping
