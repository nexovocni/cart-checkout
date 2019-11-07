import React, {useState} from 'react'
import Email from '../../../components/Email/Email'
import Shipping from '../../../components/Shipping/Shipping'
import Payment from '../../../components/Payment/Payment'

import './Form.scss'

interface IProps {
    products: any;
    changeProducts: any;
    deleteProduct: any;
    setTax: any;
    setCheckValue: any;
    checkValue: number;
    shipValue: number;

}

const Form:React.FC<IProps> = ({products, deleteProduct, changeProducts, setTax, setCheckValue, checkValue, shipValue}) => {

    const [componentEmail, openComponentEmail] = useState(true)
    const [componentShipping, openComponentShipping] = useState(false)
    const [componentPayment, openComponentPayment] = useState(false)

    return (
        <main className="main__form">
            <Email 
                componentEmail={componentEmail}
                openComponentEmail={openComponentEmail}
                openComponentShipping={openComponentShipping}
            />
            <Shipping 
                componentShipping={componentShipping}
                openComponentShipping={openComponentShipping}
                setTax={setTax}
                setCheckValue={setCheckValue}
                checkValue={checkValue}
                shipValue={shipValue}
                openComponentPayment={openComponentPayment}
            />
            <Payment 
                componentPayment={componentPayment}
                openComponentPayment={openComponentPayment}
            />
        </main>
    )
}

export default Form
