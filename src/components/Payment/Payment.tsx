import React, {useState} from 'react'
import './Payment.scss'
import PaymentData from '../PaymentData/PaymentData'
import PaymentGift from '../PaymentGift/PaymentGift'
import PaymentCredit from '../PaymentCredit/PaymentCredit'
import PaymentButtons from '../PaymentButtons/PaymentButtons'

interface IProps {
    componentPayment: boolean;
    openComponentPayment: any;
}

const Payment:React.FC<IProps> = ({componentPayment, openComponentPayment}) => {

    const [card, setCard] = useState("")
    const [cardCredit, setCardCredit] = useState("")
    const [cardGift, setCardGift] = useState("")
    const [open, setOpen] = useState({
        credit: false,
        gift: false
    })

    const openGift = () => {
        setOpen({
            credit: false,
            gift: true
        })
    }

    const openCredit = () => {
        setOpen({
            credit: true,
            gift: false
        })
    }

    const validate = (value:any) => (value ? null : "Invalid input")

    const submitBtn = () => {
        openComponentPayment(!componentPayment)
        setOpen({
            credit: false,
            gift: false
        })
    }

    return (
        <div className="payment">
            <h2 className="payment__number">3</h2>
            <div className="payment__component__up">
                <div className="payment__component">
                    <h2 className="payment__heading">Payment method</h2>
                    <PaymentData 
                        cardCredit={cardCredit}
                        cardGift={cardGift}
                        card={card}
                        component={componentPayment}
                        gift={open.gift}
                        credit={open.credit}
                    />
                    <button onClick={() => {openComponentPayment(!componentPayment)}} className={!componentPayment ? "payment__heading__button" : "close"}>Edit</button>
                    <PaymentButtons 
                        openGift={openGift}
                        openCredit={openCredit}
                        componentPayment={componentPayment}
                        giftComponent={open.gift}
                        creditComponent={open.credit}
                    />
                </div>
                <div className={open.gift ? "payment__component__gift" : "close"}> 
                    <PaymentGift 
                        gift={open.gift}
                        setCardGift={setCardGift}
                        validate={validate}
                        submitBtn={submitBtn}
                    />
                </div>
                <div className={open.credit ? "payment__component__credit" : "close"}> 
                    <PaymentCredit 
                        card={open.credit}
                        submitBtn={submitBtn}
                        setCard={setCard}
                        setCardCredit={setCardCredit}
                        validate={validate}
                        cardCredit={cardCredit}
                        cardValue={card}
                    />
                </div>
            </div>  
        </div>
    )
}

export default Payment
