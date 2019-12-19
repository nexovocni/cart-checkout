import React, {useState, useContext} from 'react'
import Email from '../../../components/Email/Email'
import Shipping from '../../../components/Shipping/Shipping'
import Payment from '../../../components/Payment/Payment'
import Review from '../../../components/Review/Review'
import './Form.scss'

interface IProps {
    setTax: any;
    switchComponent: boolean;
}

const Form:React.FC<IProps> = ({ setTax, switchComponent}) => {

    return (
        <main className={!switchComponent ? "main__form" : "main__form__close"}>
            <Email />
            <Shipping 
                setTax={setTax}
            />
            <Payment />
            <Review 
                checkValue={checkValue}
                itemsValue={itemsValue}
                shipValue={shipValue}
                taxValue={taxValue}
            />
        </main>
    )
}

export default Form