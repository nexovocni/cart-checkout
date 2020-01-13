import React, {useContext} from 'react'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import './SummaryTitle.scss'

interface IProps {
    shipValue: number
}

const SummaryTitle:React.FC<IProps> = ({shipValue}) => {

    const productContext:any = useContext(CartComponentContext)
    const {disabledCode} = productContext.cartComponents

    return (
        <div style={{opacity: disabledCode ? .3 : 1, pointerEvents: disabledCode ? "auto" : "none"}} className="summarycart__top__shipping">
            <p className="summarycart__top__shipping-text">{shipValue > 0 ? `You are $${shipValue.toFixed(2)} away from free shipping` : `Free Shipment`}</p>
        </div>
    )
}

export default SummaryTitle
