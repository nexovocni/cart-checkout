import React, {useState} from 'react'
import MobileHeader from '../../../components/MobileHeader/MobileHeader'
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle'
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal'
import Code from '../../../components/Code/Code'
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal'
import SummaryTax from '../../../components/SummaryTax/SummaryTax'
import './SummaryForm.scss'

interface IProps {
    products: any,
    checkValue: any
}

interface IProduct {
    price: number
    quantity: number
    product: {}
}

const SummaryForm:React.FC<IProps> = ({products, checkValue}) => {

    const [disabledCode, setDisabledCode] = useState(false)
    let itemsValue = 0

    {products.map( (product:IProduct) => {
        itemsValue += product.quantity * product.price
    })}

    const shipValue = (550 - itemsValue)

    const [tax, setTax] = useState(false)

    const toggleOnClick = () => {
        setTax(!tax)  
    }

    return (
        <section className="summaryform">
            <MobileHeader products={products}/>
            <div className="summaryform__top">
                <SummaryTitle 
                    shipValue={shipValue} 
                    disabledCode={disabledCode}
                />
                <SummaryTotal
                    itemsValue={`$${itemsValue.toFixed(2)}`} 
                    disabledCode={disabledCode} 
                    title="Your Items"
                 />
                  <div className="summaryform__line-grey"></div>
                  <SummaryTotal
                    disabledCode={disabledCode} 
                    title="Shipping"
                    itemsValue={checkValue < 10 || shipValue < 1 ? 'Free' : '$10.00'} 
                 />
                  <div className="summaryform__line-grey"></div>
                    <SummaryTax 
                        disabledCode={disabledCode} 
                        tax={tax}
                    />
                <div className="summaryform__line-grey-tax"></div>
                <Code 
                    setCode={setDisabledCode}
                    code={disabledCode} 
                    stateComponent= {null}
                    title="Have a promo code"
                    button="Apply"
                    placeholder="Enter Promo Code"
                />
                <div className="summaryform__line-grey-last"></div>
                <SummarySubtotal 
                    itemsValue={tax ? itemsValue + 5 : itemsValue }
                    checkValue={checkValue}
                    shipValue={shipValue}
                    disabledCode={disabledCode}
                />
            </div>
            <button onClick={toggleOnClick}>Click me</button>
        </section>
    )
}

export default SummaryForm
