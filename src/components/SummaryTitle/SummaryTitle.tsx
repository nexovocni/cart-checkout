import React from 'react'
import './SummaryTitle.scss'

interface IProps {
    disabledCode: boolean
    shipValue: number
}

const SummaryTitle:React.FC<IProps> = ({disabledCode, shipValue}) => {
    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: disabledCode ? "auto" : "none"}} className="summary__top__shipping">
            <p className="summary__top__shipping-text">{shipValue > 0 ? `You are $${shipValue.toFixed(2)} away from free shipping` : `Free Shipment`}</p>
        </div>
    )
}

export default SummaryTitle
