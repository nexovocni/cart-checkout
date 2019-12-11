import React, {useState} from 'react'
import MobileHeader from '../../../components/MobileHeader/MobileHeader'
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle'
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal'
import Code from '../../../components/Code/Code'
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal'
import SummaryTax from '../../../components/SummaryTax/SummaryTax'
import {Link} from 'react-router-dom'
import './SummaryForm.scss'

interface IProps {
    products: any;
    itemsValue: any;
    shipValue: number;
    tax: boolean;
    checkValue: number;
    taxValue: any;
}

const SummaryForm:React.FC<IProps> = ({products, itemsValue, shipValue, tax, checkValue, taxValue}) => {

    const [disabledCode, setDisabledCode] = useState(false)

    return (
        <section className="summaryform">
            <div className="summaryform__sticky">
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
                    itemsValue={shipValue < 1 ? 'Free' : `$${checkValue.toFixed(2)}`} 
                 />
                <div className="summaryform__line-grey"></div>
                <SummaryTax 
                    disabledCode={disabledCode} 
                    tax={tax}
                    taxValue={taxValue}
                />
                <div className="summaryform__line-grey-tax"></div>
                <Code 
                    setCode={setDisabledCode}
                    code={disabledCode} 
                    stateComponent= {false}
                    title="Have a promo code"
                    button="Apply"
                    placeholder="Enter Promo Code"
                />
                <div className="summaryform__line-grey-last"></div>
                <SummarySubtotal 
                    itemsValue={itemsValue}
                    shipValue={shipValue}
                    disabledCode={disabledCode}
                    checkValue={checkValue}
                />
                <Link to="/" className="summaryform button_check">Go back</Link>
            </div>
            </div>
            <div></div>

        </section>
    )
}

export default SummaryForm
