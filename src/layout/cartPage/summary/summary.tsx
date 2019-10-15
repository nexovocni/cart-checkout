import React,{useState} from 'react'
import './summary.scss'
import Checkbox from '../../../components/checkbox/checkbox'
import Tax from '../../../components/tax/tax'
import Code from '../../../components/code/code'
import Buttons from '../../../components/summaryButtons/buttons'
import MobileHeader from '../../../components/mobileHeader/MobileHeader'

interface IProps {
    products: any
}

interface IProduct {
    price: number
    quantity: number
    product: {}
}

const Summary:React.FC<IProps> = ({products}) => {

    const[CheckValue, setCheckValue] = useState(10)
    const [disabledCode, setDisabledCode] = useState(false)
    const [disabledTax, setDisabledTax] = useState(false)
    let itemsValue = 0

    {products.map( (product:IProduct) => {
        itemsValue += product.quantity * product.price
    })}

    const shipValue = (550 - itemsValue)
    
    return (
        <section className="summary">
            <MobileHeader products={products}/>
            <div className="summary__top">
                <div style={{opacity: disabledCode || disabledTax ? .3 : 1, pointerEvents: disabledCode || disabledTax ? "auto" : "none"}} className="summary__top__shipping">
                    <p className="summary__top__shipping-text">{shipValue > 0 ? `You are $${shipValue.toFixed(2)} away from free shipping` : `Free Shipment`}</p>
                </div>
                <div style={{opacity: disabledCode || disabledTax ? .3 : 1, pointerEvents: "none"}} className="summary__top__total">
                    <p>Your items</p>
                    <p>${itemsValue.toFixed(2)}</p>
                </div>
                <div style={{opacity: disabledCode || disabledTax ? .3 : 1 }} className="summary__line"></div>
                <Checkbox 
                    code={disabledCode} 
                    tax={disabledTax} update={setCheckValue} 
                    shipValue={shipValue}
                />
                <div className="summary__line-grey"></div>
                <Tax 
                    code={disabledCode} 
                    tax={disabledTax} 
                    update={setDisabledTax}
                />
                <div className="summary__line-grey"></div>
                <Code 
                    code={disabledCode} 
                    tax={disabledTax} 
                    update={setDisabledCode}
                />
                <div className="summary__line-grey"></div>
                <div style={{opacity: disabledCode || disabledTax ? .3 : 1, pointerEvents: "none"}} className="summary__top__subtotal">
                    <p>Subtotal</p>
                    <p className="summary__total__value">${shipValue > 0 ? (itemsValue + CheckValue).toFixed(2) : (itemsValue.toFixed(2))}</p>
                </div>
            </div>
            <Buttons isChecked={CheckValue}/>
        </section>
    )
}

export default Summary
