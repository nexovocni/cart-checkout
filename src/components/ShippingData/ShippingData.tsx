import React from 'react'

interface IProps {
    firstName: string;
    lastName: string;
    firstAdress: string;
    lastAdress: string;
    postal: string;
    city: string;
    province: string;
    country: string;
    phone: string;
    component: boolean;
    home: boolean;
    store: boolean;
}

const ShippingData:React.FC<IProps> = ({firstName, lastName, firstAdress, lastAdress, postal, province, city, country, phone, component, home, store}) => {
    return (
        <React.Fragment>
            <div className={!component && home ? "shipping__shipping" : "close"}>
                <p>{firstName} {lastName}</p>
                <p>{firstAdress}, {lastAdress}</p>
                <p>{postal}, {city}, {province}, {country}</p>
                <p>{phone}</p> 
            </div>
            <div className={!component && store ? "shipping__shipping" : "close"}>
                <p>{firstName} {lastName}</p>
                <p>{phone}</p> 
            </div>
        </React.Fragment>
    )
}

export default ShippingData
