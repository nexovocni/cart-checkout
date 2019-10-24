import React from 'react'
import './SummarySubtotal.scss'

interface IProps {
    itemsValue: any,
    checkValue: any,
    shipValue: any,
    disabledCode: boolean,
}

const SummarySubtotal:React.FC<IProps> = ({itemsValue, checkValue, shipValue, disabledCode}) => {

    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__subtotal">
            <p>Subtotal</p>
            <p className="summary__total__value">${shipValue > 0 ? (itemsValue + checkValue).toFixed(2) : (itemsValue.toFixed(2))}</p>
        </div>
    )
}

export default SummarySubtotal
