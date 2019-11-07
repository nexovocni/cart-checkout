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

    const passValidation = (mainStr: any) => {
        let vis = mainStr.slice(-4),
        countNum = '';
    
        for(var i = (mainStr.length); i>0; i--){
        countNum += '*';
    }

    return countNum + vis
}

    return (
        <React.Fragment>
            <div className={!component && !gift ? "payment__data" : "close"}>
                <p>{cardGift ? "Gift card" : null} {passValidation(cardGift)}</p> 
            </div>
            <div className={!component && !credit ? "payment__data" : "close"}>
                <p>{card} {passValidation(cardCredit)}</p>
                
            </div>
        </React.Fragment>
    )
}

export default PaymentData
