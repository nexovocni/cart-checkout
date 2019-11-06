import React from 'react'
import './ShippingData.scss'

interface IProps {
    firstName: string;
    firstNameAddress: string
    lastName: string;
    lastNameAddress: string
    firstAddress: string;
    lastAddress: string;
    postal: string;
    city: string;
    province: string;
    country: string;
    phone: string;
    phoneAddress: string
    component: boolean;
    home: boolean;
    store: boolean;
}

const ShippingData:React.FC<IProps> = ({firstName, lastName, firstAddress, lastAddress, postal, province, city, country, phone, component, home, store, firstNameAddress, lastNameAddress, phoneAddress}) => {
    return (
        <React.Fragment>
            <div className={!component && store ? "shipping__data" : "close"}>
                <p>{firstName} {lastName}</p>
                <p>{phone}</p> 
            </div>
            <div className={!component && home ? "shipping__data" : "close"}>
                <p>{firstNameAddress} {lastNameAddress}</p>
                <p>{firstAddress}, {lastAddress}</p>
                <p>{postal}, {city}, {province}, {country}</p>
                <p>{phoneAddress}</p> 
            </div>
        </React.Fragment>
    )
}

export default ShippingData
