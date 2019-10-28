import React, {useState} from 'react'
import SummaryForm from './SummaryForm/SummaryForm'
import Header from './HeaderForm/HeaderForm'
import Form from './Form/Form'
import Email from './Email/Email'
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
    const [component, openComponent] = useState(true)
    return (
        <div className="form__page">
            <div className="form__page__main">
                <Header />
                <Form
                    products={ products } 
                    deleteProduct = {deleteProduct}
                    changeProducts = {changeProducts}
                />
                 <Email component={component} openComponent={openComponent}/>
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
