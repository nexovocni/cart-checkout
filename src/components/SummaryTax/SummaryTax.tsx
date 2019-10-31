import React from 'react'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import "./SummaryTax.scss"

interface IProps {
    disabledCode: boolean,
    tax: boolean
}

const SummaryTax:React.FC<IProps> = ({disabledCode, tax}) => {

    const gst = 13.01
    const pst = 1.99
    
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
                    itemsValue={"$" + gst}
                />
                <SummaryTotal 
                    disabledCode={disabledCode} 
                    title="PST"
                    itemsValue={"$" + pst}
                />
            </div>
        </div>
    )
}

export default SummaryTax
