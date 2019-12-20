import React, {useContext} from 'react'
import Email from '../../../components/Email/Email'
import Shipping from '../../../components/Shipping/Shipping'
import Payment from '../../../components/Payment/Payment'
import Review from '../../../components/Review/Review'
import {CartComponentContext} from '../../../contexts/CartComponentContext'
import './Form.scss'

const Form:React.FC = () => {

    const productContext:any = useContext(CartComponentContext)
    const {switchPage} = productContext

    return (
        <main className={!switchPage ? "main__form" : "main__form__close"}>
            <Email />
            <Shipping />
            <Payment />
            <Review />
        </main>
    )
}

export default Form