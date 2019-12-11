import React from 'react'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import "./SummaryTax.scss"

interface IProps {
    disabledCode: boolean,
    tax: boolean;
    taxValue: any;
}

const SummaryTax:React.FC<IProps> = ({disabledCode, tax, taxValue}) => {
 
    return (
        <div className={tax ? "summary-first" : "summary-first-open"} >
            <div className={!tax ? "summary-first-tax-open" : "summary-first-tax"}>
                <SummaryTotal
                    itemsValue="TBD"
                    disabledCode={disabledCode} 
                    title="Taxes"
                />
            </div>
            <div className={tax ? "summary-first-total-open" : "summary-first-total"} >
                <SummaryTotal 
                    disabledCode={disabledCode} 
                    title="GST"
                    itemsValue={"$" + taxValue.gst}
                />
                <SummaryTotal 
                    disabledCode={disabledCode} 
                    title="PST"
                    itemsValue={"$" + taxValue.pst}
                />
            </div>
        </div>
    )
}

export default SummaryTax
