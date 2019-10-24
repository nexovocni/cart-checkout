import React, {useState, useRef, useEffect} from 'react'
import MobileHeader from '../../../components/MobileHeader/MobileHeader'
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle'
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal'
import Code from '../../../components/Code/Code'
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal'
import SummaryTax from '../../../components/SummaryTax/SummaryTax'
import './SummaryForm.scss'

interface IProps {
    products: any,
    checkValue: any,
    itemsValue: any,
    shipValue: number
}

const SummaryForm:React.FC<IProps> = ({products, checkValue, itemsValue, shipValue}) => {

    const [disabledCode, setDisabledCode] = useState(false)

    const [tax, setTax] = useState(false)

    const [value, setValue] = useState(itemsValue)

    const toggleOnClick = () => {
        setTax(!tax)
        {!tax ? setValue(value + 5) : setValue(value)} 
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
                    itemsValue={value}
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
