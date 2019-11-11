import React from 'react'
import './PaymentData.scss'
import formatString from "format-string-by-pattern";

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
                <p>Applied gift card</p> 
            </div>
            <div className={!component && card ? "payment__data" : "close"}>
                <p>{card} &nbsp; {formatString("●●●● ●●●● ●●●● 9999",cardCredit)}</p>
                
            </div>
        </React.Fragment>
    )
}

export default PaymentData
