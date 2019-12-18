import React, {useState, useContext} from 'react'
import Email from '../../../components/Email/Email'
import Shipping from '../../../components/Shipping/Shipping'
import Payment from '../../../components/Payment/Payment'
import Review from '../../../components/Review/Review'
import './Form.scss'

interface IProps {
    products: any;
    changeProducts: any;
    deleteProduct: any;
    setTax: any;
    setCheckValue: any;
    checkValue: number;
    shipValue: number;
    itemsValue: number;
    taxValue: any;
    switchComponent: boolean;
}

const Form:React.FC<IProps> = ({products, deleteProduct, changeProducts, setTax, setCheckValue, checkValue, shipValue, itemsValue, taxValue, switchComponent}) => {

    return (
        <main className={!switchComponent ? "main__form" : "main__form__close"}>
            <Email />
            <Shipping 
                setTax={setTax}
                setCheckValue={setCheckValue}
                checkValue={checkValue}
                shipValue={shipValue}
            />
            <Payment />
            <Review 
                products={ products } 
                deleteProduct = {deleteProduct}
                changeProducts = {changeProducts}
                checkValue={checkValue}
                itemsValue={itemsValue}
                shipValue={shipValue}
                taxValue={taxValue}
            />
        </main>
    )
}

export default Form