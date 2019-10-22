import React, { useState } from 'react'
import Header from './HeaderCart/HeaderCart'
import Products from './Products/Products'
import SummaryCart from './SummaryCart/SummaryCart'
import './CartPage.scss'

interface IProps {
    products: any[],
    changeProducts: any,
    deleteProduct: any,
    checkValue: any,
    setCheckValue: any
}

const CartPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, checkValue, setCheckValue}) => {

    const [state, updateState] = useState(false)

    return (
             <div className="cart__page">
                <div className="cart__page__main">
                    <Header />
                    <Products
                        products={ products } 
                        deleteProduct = {deleteProduct}
                        changeProducts = {changeProducts}
                        updateState={updateState}
                        stateComponent={state}
                    />
                </div>
                    <SummaryCart
                        checkValue={checkValue}
                        setCheckValue={setCheckValue}
                        products={ products }
                        stateComponent = {state}
                    />
            </div>
    )
}

export default CartPage
