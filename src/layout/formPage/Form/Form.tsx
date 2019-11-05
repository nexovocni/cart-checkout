import React, {useState} from 'react'

import Email from '../../../components/Email/Email'

import Shipping from '../../../components/Shipping/Shipping'

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

    return (
        <main className="main__form">

            <Email 
                component={componentEmail}
                openComponent={openComponentEmail}
                openComponentShipping={openComponentShipping}
            />
            <Shipping 
                component={componentShipping}
                openComponent={openComponentShipping}
                setTax={setTax}
                setCheckValue={setCheckValue}
                checkValue={checkValue}
                shipValue={shipValue}
            />
        </main>
    )
}

export default Form
