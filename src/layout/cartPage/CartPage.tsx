import React, { useState, useEffect } from 'react'
import Header from './header/header'
import Products from './Products/Products'
import Summary from './summary/summary'
import './CartPage.scss'

interface IProps {
    products: any[],
    changeProducts: any,
    deleteProduct: any,
    checkValue: any,
    setCheckValue: any
}

const CartPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, checkValue, setCheckValue}) => {

    return (
             <div className="cart__page">
                <div className="cart__page__main">
                    <Header />
                    <Products
                        products={ products } 
                        deleteProduct = {deleteProduct}
                        changeProducts = {changeProducts}
                    />
                </div>
                    <Summary 
                        checkValue={checkValue}
                        setCheckValue={setCheckValue}
                        products={ products }
                        stateComponent = {state}
                    />
            </div>
    )
}

export default CartPage
