import React, { useState } from 'react'
import Header from './Header/Header'
import Products from './Products/Products'
import Form  from './Form/Form'
import Summary from './Summary/Summary'
import './CartPage.scss'

interface IProps {
    products: any[];
    changeProducts: any;
    deleteProduct: any;
    setCheckValue: any;
    itemsValue: any;
    shipValue: any;
    checkValue: number;
    switchComponent: boolean;
    setSwitchComponent: any;
    value: number;
}

const CartPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, setCheckValue, itemsValue, shipValue, checkValue, value, switchComponent, setSwitchComponent}) => {

    const [state, updateState] = useState(false)
    const [tax, setTax] = useState(false)
    const taxValue = {
        gst: 3.01,
        pst: 1.99
    }

    return (
        <div className="cart__page">
        <div className="cart__page__main">
            <Header 
                switchComponent={switchComponent}
            />
            <div className="cart__page__main__content">
            <Products
                products={ products } 
                deleteProduct = {deleteProduct}
                changeProducts = {changeProducts}
                updateState={updateState}
                stateComponent={state}
                switchComponent={switchComponent}
            />
            <Form
                setTax={setTax}
                products={ products } 
                deleteProduct = {deleteProduct}
                changeProducts = {changeProducts}
                setCheckValue={setCheckValue}
                checkValue={checkValue}
                shipValue={shipValue}
                itemsValue={itemsValue}
                taxValue={taxValue}
                switchComponent={switchComponent}
        />
        </div>
        </div>
            <Summary
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
            />
    </div>
    )
}

export default CartPage
