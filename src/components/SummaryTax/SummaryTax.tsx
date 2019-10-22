import React from 'react'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import "./SummaryTax.scss"

interface IProps {
    disabledCode: boolean,
    tax: boolean
}

const SummaryTax:React.FC<IProps> = ({disabledCode, tax}) => {
    
    return (
        <div className={tax ? "summary-total-open" : "summary-total"}  >
            <SummaryTotal 
                disabledCode={disabledCode} 
                title="GST"
                itemsValue="$3.09"
            />
            <SummaryTotal 
                disabledCode={disabledCode} 
                title="PST"
                itemsValue="$1.99"
            />
        </div>
    )
}

export default SummaryTax
