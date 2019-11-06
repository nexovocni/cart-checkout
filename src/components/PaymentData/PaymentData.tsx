import React from 'react'
import './PaymentData.scss'

interface IProps {
    cardGift: string;
    cardCredit: string;
    card: string;
    component: boolean;
    gift: boolean;
    credit: boolean;
}

const PaymentData:React.FC<IProps> = ({card, cardCredit, cardGift, gift, credit, component}) => {
    return (
        <React.Fragment>
            <div className={component && gift ? "payment__data" : "close"}>
                <p>GIFT CARD {cardGift}</p> 
            </div>
            <div className={component && credit ? "payment__data" : "close"}>
                <p>{card} {cardCredit}</p>
            </div>
        </React.Fragment>
    )
}

export default PaymentData
