import React, {useState} from 'react'
import SummaryForm from './SummaryForm/SummaryForm'
import Header from './HeaderForm/HeaderForm'
import Form from './Form/Form'
import Email from '../../components/Email/Email'
import './FormPage.scss'

interface IProps {
    products: any[];
    changeProducts: any;
    deleteProduct: any;
    checkValue: number;
    itemsValue: any;
    shipValue: any;
    setCheckValue: any;
}

const FormPage:React.FC<IProps> = ({products, deleteProduct, changeProducts, checkValue, itemsValue, shipValue, setCheckValue}) => {

    const [tax, setTax] = useState(false)
    const taxValue = {
        gst: 3.01,
        pst: 1.99
    }

    return (
        <div className="form__page">
            <div className="form__page__main">
                <Header />
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
                />
            </div>
             <SummaryForm
                tax={tax}
                products={ products }
                itemsValue={itemsValue}
                shipValue={shipValue}
                checkValue={checkValue}
                taxValue={taxValue}
            />
        </div>
    )
}
export default FormPage
