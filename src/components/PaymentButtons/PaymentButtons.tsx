import React from 'react'
import './PaymentButtons.scss'

interface IProps {
   open: any;
   openCredit: any;
   openGift: any;
   componentPayment: boolean;
}

const PaymentButtons:React.FC<IProps> = ({open, openCredit, openGift, componentPayment}) => {
    return (
        <div className={componentPayment ? "payment__component__buttons" : "payment__component__buttons" }>
            <div className="payment__component__buttons__up">
                <button onClick={openCredit} className={open.credit ? "payment__component__button border-black" : "payment__component__button"}>Credit card</button>
                <button onClick={openGift} className={open.gift ? "payment__component__button border-black" : "payment__component__button"}>Gift card</button>
            </div>
            <div className="payment__component__buttons__down">
                <button className="payment__component__button btnPadding"><img className="apple" src="img/apple.svg"/></button>
                <button className="payment__component__button btnPadding"><img className="paypay" src="img/pay.svg"/></button>
            </div>
        </div>
    )
}

export default PaymentButtons
