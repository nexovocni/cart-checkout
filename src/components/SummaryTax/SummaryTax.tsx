import React, {useContext} from 'react'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import {ProductContext} from '../../contexts/ProductContext'
import {CartComponentContext} from '../../contexts/CartComponentContext'
import "./SummaryTax.scss"

const SummaryTax:React.FC = () => {

    const cartContext:any = useContext(CartComponentContext)
    const {tax} = cartContext

    const productContext:any = useContext(ProductContext)
    const {values} = productContext
    const {taxValue} = values
 
    return (
        <div className={tax ? "summary-first" : "summary-first-open"} >
            <div className={!tax ? "summary-first-tax-open" : "summary-first-tax"}>
                <SummaryTotal
                    itemsValue="TBD"
                    title="Taxes"
                    valueTrans={false}
                />
            </div>
            <div className={tax ? "summary-first-total-open" : "summary-first-total"} >
                <SummaryTotal 
                    title="GST"
                    itemsValue={"$" + taxValue.gst}
                    valueTrans={false}
                />
                <SummaryTotal 
                    title="PST"
                    itemsValue={"$" + taxValue.pst}
                    valueTrans={false}
                />
            </div>
        </div>
    )
}

export default SummaryTax
