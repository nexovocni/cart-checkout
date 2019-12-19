import React, { useState } from 'react'
import Header from './Header/Header'
import Products from './Products/Products'
import Form  from './Form/Form'
import Summary from './Summary/Summary'
import {ComponentContextProvider} from '../../contexts/FormComponentContext'
import {ValueContextProvider} from '../../contexts/ValueContext'
import './CartPage.scss'

interface IProps {
   
    switchComponent: boolean;
    setSwitchComponent: any;
}

const CartPage:React.FC<IProps> = ({  switchComponent, setSwitchComponent}) => {

    const [state, updateState] = useState(false)
    const [tax, setTax] = useState(false)

    return (
        <div className="cart__page">
        <div className="cart__page__main">
            <Header 
                switchComponent={switchComponent}
            />
            <div className="cart__page__main__content">
            <Products
                updateState={updateState}
                stateComponent={state}
                switchComponent={switchComponent}
            />
            <ValueContextProvider>
            <ComponentContextProvider>
                <Form
                    setTax={setTax}
                    switchComponent={switchComponent}
                />
            </ComponentContextProvider>
            </ValueContextProvider>
        </div>
        </div>
            {/* <Summary
                setCheckValue={setCheckValue}
                products={ products }
                stateComponent = {state}
                itemsValue={itemsValue}
                shipValue={shipValue}
                checkValue={checkValue}
                value={value}
                switchComponent={switchComponent}
                setSwitchComponent={setSwitchComponent}
                tax={tax}
                taxValue={taxValue}
            /> */}
    </div>
    )
}

export default CartPage
