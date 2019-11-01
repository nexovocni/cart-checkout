import React, {useState} from 'react'

import Email from '../../../components/Email/Email'

import Shipping from '../../../components/Shipping/Shipping'

import './Form.scss'

interface IProps {
    products: any;
    changeProducts: any;
    deleteProduct: any;
    setTax: any;
}


const Form:React.FC<IProps> = ({products, deleteProduct, changeProducts, setTax}) => {

    const [component, openComponent] = useState(true)

    return (
        <main className="main">

            <Email 
                component={component}
                openComponent={openComponent}
            />
            <Shipping 
                component={component}
                openComponent={openComponent}
                setTax={setTax}
            />
        </main>
    )
}

export default Form
