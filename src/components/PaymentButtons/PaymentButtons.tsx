import React from 'react'
import './PaymentButtons.scss'

interface IProps {
   openCredit: any;
   openGift: any;
   componentPayment: boolean;
   giftComponent: boolean;
   creditComponent: boolean;
}

const PaymentButtons:React.FC<IProps> = ({openCredit, openGift, componentPayment, creditComponent, giftComponent}) => {
    return (
        <div className={componentPayment ? "payment__component__buttons" : "close" }>
            <div className="payment__component__buttons__up">
                <button onClick={openCredit} className={ creditComponent? "payment__component__button border-black" : "payment__component__button"}>Credit card</button>
                <button onClick={openGift} className={ giftComponent? "payment__component__button border-black" : "payment__component__button"}>Gift card</button>
            </div>
            <div className="payment__component__buttons__down">
                <button className="payment__component__button"><img className="apple" src="img/apple.svg"/></button>
                <button className="payment__component__button"><img className="paypay" src="img/pay.svg"/></button>
            </div>
        </div>
    )
}

export default PaymentButtons
