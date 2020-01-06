import React from 'react'
import './PaymentData.scss'
import formatString from "format-string-by-pattern";

interface IProps {
    cardCredit: string;
    card: string;
    component: boolean;
    gift: boolean;
}

const PaymentData:React.FC<IProps> = ({card, cardCredit, gift, component}) => {

    return (
        <div className={ !component && gift || card ? "payment__data__component" : "close"}>
            <div className={!component && gift ? "payment__data" : "close"}>
                <p>Applied gift card</p> 
            </div>
            <div className={!component && card ? "payment__data" : "close"}>
                <p>{card} &nbsp; {formatString("●●●● ●●●● ●●●● 9999",cardCredit)}</p>
                
            </div>
        </div>
    )
}

export default PaymentData
