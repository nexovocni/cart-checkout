import React, {useState} from 'react'
import SummaryForm from './SummaryForm/SummaryForm'
import Header from './HeaderForm/HeaderForm'
import Form from './Form/Form'
import Email from '../../components/Email/Email'
import './FormPage.scss'

interface IProps {
    products: any[],
    changeProducts: any,
    deleteProduct: any,
    checkValue: any,
    itemsValue: any,
    shipValue: any,
}

const FormPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, checkValue, itemsValue, shipValue}) => {
    return (
        <div className="form__page">
            <div className="form__page__main">
                <Header />
                <Form
                    products={ products } 
                    deleteProduct = {deleteProduct}
                    changeProducts = {changeProducts}
                />
            </div>
             <SummaryForm
                checkValue={checkValue}
                products={ products }
                itemsValue={itemsValue}
                shipValue={shipValue}
            />
        </div>
    )
}
export default FormPage
