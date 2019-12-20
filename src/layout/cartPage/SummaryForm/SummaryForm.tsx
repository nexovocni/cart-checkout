import React, {useContext} from 'react'
import SummaryTitle from '../../../components/SummaryTitle/SummaryTitle'
import SummaryTotal from '../../../components/SummaryTotal/SummaryTotal'
import Code from '../../../components/Code/Code'
import SummarySubtotal from '../../../components/SummarySubtotal/SummarySubtotal'
import SummaryTax from '../../../components/SummaryTax/SummaryTax'
import {ProductContext} from '../../../contexts/ProductContext'
import {CartComponentContext} from '../../../contexts/CartComponentContext'
import './SummaryForm.scss'

const SummaryForm:React.FC = () => {

    const cartProducts:any = useContext(ProductContext)
    const {values} = cartProducts
    const {itemsValue, shipValue, checkValue, value} = values

    const productContext:any = useContext(CartComponentContext)
    const {switchPage, dispatch} = productContext

    return (
        <React.Fragment>
            <div className={!switchPage ? "summaryform" : "summaryform__close"}>
            <div className="summaryform__top">
                <SummaryTitle 
                    shipValue={shipValue} 
                />
                <SummaryTotal
                    itemsValue={`$${itemsValue.toFixed(2)}`}  
                    title="Your Items"
                    valueTrans={true}
                 />
                <div className="summaryform__line-grey"></div>
                <SummaryTotal 
                    title="Shipping"
                    itemsValue={shipValue < 1 ? 'Free' : `$${checkValue.toFixed(2)}`} 
                    valueTrans={false}
                 />
                <div className="summaryform__line-grey"></div>
                <SummaryTax  />
                <div className="summaryform__line-grey-tax"></div>
                <Code  
                    title="Have a promo code"
                    button="Apply"
                    placeholder="Enter Promo Code"
                />
                <div className="summaryform__line-grey-last"></div>
                <SummarySubtotal 
                    itemsValue={value}
                />
            </div>
            <div className="summaryform__bottom">
            <button onClick={() => {dispatch({type: "COMPONENT", payload: {switchPage: !switchPage}})}} className={!switchPage ? "button button_check" : "button_check_close"}>Go back</button>
            </div>
            </div>
            <div></div>
        </React.Fragment>
    )
}

export default SummaryForm