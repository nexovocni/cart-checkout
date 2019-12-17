import React, {useState} from 'react'
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle'
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal'
import Code from '../../../components/Code/Code'
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal'
import SummaryTax from '../../../components/SummaryTax/SummaryTax'
import './SummaryForm.scss'

interface IProps {
    itemsValue: any;
    shipValue: number;
    tax: boolean;
    checkValue: number;
    value: number;
    taxValue: any;
    switchComponent: boolean;
    setSwitchComponent: any;
}

const SummaryForm:React.FC<IProps> = ({itemsValue, shipValue, tax, checkValue, value, taxValue, switchComponent, setSwitchComponent}) => {

    const [disabledCode, setDisabledCode] = useState(false)

    return (
        <React.Fragment>
            <div className={!switchComponent ? "summaryform" : "summaryform__close"}>
            <div className="summaryform__top">
                <SummaryTitle 
                    shipValue={shipValue} 
                    disabledCode={disabledCode}
                />
                <SummaryTotal
                    itemsValue={`$${itemsValue.toFixed(2)}`} 
                    disabledCode={disabledCode} 
                    title="Your Items"
                    valueTrans={true}
                 />
                <div className="summaryform__line-grey"></div>
                <SummaryTotal
                    disabledCode={disabledCode} 
                    title="Shipping"
                    itemsValue={shipValue < 1 ? 'Free' : `$${checkValue.toFixed(2)}`} 
                    valueTrans={false}
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
                    itemsValue={value}
                    shipValue={shipValue}
                    disabledCode={disabledCode}
                    checkValue={checkValue}
                />
            </div>
            <div className="summaryform__bottom">
            <button onClick={() => {setSwitchComponent(!switchComponent)}} className={!switchComponent ? "button button_check" : "button_check_close"}>Go back</button>
            </div>
            </div>
            <div></div>
        </React.Fragment>
    )
}

export default SummaryForm