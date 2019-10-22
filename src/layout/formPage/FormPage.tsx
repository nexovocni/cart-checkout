import React, {useState} from 'react'
import SummaryForm from './SummaryForm/SummaryForm'
import Header from './HeaderForm/HeaderForm'
import Form from './Form/Form'
import './FormPage.scss'

interface IProps {
    products: any[],
    changeProducts: any,
    deleteProduct: any,
    checkValue: any,
}

const FormPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, checkValue}) => {

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
            />
        </div>
    )
}
export default FormPage
