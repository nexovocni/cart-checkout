import React, {useContext} from 'react'
import SummarySubtotal from '../SummarySubtotal/SummarySubtotal'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import {ProductContext} from '../../contexts/ProductContext'
import './ReviewData.scss'



const ReviewData:React.FC = () => {

    const cartProducts:any = useContext(ProductContext)
    const {values} = cartProducts
    const {itemsValue, taxValue, shipValue, checkValue, value} = values

    return (
        <div className="review__data__component">
            <div className="review__data__component__section">
            <SummaryTotal
                itemsValue={`$${itemsValue.toFixed(2)}`} 
                title="Your Items"
                valueTrans={false}
            />
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
            <SummaryTotal
                title="Shipping"
                itemsValue={shipValue < 1 ? 'Free' : `$${checkValue.toFixed(2)}`} 
                valueTrans={false}
            />
            </div>
            <SummarySubtotal 
                    itemsValue={value}
            />
        </div>
    )
}

export default ReviewData
