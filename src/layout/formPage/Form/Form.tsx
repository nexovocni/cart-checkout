import React, {useState} from 'react'
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
}

const Form:React.FC<IProps> = ({products, deleteProduct, changeProducts, setTax, setCheckValue, checkValue, shipValue, itemsValue, taxValue}) => {

    const [componentEmail, openComponentEmail] = useState(true)
    const [componentShipping, openComponentShipping] = useState(false)
    const [componentPayment, openComponentPayment] = useState(false)
    const [componentReview, openComponentReview] = useState(false)
    const [editBtn, openEditBtn]= useState({
        email: false,
        shipping: false,
        payment: false,
        review: false
    })


    return (
        <main className="main__form">
            <Email 
                componentEmail={componentEmail}
                openComponentEmail={openComponentEmail}
                openComponentShipping={openComponentShipping}
                openEditBtn={openEditBtn}
                editBtn={editBtn}
            />
            <Shipping 
                componentShipping={componentShipping}
                openComponentShipping={openComponentShipping}
                setTax={setTax}
                setCheckValue={setCheckValue}
                checkValue={checkValue}
                shipValue={shipValue}
                openComponentPayment={openComponentPayment}
                openEditBtn={openEditBtn}
                editBtn={editBtn}
            />
            <Payment 
                componentPayment={componentPayment}
                openComponentPayment={openComponentPayment}
                openComponentReview={openComponentReview}
                openEditBtn={openEditBtn}
                editBtn={editBtn}
            />
            <Review 
                products={ products } 
                deleteProduct = {deleteProduct}
                changeProducts = {changeProducts}
                checkValue={checkValue}
                itemsValue={itemsValue}
                componentReview={componentReview}
                openComponentReview={openComponentReview}
                shipValue={shipValue}
                taxValue={taxValue}
                openEditBtn={openEditBtn}
                editBtn={editBtn}
            />
        </main>
    )
}

export default Form
