import React from 'react'
import Header from './Header/Header'
import Products from './Products/Products'
import Form  from './Form/Form'
import Summary from './Summary/Summary'
import {ComponentContextProvider} from '../../contexts/FormComponentContext'
import './CartPage.scss'

const CartPage:React.FC = () => {

    return (
        <div className="cart__page">
        <div className="cart__page__main">
            <Header />
            <div className="cart__page__main__content">
            <Products />
            <ComponentContextProvider>
                <Form />
            </ComponentContextProvider>
        </div>
        </div>
            <Summary />
    </div>
    )
}

export default CartPage
