import React, { useState } from 'react'
import Header from './HeaderCart/HeaderCart'
import Products from './Products/Products'
import SummaryCart from './SummaryCart/SummaryCart'
import './CartPage.scss'

interface IProps {
    products: any[];
    changeProducts: any;
    deleteProduct: any;
    setCheckValue: any;
    itemsValue: any;
    shipValue: any;
    checkValue: number;
}

const CartPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, setCheckValue, itemsValue, shipValue,  checkValue}) => {

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
                        setCheckValue={setCheckValue}
                        products={ products }
                        stateComponent = {state}
                        itemsValue={itemsValue}
                        shipValue={shipValue}
                        checkValue={checkValue}
                    />
            </div>
    )
}

export default CartPage
