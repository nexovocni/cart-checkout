import React,{useState} from 'react'
import './summary.scss'
import Checkbox from '../../../components/Checkbox/Checkbox'
import Code from '../../../components/Code/Code'
import Buttons from '../../../components/SummaryButtons/Buttons'
import MobileHeader from '../../../components/MobileHeader/MobileHeader'

interface IProps {
    products: any,
    checkValue: any,
    setCheckValue: any
    stateComponent: boolean
}

interface IProduct {
    price: number
    quantity: number
    product: {}
}

const Summary:React.FC<IProps> = ({products, stateComponent, setCheckValue, checkValue}) => {

    const [disabledCode, setDisabledCode] = useState(false)
    let itemsValue = 0

    {products.map( (product:IProduct) => {
        itemsValue += product.quantity * product.price
    })}

    const shipValue = (550 - itemsValue)
    
    return (
        <section style={{opacity: stateComponent ? .3 : 1, pointerEvents: stateComponent ? "none" : "auto"}} className="summary">
            <MobileHeader products={products}/>
            <div className="summary__top">
                <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: disabledCode ? "auto" : "none"}} className="summary__top__shipping">
                    <p className="summary__top__shipping-text">{shipValue > 0 ? `You are $${shipValue.toFixed(2)} away from free shipping` : `Free Shipment`}</p>
                </div>
                <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__total">
                    <p>Your items</p>
                    <p>${itemsValue.toFixed(2)}</p>
                </div>
                <div style={{opacity: disabledCode ? .3 : 1 }} className="summary__line"></div>
                <Checkbox 
                    code={disabledCode} 
                    update={setCheckValue} 
                    shipValue={shipValue}
                    stateComponent= {stateComponent}
                />
                <div className="summary__line-grey"></div>
                <Code 
                    setCode={setDisabledCode}
                    code={disabledCode} 
                    stateComponent= {stateComponent}
                    title="Estimate your tax and shipping"
                    button="Estimate"
                    placeholder="Enter Tax Code"
                />
                <div className="summary__line-grey"></div>
                <Code 
                    setCode={setDisabledCode}
                    code={disabledCode}
                    stateComponent={stateComponent}
                    title="Have a promo code"
                    button="Apply"
                    placeholder="Enter Zip Code"
                />
                <div className="summary__line-grey"></div>
                <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__subtotal">
                    <p>Subtotal</p>
                    <p className="summary__total__value">${shipValue > 0 ? (itemsValue + checkValue).toFixed(2) : (itemsValue.toFixed(2))}</p>
                </div>
            </div>
            <Buttons 
                stateComponent={stateComponent} 
                isChecked={checkValue}
            />
        </section>
    )
}

export default Summary
