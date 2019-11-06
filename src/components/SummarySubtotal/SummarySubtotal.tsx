import React from 'react'
import './SummarySubtotal.scss'


interface IProps {
    itemsValue: any;
    shipValue: any;
    disabledCode: boolean;
    checkValue: number;
}

const SummarySubtotal:React.FC<IProps> = ({itemsValue, shipValue, disabledCode, checkValue}) => {

    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: "none"}} className="summary__top__subtotal">
            <p>Subtotal</p>
                <p className="summary__total__value">${((itemsValue + checkValue).toFixed(2))}</p>
        </div>
    )
}

export default SummarySubtotal
