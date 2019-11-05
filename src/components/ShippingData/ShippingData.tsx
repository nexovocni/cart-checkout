import React from 'react'
import './ShippingData.scss'

interface IProps {
    firstName: string;
    firstNameAdress: string
    lastName: string;
    lastNameAdress: string
    firstAdress: string;
    lastAdress: string;
    postal: string;
    city: string;
    province: string;
    country: string;
    phone: string;
    phoneAdress: string
    component: boolean;
    home: boolean;
    store: boolean;
}

const ShippingData:React.FC<IProps> = ({firstName, lastName, firstAdress, lastAdress, postal, province, city, country, phone, component, home, store, firstNameAdress, lastNameAdress, phoneAdress}) => {
    return (
        <React.Fragment>
            <div className={!component && store ? "shipping__data" : "close"}>
                <p>{firstName} {lastName}</p>
                <p>{phone}</p> 
            </div>
            <div className={!component && home ? "shipping__data" : "close"}>
                <p>{firstNameAdress} {lastNameAdress}</p>
                <p>{firstAdress}, {lastAdress}</p>
                <p>{postal}, {city}, {province}, {country}</p>
                <p>{phoneAdress}</p> 
            </div>
        </React.Fragment>
    )
}

export default ShippingData
